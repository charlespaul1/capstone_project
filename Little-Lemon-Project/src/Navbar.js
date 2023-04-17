import React, { useState } from 'react';
import './Navbar.css';
import Logo from './assets/Logo .svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/booking-page'>BookingPage</Link></li>
          <li><Link to='/order-online'>OrderOnline</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <div className='hamburger' onClick={handleMenuClick}>
        <div className={isOpen ? 'line line1 open' : 'line line1'}></div>
        <div className={isOpen ? 'line line2 open' : 'line line2'}></div>
        <div className={isOpen ? 'line line3 open' : 'line line3'}></div>
      </div>
    </div>
  );
};

export default Navbar;
