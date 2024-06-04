import React, {useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import './Carousel.css'
import Card from './Card/Card'
import Image_file from './Image_file'

function Carousel() {
  const ref = useRef();
  const itemsRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scrollToId(currentIndex);
        }
      },
      {
        rootMargin: '0px',
      }
    );

    const div = containerRef.current;
    if (div) {
      observer.observe(div);
    }

    return () => {
      if (div) {
        observer.unobserve(div);
      }
    };
  });

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function scrollToId(index) {
    const map = getMap();
    const node = map.get(index);
    const prevNode = map.get(index - 1);
    const nextNode = map.get(index + 1);
    node.className = 'middleActive'
    prevNode.className = 'leftActive'
    nextNode.className = 'rightActive'
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  const handlePrevButton = () => {
    if (currentIndex === 1) {
        setCurrentIndex(Image_file.length - 2);
        scrollToId(Image_file.length - 2);
    } else {
        scrollToId(currentIndex - 1);
        setCurrentIndex( currentIndex - 1 );
    }
  };
  const handleNextButton = () => {
      if (currentIndex === Image_file.length - 2) {
          setCurrentIndex(1);
          scrollToId(1);
      } else {
          scrollToId(currentIndex + 1);
          setCurrentIndex(currentIndex + 1);
      }
  };


  function Dots({currentIndex, setCurrentIndex}) {
    return (
      <div className='dots-container'>
        {Image_file.map((_, index) => (
          <div 
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => {
              if (index !== 0 && index !== Image_file.length - 1) {
                setCurrentIndex(index);
                scrollToId(index);
              }
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className='project-gallery-container' ref={containerRef}>
      <div className='gallery-container'>
        <FontAwesomeIcon icon={faChevronLeft} className='icon-item' onClick={() => handlePrevButton()}/>
        <div className='deck-container' ref={ref}>
        {
          Image_file.map((component, index) => (
            <div ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(index, node);
              } else {
                map.delete(index);
              }
            }}
              key={index}
              >
                <Card 
                  web_address={component.web_address}
                  image={component.image}
                  language={component.language}
                  title={component.title}
                  description={component.description}
                />
              </div>
            )
          )
        }
        </div>
        <FontAwesomeIcon icon={faChevronRight} className='icon-item' onClick={() => handleNextButton()}/>
      </div>
      <Dots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} scrollToId={scrollToId} />
    </div>
  )
}

export default Carousel