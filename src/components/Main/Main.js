import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Military from '../Military/Military'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

import './Main.css'

function Main() {
  return (
    <div className='main-container'>
      <Navbar />
      <div className='main-body-container'>
        <Hero />
        <Military />
        <Project />
        <Contact />
        <Footer/>
      </div>
    </div>
  )
}

export default Main