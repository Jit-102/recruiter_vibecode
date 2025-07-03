// import RecruiterSignUpStep1 from './components/signup/RecruiterSignUpStep1';
// import RecruiterSignUpStep1Authorized from './components/signup/RecruiterSignUpStep1Authorized';
// import RecruiterSignUpStep2 from './components/signup/RecruiterSignUpStep2';
// import RecruiterSignUpStep3OTP from './components/signup/RecruiterSignUpStep3OTP';
import SignIn from './components/auth/SignIn';
import './App.css';

function App() {
  return (
    // <RecruiterSignUpStep1 />
    // <RecruiterSignUpStep1Authorized />
    // <RecruiterSignUpStep2 showPasswordStrength={true} isFormValid={true} />
    // <RecruiterSignUpStep3OTP mobileOtp="123 456" emailOtp="456 789" timerExpired={true} />
    <SignIn />
  );
}

export default App;
