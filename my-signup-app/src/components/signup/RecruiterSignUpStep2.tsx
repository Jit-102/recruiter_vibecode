import React from 'react';

// Placeholder Icons - Replace with actual SVGs or an icon library
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const InformationTipIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg>
);

const TickIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

interface RecruiterSignUpStep2Props {
  showPasswordStrength?: boolean; // To control the display for Screen 4
  isFormValid?: boolean; // To control button state for Screen 4
}

const RecruiterSignUpStep2: React.FC<RecruiterSignUpStep2Props> = ({
  showPasswordStrength = false, // Default to Screen 3 behavior
  isFormValid = false // Default to disabled button
}) => {
  // In a real app, these would come from form state and validation
  const firstName = showPasswordStrength ? "Steven" : "";
  const lastName = showPasswordStrength ? "Quadros" : "";
  const mobileNumber = showPasswordStrength ? "839 483 0939" : "";
  const password = showPasswordStrength ? "********" : "";

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
            {/* Progress Stepper - Step 2 active */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-[#0B6AEA] rounded-full flex items-center justify-center">
                <TickIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 h-1 bg-[#0B6AEA] rounded-full"></div>
              <div className="w-7 h-7 bg-[#0B6AEA] rounded-full flex items-center justify-center text-white text-xs font-semibold">2</div>
              <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
              <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center text-black text-xs font-semibold">3</div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-[#00213D]">Setup Account</h2>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 mb-8">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  defaultValue={firstName}
                  className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm ${showPasswordStrength && firstName ? 'text-gray-700' : 'text-gray-400'}`}
                />
                 {showPasswordStrength && firstName && (
                  <div className="absolute -top-2 left-2 bg-white px-1">
                    <span className="text-xs text-gray-500">First Name</span>
                  </div>
                )}
              </div>
              <div className="relative">
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  defaultValue={lastName}
                  className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm ${showPasswordStrength && lastName ? 'text-gray-700' : 'text-gray-400'}`}
                />
                {showPasswordStrength && lastName && (
                  <div className="absolute -top-2 left-2 bg-white px-1">
                    <span className="text-xs text-gray-500">Last Name</span>
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
                <div className={`relative flex items-center mt-1 border border-gray-300 rounded-md shadow-sm focus-within:ring-[#0B6AEA] focus-within:border-[#0B6AEA] ${showPasswordStrength && mobileNumber ? 'text-gray-700' : 'text-gray-400'}`}>
                  <div className="px-4 py-3 border-r border-gray-300">
                    {/* In a real app, country flag would be dynamic */}
                    {/* <img src="https://flagcdn.com/w20/in.png" alt="IN flag" className="inline w-5 h-auto mr-2"/> */}
                    <span className="text-sm">+91</span>
                    <ChevronDownIcon className="inline w-4 h-4 ml-1 text-gray-500" />
                  </div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    defaultValue={mobileNumber}
                    className="block w-full px-4 py-3 border-none rounded-r-md placeholder-gray-400 focus:outline-none sm:text-sm"
                  />
                </div>
                {showPasswordStrength && mobileNumber && (
                  <div className="absolute -top-2 left-2 bg-white px-1">
                    <span className="text-xs text-gray-500">Mobile Number</span>
                  </div>
                )}
                <div className="flex items-start mt-2 text-xs text-gray-500">
                  <InformationTipIcon className="w-4 h-4 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Your phone number will be used for communications with CreamCollar and will not be presented to candidates during any part of the recruitment process</span>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="password_step2_initial" className="sr-only">Password</label>
                <div className={`flex items-center mt-1 border rounded-md shadow-sm focus-within:ring-[#0B6AEA] focus-within:border-[#0B6AEA] ${showPasswordStrength && password ? 'border-gray-300' : 'border-gray-300'}`}>
                  <input
                    type="password" // Change to text when toggled
                    id="password_step2_initial"
                    placeholder="Password"
                    defaultValue={password}
                    className={`block w-full px-4 py-3 border-none rounded-l-md placeholder-gray-400 focus:outline-none sm:text-sm ${showPasswordStrength && password ? 'text-gray-700' : 'text-gray-400'}`}
                  />
                  <button type="button" className="px-3 text-gray-500">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>
                 {showPasswordStrength && password && (
                  <div className="absolute -top-2 left-2 bg-white px-1">
                    <span className="text-xs text-gray-500">Password</span>
                  </div>
                )}
                {showPasswordStrength && (
                  <p className="text-xs text-green-600 mt-1 font-semibold">Password is strong</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                type="button"
                disabled={!isFormValid && !showPasswordStrength} // Enable if form is valid OR if we are showing password strength demo
                className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold
                  ${(!isFormValid && !showPasswordStrength) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#0B6AEA] text-white hover:bg-blue-700 focus:ring-blue-500'}`}
              >
                Verify Email And Mobile Number
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

export default RecruiterSignUpStep2;
