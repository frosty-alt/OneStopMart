import './otp.css';
import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import mailIcon from '../assets/mail.svg';
const OtpVerify = () => {
  const { state } = useLocation();
  const phone = state?.phone;
  const navigate = useNavigate();

  const [otp, setOtp] = useState(Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(25);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timer === 0) { setCanResend(true); return; }
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pasted)) return;
    const newOtp = Array(6).fill('');
    pasted.split('').forEach((char, i) => (newOtp[i] = char));
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, 5)].focus();
    e.preventDefault();
  };

  const handleResend = () => {
    setTimer(25);
    setCanResend(false);
    setOtp(Array(6).fill(''));
    setError('');

  };

  const HandleOtp = async () => {
    const otpString = otp.join('');
    if (otpString.length < 6) {
      setError('Please enter all 6 digits.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch(
        'https://onestopmartbackend-eqe8hea0azegacdq.southeastasia-01.azurewebsites.net/auth/verify-otp',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone, otp: otpString }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/userlogin');
      } else {
        setError(data.message || 'Invalid OTP. Try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-verify-container">
      <div className="mail-circle">

        <img src={mailIcon} alt="mail" style={{ width: 36, height: 36 }} />
      </div>
         
        <h1 className="verify">Phone Number Verification</h1>
      <h3
  className='txt'
  style={{ textAlign: 'center', width: '100%' }}
>
  Enter your code
</h3>
      <p>A 6-digit code has been sent to your SMS. <span>{phone}</span></p>

      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            className="otp-box"
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>

      {error && <p className="error-msg">{error}</p>}

      {/* Timer bar */}
      <div className="timer-wrap">
        <div className="timer-bar-bg">
          <div className="timer-bar" style={{ width: `${(timer / 25) * 100}%` }} />
        </div>
        <p className="timer-text">
          {timer > 0 ? <>Resend code in <span>{timer}s</span></> : 'Code expired'}
        </p>
      </div>

      <button className="resend-btn" onClick={handleResend} disabled={!canResend}>
        Resend OTP
      </button>

      <Button
        text={loading ? 'Verifying...' : 'Verify & Continue'}
        className="otp-verify-button"
        onClick={HandleOtp}
        disabled={loading}
      />
    </div>
  );
};

export default OtpVerify;