import React, { useRef, useState, useEffect } from 'react';
import './BusinessCard.css';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

function BusinessCard() {
  const cardRef = useRef();
  const glareRef = useRef();

  const degOfTilt = 15;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const isMobile = window.innerWidth <= 992;

  const handleMouseMove = (event) => {
    var rect = cardRef.current.getBoundingClientRect();
    
    // Location of the card
    var w = rect.left;
    var h = rect.top;

    var box_width = rect.right - w;
    var box_height = rect.bottom - h;

    // Location of the mouse pointer
    var mouse_X = event.clientX;
    var mouse_Y = event.clientY;
    
    var x = mouse_X - w;
    var y = mouse_Y - h;

    // find f(X) where it passes thru (x_1, theta_1) and (x_2, theta_2)
    var m_X = (degOfTilt + degOfTilt) / (-1 * box_width);
    var m_Y = -1 * (degOfTilt + degOfTilt) / (-1 * box_height);

    var rotateX = m_Y * y - degOfTilt;
    var rotateY = m_X * x + degOfTilt;

    setTilt({ x: rotateX, y: rotateY});
    glareRef.current.style = `filter : opacity(0.8)`
    glareRef.current.style.backgroundPosition = `${x/4}% ${y/4}%`;
  };

  const mouseOutHandler = () => {
    setTilt({ x: 0, y: 0});
    glareRef.current.style = `filter : opacity(0)`;
  };

  useEffect(() => {
    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseout', mouseOutHandler);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseout', mouseOutHandler);
    };
  }, []);

  return (
    <div className='BusinessCard-container' ref={cardRef} style={isMobile ? { transform: `scale3d(0.8, 0.8, 1) perspective(350px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` } : { transform: `perspective(350px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
      <div className='card-glare-effect' ref={glareRef}/>
      <div className='information-container'>
        <div id='BusinessCard-title'>
          SangyunKim2025@gmail.com
        </div>
        <a href='https://www.linkedin.com/in/sangyun-kim/' id='BusinessCard-title'>
          <FaLinkedin style={{backgroundColor: 'transparent'}}/>
          LinkedIn
        </a>
        <a href='https://github.com/SPC-Toad' id='BusinessCard-title'>
          <FaGithub style={{backgroundColor: 'transparent'}}/>
          GitHub
        </a>
        <div id='BusinessCard-title'>
          <FaDiscord style={{backgroundColor: 'transparent'}}/>  
          spctoad
        </div>
      </div>
    </div> 
  );
}

export default BusinessCard;