import React from 'react';

// Assuming TickIcon is available or define it here if not globally accessible
const TickIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

interface RecruiterSignUpStep3OTPProps {
  mobileOtp?: string;
  emailOtp?: string;
  timerExpired?: boolean; // To control "Resend OTPs" state
  isVerifying?: boolean; // To control button state if needed later
}

const RecruiterSignUpStep3OTP: React.FC<RecruiterSignUpStep3OTPProps> = ({
  mobileOtp = "",
  emailOtp = "",
  timerExpired = true, // Default to timer expired as per Screen 5 reference
}) => {
  const isButtonDisabled = !mobileOtp || !emailOtp; // Simple logic for now

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Main container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-[#4880FF]">
        {/* Left Decorative Panel */}
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
            {/* Progress Stepper - Step 3 active */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-[#0B6AEA] rounded-full flex items-center justify-center">
                <TickIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 h-1 bg-[#0B6AEA] rounded-full"></div>
              <div className="w-7 h-7 bg-[#0B6AEA] rounded-full flex items-center justify-center">
                <TickIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 h-1 bg-[#0B6AEA] rounded-full"></div>
              <div className="w-7 h-7 bg-[#0B6AEA] rounded-full flex items-center justify-center text-white text-xs font-semibold">3</div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-[#00213D] mb-2">Verification</h2>
              <p className="text-xs text-gray-500">
                An SMS and email with the One Time Password (OTP) have been sent to your mobile number and email ID respectively
              </p>
            </div>

            {/* OTP Input Fields */}
            <div className="space-y-6 mb-4">
              <div>
                <label htmlFor="mobileOtp" className="sr-only">Enter Mobile Number OTP</label>
                <input
                  type="text"
                  id="mobileOtp"
                  placeholder={mobileOtp ? "" : "Enter Mobile Number OTP"}
                  defaultValue={mobileOtp}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm"
                />
                {mobileOtp && (
                  <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                    Enter Mobile Number OTP
                  </span>
                )}
              </div>
              <div className="relative">
                <label htmlFor="emailOtp" className="sr-only">Enter Email OTP</label>
                <input
                  type="text"
                  id="emailOtp"
                  placeholder={emailOtp ? "" : "Enter Email OTP"}
                  defaultValue={emailOtp}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm"
                />
                {emailOtp && (
                  <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                    Enter Email OTP
                  </span>
                )}
              </div>
            </div>

            {/* Timer and Resend OTP */}
            <div className="flex justify-end items-center text-xs mb-8 space-x-2">
              <span className="text-gray-500">Time Remaining: 0s</span>
              {/* In the "filled" state from HTML, "Resend OTPs" is still shown, implying timer might have expired or it's always available after first attempt */}
              <a href="#" className="text-[#0B6AEA] underline">Resend OTPs</a>
            </div>


            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                type="button"
                disabled={isButtonDisabled && (!mobileOtp || !emailOtp)} // Keep disabled logic, but ensure it's enabled if OTPs are filled
                className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold
                  ${(isButtonDisabled && (!mobileOtp || !emailOtp)) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#0B6AEA] text-white hover:bg-blue-700 focus:ring-blue-500'}`}
              >
                Verify and Continue
              </button>
              <button
                type="button"
                className="w-full text-[#0B6AEA] py-3 px-4 border border-transparent rounded-md text-sm font-semibold hover:bg-gray-50 focus:outline-none"
              >
                Go Back
              </button>
            </div>

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

export default RecruiterSignUpStep3OTP;
