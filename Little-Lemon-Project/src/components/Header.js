import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom'
import chef from '../assets/restauranfood.jpg'

const Header = () => {
  return (
    <header>
      <div className='leftSide'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
        <button>
          <Link to='/booking-page'>Reserve a Table</Link>
        </button>
      </div>
      <div className='rightSide'>
        <img src={chef} alt='our chef displaying his art' style={{borderRadius: '16px'}} />

      </div>
    </header>
  )
}

export default Header
