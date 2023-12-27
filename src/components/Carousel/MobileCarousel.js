import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Card from './Card/Card'
import Image_file from './Image_file'

import './MobileCarousel.css'

function MobileCarousel() {
    const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevButton = () => {
    if (currentIndex === 1) {
        setCurrentIndex(Image_file.length - 2)
    }
    else {
        setCurrentIndex(currentIndex - 1)
    }
  };
  const handleNextButton = () => {
    if (currentIndex === Image_file.length - 2) {
        setCurrentIndex(1)
    }
    else {
        setCurrentIndex(currentIndex + 1)
    }
  };


  return (
    <div className='mobile-carousel-container'>
        <FontAwesomeIcon icon={faChevronLeft} className='mobile-carousel-button' onClick={handlePrevButton}/>
        <div className='mobile-deck-container'>
        {
          <Card 
          image={Image_file[currentIndex].image}
          language={Image_file[currentIndex].language}
          title={Image_file[currentIndex].title}
          description={Image_file[currentIndex].description}
          />
        }
        </div>
        <FontAwesomeIcon icon={faChevronRight} className='mobile-carousel-button' onClick={handleNextButton}/>
    </div>
  )
}

export default MobileCarousel