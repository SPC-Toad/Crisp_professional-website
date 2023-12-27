import React from 'react'
import './Card.css'

function Card({image, language, title, description}) {
  return (
    <div className='card-container'>
      <img src={image} alt='card-img' id='card-img'/>
      <div id='card-language'>{language}</div>
      <div id='card-project-title'>{title}</div>
      <p id='card-project-description'>{description}</p>
    </div>
  )
}

export default Card