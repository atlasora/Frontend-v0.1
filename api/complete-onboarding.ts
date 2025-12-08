// api/complete-onboarding.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId, firstName, lastName, location, phone } = req.body as {
      userId: string;
      firstName: string;
      lastName: string;
      location?: string;
      phone?: string;
    };

    if (!userId || !firstName || !lastName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 1. Get a Management API token using your M2M app
    const tokenResponse = await fetch(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: process.env.AUTH0_M2M_CLIENT_ID,
          client_secret: process.env.AUTH0_M2M_CLIENT_SECRET,
          audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
          grant_type: 'client_credentials',
        }),
      }
    );

    if (!tokenResponse.ok) {
      const text = await tokenResponse.text();
      console.error('Error getting management token:', text);
      return res.status(500).json({ error: 'Failed to get management token' });
    }

    const { access_token } = (await tokenResponse.json()) as { access_token: string };

    // 2. Patch user_metadata
    const patchResponse = await fetch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${encodeURIComponent(userId)}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_metadata: {
            firstName,
            lastName,
            location,
            phone,
            onboardingComplete: true,
          },
        }),
      }
    );

    if (!patchResponse.ok) {
      const text = await patchResponse.text();
      console.error('Error updating user metadata:', text);
      return res.status(500).json({ error: 'Failed to update user metadata' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error in complete-onboarding:', err);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}

