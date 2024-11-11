import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../assets/loginbac.jpg';

const Login = () => {
  let Navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const Data = {
      email: user.email,
      password: user.password
    };
    console.log(Data);
    axios
      .post('https://aecf-2402-4000-b140-374a-4129-c04d-fb66-22e0.ngrok-free.app/login.php', Data)
      .then((result) => {
        if (result.status === 200) {
          window.localStorage.setItem('email', result.data.Email);
          window.localStorage.setItem(
            'userName',
            result.data.first_name + ' ' + result.data.first_name
          );
          Navigate('/appointment');
        } else {
          alert('Invalid User');
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f7f7f7'
      }}
    >
      <form
        onSubmit={submitForm}
        style={{
          maxWidth: '400px',
          width: '100%',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          margin: '20px 0'
        }}
      >
        <h1 style={{ margin: '20px 0', fontSize: '24px', color: '#333' }}>Login Page</h1>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px', color: '#333' }}>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            style={{
              width: 'calc(100% - 30px)',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
              color: '#333'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px', color: '#333' }}>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            style={{
              width: 'calc(100% - 30px)',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
              color: '#333'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="submit"
            name="submit"
            className="btn btn-success"
            value="Please Login"
            style={{
              width: '100%',
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: ' #335BFF',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          />
        </div>
        <p style={{ fontSize: '14px', color: '#333' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#007bff' }}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
