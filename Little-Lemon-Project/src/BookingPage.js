import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import photo from './assets/bookphoto.jpg'
import BookingForm from './components/BookingForm'
import './Bookingpage.css'
import { submitAPI } from './components/BookingAPI'

const BookingPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validateForm = (values) => {    
    const {name, phone, date, time, guests, occasion} = values;;
    const isNameValid = name.length > 0 || name.trim() !=="";
    const isPhoneValid = /^\d{10}$/.test(phone);
    const isDateValid = date instanceof Date && !isNaN(date);
    const isTimeValid = time.length > 0 || time.trim() !=="";
    const isGuestsValid = guests > 0 && guests <= 10;
    const isOccasionValid = occasion.length > 0 || occasion.trim() !=="";
    return isNameValid && isPhoneValid && isDateValid && isTimeValid && isGuestsValid && isOccasionValid;
  };

  const submitForm = (values) => {
    const isValid = validateForm(values);
    if(isValid) {
      const isSubmitted = submitAPI(values);
      if(isSubmitted) {
        navigate('/confirmed-booking', {state: {...values, date: values.date.toISOString().slice(0, 10)}});
      } else {
        setError("Something went wrong, Form could not be submitted. Please try again later.");
      }
    } else {
      setError("Please fill all the fields correctly.");
    }
  };




  return (
<>
      <Nav />
      <div className='food-image'>
        <img src={photo} alt='food '/>
      </div>

     <BookingForm submitForm={submitForm}/>
     {error&& <p>{error}</p>}
   </>
    
  )
}

export default BookingPage
