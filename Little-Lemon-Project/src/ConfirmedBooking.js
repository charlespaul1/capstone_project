import React from 'react';
import 'animate.css';
import './ConfirmedBooking.css';
import Nav from './components/Nav' ;
import { useLocation } from 'react-router-dom';
const ConfirmedBooking = () => {
  const location = useLocation(); 
  const { name, phone, date, time, guests, occasion } = location.state;

  return (
    <>
    <Nav />
    <div className='animate__animated animate__heartBeat'>
    <h2
      style={{
        textAlign: 'center',
        color: '#F4CE14',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >Booking Confirmed !!</h2>
  <p
    style={{
      textAlign: 'center',
      color: '#333',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px 0',

    }}
  >Thank you for making a Reservation with us. We can't wait to serve You </p>
  <p
    style={{
      textAlign: 'center',
      color: '#333',
      fontSize: '20px',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      alignItems: 'center',
    }}
  >Booking Details</p>
  <div className='details'
    style={{
      textAlign: 'center',
      color: '#333',
      backgroundColor: '#F4CE14',
      padding: '10px',
      borderRadius: '10px',
      margin: '10px',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '100px',
      display: 'flex',
      '@media (max-width: 768px)': {
        marginLeft: '10px',
      }
      
    
    }}
  >
  <ul
    style={{
      textAlign: 'center',
      color: '#333',
      
    }}
  >
    <li
      style={{
        listStyle: 'none',
      }}
    >Name: {name}</li>
    <li
      style={{
        listStyle: 'none',
      }}
    >Phone number: {phone}</li>
    <li
      style={{
        listStyle: 'none',
      }}
    >Date: {new Date(date).toLocaleDateString()}</li>
    <li
      style={{
        listStyle: 'none',
      }}
    >Time: {time}</li>
    <li
      style={{
        listStyle: 'none',
      }}
    >Number of Guests: {guests}</li>
    <li
      style={{
        listStyle: 'none',
      }}
    >Occasion: {occasion}</li>
  </ul>
  </div>
      </div>
    </>
  )
}

export default ConfirmedBooking
