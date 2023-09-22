// src/ButtonContainer.js
import React from 'react';
import './ButtonContainer.css'; // Import the CSS file
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes, not Route
import ButtonA from './component/ButtonA';
import ButtonB from './component/ButtonB';
import Home from './component/Home';


const ButtonContainer = () => {
  return (
    <BrowserRouter>    
   <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/buttonA" element={<ButtonA/>} />
      <Route path="/buttonB" element={<ButtonB/>} />
    </Routes>
  </BrowserRouter>
   
    
  );
};

export default ButtonContainer;