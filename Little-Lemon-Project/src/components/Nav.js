import React from 'react'
import Logo from '../assets/Logo .svg'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <Link to='/'>
      <img src={Logo} alt='Logo'/>
    </Link>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/reservation'>Reservation</Link></li>
        <li><Link to='/order-online'>Order-Online</Link></li>
        <li><Link to='/logo'>Logo</Link></li>
      </ul>
    </nav>
      
    </>
  )
}

export default Nav
