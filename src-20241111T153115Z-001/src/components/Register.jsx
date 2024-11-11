import React, { useState } from 'react';
import backgroundImage from '../assets/loginbac.jpg'; 


import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let history = useNavigate();
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    const Data = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password
    };
    console.log(Data); 
    axios.post('https://aecf-2402-4000-b140-374a-4129-c04d-fb66-22e0.ngrok-free.app/register.php', Data)
      .then((result) => {
        if (result.data.Status === 'Invalid') {
          alert('Invalid User');
        } else {
          history('/login');
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px', 
        margin: 'auto',
        padding: '24px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}>
        <form onSubmit={submitForm}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Register</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 'bold' }}>First Name</label>
              <input 
                type="text" 
                name="first_name" 
                placeholder="Enter your first name" 
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
                value={data.first_name}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 'bold' }}>Last Name</label>
              <input 
                type="text" 
                name="last_name" 
                placeholder="Enter your last name" 
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
                value={data.last_name}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 'bold' }}>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 'bold' }}>Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
                value={data.password}
                onChange={handleChange}
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <button type="submit" style={{
                padding: '8px 16px',
                color: '#fff',
                backgroundColor: '#007bff',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
