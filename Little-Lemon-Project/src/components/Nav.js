import React, {useState} from 'react'
import './Nav.css'
import Logo from '../assets/Logo .svg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  };
  return (
   
    <div className='container'>
    <Link to='/'>
      <img src={Logo} alt='Logo'/>
    </Link>
    <nav >
      <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
        <li><Link to='/menu' onClick={toggleMenu}>Menu</Link></li>
        <li><Link to='/booking-page' onClick={toggleMenu}>BookingPage</Link></li>
        </ul>
      </nav>
      <div className='hamburger' onClick={toggleMenu}>
     {menuOpen ? (<FaTimes size={20} style= {{color: '#F4CE14'}} z-index={1} />) :
        (<FaBars size={20} style= {{color: '#333'}} />)}
      </div>
    </div>
  )
}

export default Nav