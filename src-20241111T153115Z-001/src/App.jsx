import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Ensure Home component is correctly imported
import Login from './components/Login'; // Import the Login component
import Register from './components/Register';
import Appointment from './components/Appointment';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/appointment" element={<Appointment />} /> 
          {/* Add other routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
