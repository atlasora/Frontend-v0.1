import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostVerification: React.FC = () => {
  const navigate = useNavigate();
  const [licenceNumber, setLicenceNumber] = useState("");
  const [licenceFileName, setLicenceFileName] = useState<string | null>(null);

  const handleLicenceUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = e.target.files?.[0];
    if (!file) return;
    // TODO: validate size/type; max 10MB, jpg/png/pdf
    setLicenceFileName(file.name);
  };

  return (
    <HostLayout
      title="Verify your identity & STR licence"
      description="This information is required before your listing can go live. Identity verification is handled by a secure third-party provider. Your STR licence confirms that your rental meets local regulations."
      step={13}
      totalSteps={13}
    >
      <div className="space-y-10">
        {/* Identity Verification */}
        <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-700">
          <h2 className="text-xl font-semibold mb-2">Identity Verification</h2>
          <p className="text-neutral-400 mb-4">
            To enable instant payouts and keep our platform secure, we verify all hosts.
            Verification is handled by a trusted third-party provider.
          </p>
          <button
            className="px-4 py-2 rounded-lg bg-[#f2bfa7] hover:bg-[#e3b49c] text-black font-medium transition"
            onClick={() => alert("Identity verification will be added soon.")}
          >
            Start verification
          </button>
          <p className="text-neutral-500 text-sm mt-2">Status: Not completed</p>
        </div>

        {/* STR Licence */}
        <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-700">
          <h2 className="text-xl font-semibold mb-2">Short-term Rental Licence</h2>
          <label className="block mb-2 text-neutral-300">Licence Number</label>
          <input
            type="text"
            placeholder="Enter your licence or registration number"
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white mb-4"
            value={licenceNumber}
            onChange={(e) => setLicenceNumber(e.target.value)}
          />
          <label className="block mb-2 text-neutral-300">Upload Licence Document</label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white mb-2"
            onChange={handleLicenceUpload}
          />
          <p className="text-neutral-500 text-sm">
            Supported formats: JPG, PNG, PDF. Max size 10MB.
          </p>
          {licenceFileName && (
            <p className="text-xs text-neutral-400 mt-1">
              Selected: {licenceFileName}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/confirm")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostVerification;


