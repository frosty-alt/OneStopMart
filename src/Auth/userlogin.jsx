import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './userlogin.css'
import Marker from '../components/Marker';

const userlogin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [expanded, setExpanded] = useState(false);


    const HandleSubmit = async () => {
        if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError('Name can only contain letters and spaces.');
      return;
    }
 
    setError('');
    setLoading(true);
   try {
    const token = localStorage.getItem('token');
       if (!token) {
      throw new Error('User is not authenticated');
    }
  const response = await fetch(
     'https://onestopmartbackend-eqe8hea0azegacdq.southeastasia-01.azurewebsites.net/auth/set-name',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to set user name');
  }

  const data = await response.json();
  console.log('Name set successfully:', data);
  navigate('/home', { state: { name: data.user.name } });

} catch (error) {
  console.error('Error Occurred:', error);
}
finally{
  setLoading(false);
}
}
return (
  <div className="userlogin-container">
    <div className="userlogin-card">
      <h2>Complete Your Profile</h2>

      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label>Select Your Location</label>




            <div className={`map-wrapper ${expanded ? "expanded" : ""}`}>
              <button
            className="map-toggle"
          onClick={() => setExpanded(!expanded)} >
           {expanded ? "Close Map" : "Expand Map"}
           </button>

                   <Marker />
                      </div>

      <button disabled={loading} onClick={HandleSubmit}>
        {loading ? "Submitting..." : "Continue"}
      </button>
    </div>
  </div>
  </div>
);
}

export default userlogin
