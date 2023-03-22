import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo .svg'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt='logo'/>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservation'>Reservation</Link></li>
          <li><Link to='/order-online'>Order-Online</Link></li>
          <li><Link to='/login'>Login</Link></li>

        </ul>
      </nav>
    </header>
  )
}

export default Header
