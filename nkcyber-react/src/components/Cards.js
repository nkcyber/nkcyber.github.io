import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Divisions!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="images/nkcyber-logo.svg"
            text='Explore our CST Division'
            label='CST'
            path='/cst'
            />

            <CardItem 
            src="images/nkcyber-logo.svg"
            text='Explore our R&D Division'
            label='R&D'
            path='/r&d'
            />

            <CardItem 
            src="images/NKCyberLogo_Green.svg"
            text='Explore our Build Team Division'
            label='Build Team'
            path='/build_team'
            />

            <CardItem 
            src="images/NKCyberLogo_Red.svg"
            text='Explore our Red Team Division'
            label='Red Team'
            path='/red_team'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
