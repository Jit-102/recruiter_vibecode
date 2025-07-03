import React from 'react';

// Assuming EyeIcon is available or define it here if not globally accessible
const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg>
);

const SignIn: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Main container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-[#4880FF] shadow-2xl rounded-lg overflow-hidden">
        {/* Left Decorative Panel - Consistent Theme */}
        <div className="w-full lg:w-1/2 p-8 py-16 text-white flex flex-col justify-center items-start space-y-8 bg-[#4880FF]">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <p className="text-lg">
            Access your account to continue managing top-tier SDV talent and drive your company's success.
          </p>
          {/* Optional: Could have a generic image or different text here if needed */}
          <div className="w-full mt-8 p-4 bg-white rounded-lg text-center">
            <p className="text-[#0B6AEA] font-semibold">
              CreamCollar for Recruiters
            </p>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full lg:w-1/2 bg-white p-8 flex justify-center items-center">
          <div className="w-full max-w-md p-8 py-12 bg-white">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#00213D]">Sign In to Your Account</h2>
              <p className="text-sm text-gray-500 mt-2">
                Enter your credentials to access your account.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 mb-6">
              <div className="relative">
                <label htmlFor="emailSignIn" className="sr-only">Email ID*</label>
                <input
                  type="email"
                  id="emailSignIn"
                  placeholder="Email ID*"
                  className="mt-1 block w-full px-4 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0B6AEA] focus:border-[#0B6AEA] sm:text-sm"
                />
                {/* Mini-label can be added dynamically on focus/input if desired */}
              </div>
              <div className="relative">
                <label htmlFor="passwordSignIn" className="sr-only">Password*</label>
                <div className="flex items-center mt-1 border border-gray-300 rounded-md shadow-sm focus-within:ring-[#0B6AEA] focus-within:border-[#0B6AEA]">
                  <input
                    type="password"
                    id="passwordSignIn"
                    placeholder="Password*"
                    className="block w-full px-4 py-3.5 border-none rounded-l-md placeholder-gray-400 focus:outline-none sm:text-sm"
                  />
                  <button type="button" className="px-3 text-gray-500">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>
                 {/* Mini-label can be added dynamically on focus/input if desired */}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#0B6AEA] focus:ring-blue-400 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700"> Remember me </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#0B6AEA] hover:text-blue-500"> Forgot your password? </a>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit" // Changed to submit for a sign-in form
              className="w-full bg-[#0B6AEA] text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>

            {/* Footer Text (Optional for sign-in, but keeping consistent for now) */}
            <div className="mt-10 text-center">
               <p className="text-sm text-gray-600">
                Don't have an account? <a href="#" className="font-medium text-[#0B6AEA] hover:text-blue-500">Sign Up</a>
              </p>
              <p className="text-xs text-gray-500 mt-4 mb-2">
                By signing in, you agree to CreamCollar’s Conditions of Use and Privacy Policy.
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

export default SignIn;
