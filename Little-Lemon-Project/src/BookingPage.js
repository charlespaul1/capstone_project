import React from 'react'
import Nav from './components/Nav'
import photo from './assets/bookphoto.jpg'
import BookingForm from './components/BookingForm'
import './Bookingpage.css'
// import ReservationForm from './components/lift'

const BookingPage = () => {
  return (
<>
      <Nav />
      <div className='food-image'>
        <img src={photo} alt='food '/>
      </div>

     <BookingForm />
     {/* <ReservationForm /> */}
</>
    
  )
}

export default BookingPage
