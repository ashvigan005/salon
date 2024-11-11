import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/loginbac.jpg'; // Ensure this path is correct
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const [appointments, setAppointments] = useState([]);

  // Load appointments from localStorage when the component mounts
  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      phone: formData.phone,
    };
    console.log(Data);
    axios.post('https://aecf-2402-4000-b140-374a-4129-c04d-fb66-22e0.ngrok-free.app/appointment.php', Data)
    .then((result) => {
      console.log(result.data);
      if (result.status === 200) {
        alert('Appointment Created! :)');
        const updatedAppointments = [...appointments, formData];
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: ''
        });
      } else {
        // history('');
        alert('Failed');
      }
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
  
  };

  const handleCancel = () => {
    setAppointments([]);
    localStorage.removeItem('appointments');
  };

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '200px'
    }}>
      <div style={{ 
        padding: '20px',
        maxWidth: '700px', // Increased the maxWidth
        width: '100%',
        margin: '0 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center' 
      }}>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Book an Appointment</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="service">Service</label>
            <input 
              type="text" 
              id="service" 
              name="service" 
              value={formData.service} 
              onChange={handleChange} 
              style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="date">Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="time">Time</label>
            <input 
              type="time" 
              id="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer'
            }}>Book Appointment</button>
            <button type="button" onClick={handleCancel} style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#dc3545',
              color: '#fff',
              cursor: 'pointer'
            }}>Cancel</button>
          </div>
        </form>
      </div>
      {appointments.length > 0 && (
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          maxWidth: '700px', // Increased the maxWidth
          width: '100%', 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '10px', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' 
        }}>
          <h2 style={{ textAlign: 'center' }}>Submitted Appointments</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Phone</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Service</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Date</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.email}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.phone}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.service}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.date}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Appointment;
