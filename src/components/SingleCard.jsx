import React from 'react'
import './SingleCard.css'

function SingleCard({card, handleChoice, flipped, disabled}) {

  function handleClick() {
    if (!disabled) {
      handleChoice(card)

    }

  }

  return (
    <div className='card'>
    <div className={flipped ? "flipped" : ""} >
      <img 
      className="front" 
      src={card.src} 
      alt='card__front'
      />
      <img 
      className="back" 
      onClick={handleClick} 
      src='/img/cover3.png' 
      alt='card__back'
      />
    </div>
  </div>  )
}

export default SingleCard;