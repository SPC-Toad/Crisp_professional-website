import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {

    const [time, setTime] = useState(new Date());
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
      windowWidth >= 992 && (
        <div className='navbar-frame-container'>
          <Link id='section-item' to="Hero" spy={true} smooth={true} offset={-64} duration={1000}>Home</Link>
              <ul className='navbar-topic-container'>
                  <Link id='topic-item' to="MILITARY" spy={true} smooth={true} offset={-64} duration={1000}>MILITARY</Link>
                  <Link id='topic-item' to="PROJECT" spy={true} smooth={true} offset={-64} duration={1000}>PROJECT</Link>
                  <Link id='topic-item' to="CONTACT" spy={true} smooth={true} offset={-64} duration={1000}>CONTACTS</Link>
              </ul>
          <div id='clock-item'>{time.toLocaleTimeString()}</div>
        </div>
      )
    )
}

export default Navbar
