// Code for the main page of the website
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';

//pages
import Home from './components/pages/Home';
import About from './components/pages/about';
import Divisions from './components/pages/divisions';


function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={ <Home />}></Route>
            <Route path='/About' exact element={ <About />}></Route>
            <Route path='/divisions' exact element={ <Divisions />}></Route>
            <Route path='/wiki' Component={() => {
              window.location.href = 'https://wiki.nkcyber.org';
              return null;
              }}></Route>
          </Routes>
        </Router>
        
    </>
  );
}


export default App;