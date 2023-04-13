import React from 'react';
import Nav from './components/Nav' ;
import { useLocation } from 'react-router-dom';
const ConfirmedBooking = () => {
  const location = useLocation(); 
  const { name, phone, date, time, guests, occasion } = location.state;

  return (
    <>
    <Nav />
    <h2>Booking Confirmed !!</h2>
  <p>Thank you for making a Reservation with us. We can't wait to serve You </p>
  <p>Booking Details</p>
  <ul>
    <li>Name: {name}</li>
    <li>Phone number: {phone}</li>
    <li>Date: {new Date(date).toLocaleDateString()}</li>
    <li>Time: {time}</li>
    <li>Number of Guests: {guests}</li>
    <li>Occasion: {occasion}</li>
  </ul>
      
    </>
  )
}

export default ConfirmedBooking
