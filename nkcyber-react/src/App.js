// Code for the main page of the website
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import clublogo from './nkcyber-logo.svg';
import Navbar from './components/Navbar';

import './App.css';



function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact />
          </Routes>
        </Router>
        
    </>
  );
}

export default App;