import React from 'react'
import './Nav.css'
import Logo from '../assets/Logo .svg'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='container'>
    <Link to='/'>
      <img src={Logo} alt='Logo'/>
    </Link>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/booking-page'>BookingPage</Link></li>
        <li><Link to='/order-online'>OrderOnline</Link></li>
        <li><Link to='/login'>Login</Link></li>
        
      </ul>
    </nav>
      
    </div>
  )
}

export default Nav
