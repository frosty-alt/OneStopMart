import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const userlogin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    

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
    console.log('All localStorage:', {...localStorage});
    console.log('All sessionStorage:', {...sessionStorage});
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
    <div className="userlogin">
        <h3>User Login</h3>
        <p>This is the user login page.</p>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <button disabled={loading} onClick={HandleSubmit}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
    </div>
  )
}

export default userlogin
