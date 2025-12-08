// api/update-profile.js
const fetch = require('node-fetch');

async function getManagementToken() {
  const url = `https://${process.env.AUTH0_DOMAIN}/oauth/token`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.AUTH0_M2M_CLIENT_ID,
      client_secret: process.env.AUTH0_M2M_CLIENT_SECRET,
      audience: process.env.AUTH0_MANAGEMENT_AUDIENCE,
      grant_type: 'client_credentials',
    }),
  });

  if (!res.ok) {
    console.error('Failed to get management token', await res.text());
    throw new Error('Failed to get management token');
  }

  const data = await res.json();
  return data.access_token;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { userId, firstName, lastName, location, phone } = JSON.parse(
      req.body || '{}'
    );

    if (!userId || !firstName || !lastName) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const token = await getManagementToken();

    const patchRes = await fetch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${encodeURIComponent(
        userId
      )}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_metadata: {
            firstName,
            lastName,
            location: location || null,
            phone: phone || null,
            onboarded: true,
          },
        }),
      }
    );

    if (!patchRes.ok) {
      console.error('Failed to update user', await patchRes.text());
      res.status(500).json({ error: 'Failed to update user' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
};

