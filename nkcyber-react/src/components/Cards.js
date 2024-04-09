import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

//imports for the card links
import cst from './pages/cst'
import rnd from './pages/r&d'
import build_team from './pages/build_team'
import red_team from './pages/red_team'

/*
<Route path='/cst' exact element={ <cst />}></Route>
<Route path='/r&d' exact element={ <rnd />}></Route>
<Route path='/build_team' exact element={ <build_team />}></Route>
<Route path='/red_team' exact element={ <red_team />}></Route>
*/

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
            path='/divisions'
            />

            <CardItem 
            src="images/nkcyber-logo.svg"
            text='Explore our R&D Division'
            label='R&D'
            path='/divisions'
            />

            <CardItem 
            src="images/NKCyberLogo_Green.svg"
            text='Explore our Build Team Division'
            label='Build Team'
            path='/divisions'
            />

            <CardItem 
            src="images/NKCyberLogo_Red.svg"
            text='Explore our Red Team Division'
            label='Red Team'
            path='/divisions'
            />
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
