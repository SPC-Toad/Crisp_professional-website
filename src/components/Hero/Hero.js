import React from 'react'
import hero from '../Asset/hero.jpg'
import background from '../Asset/linedrawing_bct.jpeg'
import { FaArrowRight } from "react-icons/fa";
import Resume from '../Asset/2024_Resume.pdf'


import './Hero.css'


function Hero() {
  return (
    <div className='hero-container' id='Hero'>
      <img src={background} alt='background' className='hero-background-img'/>
      <div className='left-handside-container'>
        <div id='hero-title'>My name is Sangyun Kim</div>
        <div className='hero-detail-container'>
          <hr id='hero-red-line'/>
          <div className='description-button-container'>
            <div id='hero-intro'>I am a Software Engineer and US Army Reservist</div>
            <div id='hero-detail'>Currently pursuing a Bachelor&#39;s degree in Computer Science at Boston University</div>
            <a href={Resume} className='hero-button-container'>
              <div  id='hero-button'>FIND MORE ABOUT KIM</div>
              <FaArrowRight id='button-arrow'/>
            </a>
          </div>
        </div>
      </div>
      <div className='image-container'>
        <img src={hero} alt='hero' id='hero-img'/>
      </div>
    </div>
  )
}

export default Hero