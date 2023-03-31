import React from 'react'
import './Footer.css'
import Logo from '../assets/Logo .svg'
const Footer = () => {
  return (
    <>
    <div className='footer-container'>
     <div className='right'>
     <img src={Logo} alt='logo'/>
      <p>Little Lemon is a family owned Meditterenean restaurant</p>
     </div>
      <div className='middle'>
        <h4>CONTACT US</h4>
        
          <li> Address: Chicago 64th street</li>
          <li>Tel +123456789</li>
          <li>Email: info@Littlelemon.com</li>
        
      </div>
      <div className='left'>
        <h4>Opening Times</h4>
        
          <li>Mon - Fri : 10:00 am - 21:00 pm</li>
          <li>Sat : 12:00 Noon - 18:00pm</li>
          <li>Closed on Sundays</li>
        
      </div>
    
    </div>
    <div className='copyright'>
    <p>© 2023 Little Lemon Restaurant.inc All rights reserved</p>
  </div>
  </>
    
  )
}

export default Footer
