import React from 'react'
import Button from '../component/Button'
import { Link } from 'react-router-dom';
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import './login.css'
import { useState } from 'react';
const Login = () => {
    
  const [phone, setPhone] = useState('') 
  return (
    <div className='Hero'>
        <img className='logo' src="path/to/hero-image.jpg" alt="logo" />
      <h1>OneStopMart</h1>
        <p className='description'>Enter your phone number to get <br/> started with fresh delivery and great offers</p>
        <h4 >Phone Number</h4>
       <PhoneInput className='ph-box'
   defaultCountry="np"            
        value={phone}
        onChange={(setPhone)}
        inputStyle={{ width: '100%' }}
        inputProps={{ placeholder: 'Enter your Phone Number' }}
           />
        

        <Button className="Login-btn"  text="Send OTP" />
        <p className='terms'>By continuing, you agree to our ,<Link className='a' to="/terms">  Terms of Service and Privacy Policy</Link>.</p>
       
    </div>
  )
}

export default Login
