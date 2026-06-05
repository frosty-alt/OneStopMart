import Button from '../component/Button'
import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flagnepal from '../assets/flagnepal.svg'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')        
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    const handleSendOTP = async () => {
        if (phone.length < 10) {
            setError('Please enter a valid 10 digit phone number')
            return
        }

        try {
            setLoading(true)
            setError('')
            const token = localStorage.getItemem('token')
            const response = await fetch('https://onestopmartbackend-eqe8hea0azegacdq.southeastasia-01.azurewebsites.net/auth/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    phone: `+977${phone}`
                   
                })
                
            })

            const data = await response.json()

            if (response.ok) {
                console.log('OTP sent successfully:', data)
                navigate('/otp-verify', { state: { phone: `+977${phone}` } });
            } else {
                setError(data.message || 'Failed to send OTP. Please try again.')
            }

        } catch (error) {
            console.error('Error sending OTP:', error)
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='Hero'>
            <img
                className='logo'
                src="https://onestopmart.sgp1.cdn.digitaloceanspaces.com/adaptive-icon.png"
                alt="logo"
            />
            <h1>OneStopMart</h1>
            <p className='description'>
                Enter your phone number to get <br /> started with fresh delivery and great offers
            </p>
            <h4>Phone Number</h4>

            <div className="phone-container">
                <img className="flag" src={flagnepal} alt="Nepal Flag" />
                <span>+977</span>
                <input
                    className='ph-box'
                    type="text"
                    value={phone}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value) && value.length <= 10) {
                            setPhone(value);
                        }
                    }}
                    placeholder='Enter your Phone Number'
                />
            </div>

            {error && <p className="error-msg">{error}</p>}

            <Button
                className="Login-btn"
                onClick={handleSendOTP}
                text={loading ? 'Sending...' : 'Send OTP'}
                disabled={loading}
            />

            <p className='terms'>
                By continuing, you agree to our{' '}
                <a
                    href="https://witty-flower-011f8aa00.7.azurestaticapps.net/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='a'
                >
                    Terms of Service and Privacy Policy
                </a>
            </p>
        </div>
    )
}

export default Login