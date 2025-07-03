import React from 'react';

const RecruiterSignUpStep1: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Main container for the content, mimicking the overall structure */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-[#4880FF]">
        {/* Left Decorative Panel (Simplified for now) */}
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
            {/* Progress Stepper */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-[#0B6AEA] rounded-full flex items-center justify-center text-white text-xs font-semibold">1</div>
              <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
              <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center text-black text-xs font-semibold">2</div>
              <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
              <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center text-black text-xs font-semibold">3</div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-[#00213D]">Create Your Recruiter Account</h2>
              <p className="text-sm text-gray-600 mt-2">
                Already have an account? <a href="#" className="text-[#0B6AEA]">Log in</a>
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">Email ID*</label>
              <input
                type="email"
                id="email"
                placeholder="Email ID*"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm"
              />
            </div>

            {/* Company Button */}
            <button
              type="button"
              disabled
              className="w-full bg-gray-200 text-gray-400 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold cursor-not-allowed"
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

export default RecruiterSignUpStep1;
