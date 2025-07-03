import React from 'react';

// Placeholder for a tick icon, replace with an actual SVG or icon component
const VerifiedTickIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);


const RecruiterSignUpStep1Authorized: React.FC = () => {
  const userEmail = "stevenquadros@gmail.com"; // Placeholder
  const companyName = "Continental Pvt. Ltd."; // Placeholder
  const companyLogoUrl = "https://placehold.co/62x62"; // Placeholder

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Main container for the content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-[#4880FF]">
        {/* Left Decorative Panel (Consistent with Step 1) */}
        <div className="w-full lg:w-1/2 p-8 text-white flex flex-col justify-center items-start space-y-8 bg-[#4880FF]">
          <h1 className="text-3xl font-bold">Discover Top-Tier SDV Talent, Fresh & Ready to Innovate!</h1>
          <p className="text-lg">
            Find skilled SDV professionals ready to drive your company’s success. Connect with fresh talent and stay ahead in the industry!
          </p>
          <div className="w-full mt-8 p-4 bg-white rounded-lg text-center">
            <a href="#" className="text-[#0B6AEA] font-semibold">
              Curious about joining CreamCollar as a recruiter? <span className="underline">Learn How</span>
            </a>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full lg:w-1/2 bg-white p-8 flex justify-center items-center">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            {/* Progress Stepper - As per the second HTML block provided for this screen */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-[#0B6AEA] rounded-full flex items-center justify-center text-white text-xs font-semibold">1</div>
              <div className="flex-1 h-1 bg-gray-200 rounded-full"></div> {/* This line is grey in the reference */}
              <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center text-black text-xs font-semibold">2</div>
              <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
              <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center text-black text-xs font-semibold">3</div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-[#00213D]">Create Your Trainer Account</h2>
              <p className="text-sm text-gray-600 mt-2">
                Already have an account? <a href="#" className="text-[#0B6AEA]">Log in</a>
              </p>
            </div>

            {/* Authorized Email Display */}
            <div className="mb-6">
              <div className="relative mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm">
                <span className="text-xs text-gray-500 absolute -top-2 left-2 bg-white px-1">Email ID*</span>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{userEmail}</span>
                  <VerifiedTickIcon className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-1">This is an authorised email ID</p>
            </div>

            {/* Company Information */}
            <div className="mb-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-100 flex items-center gap-4">
                <img src={companyLogoUrl} alt="Company Logo" className="w-14 h-14 rounded-full bg-white" />
                <div className="flex-1">
                  <p className="text-xs text-gray-600">You are an employee from:</p>
                  <p className="text-base font-bold text-[#00213D]">{companyName}</p>
                </div>
              </div>
            </div>

            {/* Company Button - Now Active */}
            <button
              type="button"
              className="w-full bg-[#0B6AEA] text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              This is My Company
            </button>

            {/* Footer Text */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 mb-2">
                By creating an account or logging in, you agree to CreamCollar’s Conditions of Use and Privacy Policy.
              </p>
              <a href="#" className="text-xs text-[#0B6AEA]">
                Need assistance? Reach out to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterSignUpStep1Authorized;
