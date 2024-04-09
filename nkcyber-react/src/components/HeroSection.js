import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src ='/videos/video-1.mp4' autoPlay loop muted />
      <h1>NKCyber</h1>
      <p>Join the club today</p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--primary' 
          buttonSize='btn--large'>
            <Link to="/divisions" className='Getting_Started_Button'>
              Divisions
            </Link>
        </Button>

      </div>
    </div>
  )
}

export default HeroSection
