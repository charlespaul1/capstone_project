import React from 'react'
import Nav from './components/Nav'
import photo from './assets/bookphoto.jpg'
import BookingForm from './components/BookingForm'
import './Bookingpage.css'

const BookingPage = () => {
  return (
<>
      <Nav />
      <div className='food-image'>
        <img src={photo} alt='food '/>
      </div>

     <BookingForm />
</>
    
  )
}

export default BookingPage
