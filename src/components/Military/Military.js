import React from 'react'
import './Military.css';
import Army from '../Asset/USAARMY.png';

function Military() {
  return (
    <div className='military-container' id='MILITARY'>
        <div className='military-left-container'>
            <img src={Army} alt='rank' id='army-img'/>
            <div id='military-title'>Military Experience</div>
        </div>
        <div className='military-right-container'>
            <p id='military-description-bold'> I am a specialist "E-4" in United States Army Reserve, working as wheeled vehicle mechanic.</p>
            <p id='military-description'> Supervising and performing maintenance and recovery operations on wheeled vehicles and associated items, as well as heavy-wheeled vehicles and select armored vehicles</p>
        </div>
    </div>
  )
}

export default Military