import React from 'react'
import './IntroContainer.css'
import { useLocation } from 'react-router-dom'
import loyaltybadge from '../../assets/loyaltybadge.svg'
const IntroContainer = () => {
  const location = useLocation ()
   console.log('Location object:', location); // Check full location
  console.log('Location state:', location.state); // Check state
  console.log('Name value:', location.state?.name); // Check name
  
  const name = location.state?.name || 'Guest';
  return (
    <div className="IntroContainer">
        <div className="greeting">
        <h3>Welcome Back, {name} </h3>
        <p>Your fresh harvest from Pokhara Valley is ready for tracking.</p>
        </div>
        <div className="OSMStars"> 
            <div className="text-content">
            <p>OneStopMart Stars</p>
            <h2 className='points'>1234 Points</h2>
               </div>
            <img src={loyaltybadge} alt="Loyalty Badge" className="loyalty-badge" />
        </div>
      
    </div>
  )
}

export default IntroContainer
