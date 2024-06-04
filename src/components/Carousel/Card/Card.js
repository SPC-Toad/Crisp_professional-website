import React from 'react'
import './Card.css'

function Card({web_address, image, language, title, description}) {
  console.log(web_address)
  return (
    <a href={web_address} className='card-container'>
      <img src={image} alt='card-img' id='card-img'/>
      <div id='card-language'>{language}</div>
      <div id='card-project-title'>{title}</div>
      <p id='card-project-description'>{description}</p>
    </a>
  )
}

export default Card