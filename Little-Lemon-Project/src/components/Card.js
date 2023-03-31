import React from 'react'
import './Card.css'
import { MdDeliveryDining }from 'react-icons/md';
const Card = ({image, title, price, description}) => {
  return (
    <div className='card'>
        <img width='300px' src={image} alt='Greek salad' />
        <div className='dish-info'>
            <div className='title'>
                <h3>{title}</h3>
                <p className='price'>${price}</p>
            </div>
            <p>{description}</p>
            <span 
            role='button'
            aria-label='On Click'
            className='specialOrderButton'
            >
            Order a delivery
            <MdDeliveryDining
            size={30}
            style={{
              color: "#333",
              marginLeft: "15px",
              marginBottom: "-10px",
            }}
          />
            </span>
        </div>
    </div>
  )
}

export default Card
