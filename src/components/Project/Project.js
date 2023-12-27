import React, { useState, useEffect } from 'react'
import Carousel from '../Carousel/Carousel'
import MobileCarousel from '../Carousel/MobileCarousel'
import './Project.css'

function Project() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='project-container' id='PROJECT'>
      {isMobile ? <MobileCarousel /> : <Carousel />}
    </div>
  )
}

export default Project
