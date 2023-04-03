import { useState } from "react";
import React from 'react'
import './BookingForm.css'

const BookingForm = () => {
    // the form fields
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numOfGuests, setNumOfGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [availableTables, setAvailableTables] = useState([
        'Table 1',
        'Table 2',
        'Table 3',
        'Table 4',
        'Table 5',
        'Table 6',
        'Table 7',
        'Table 8',
        'Table 9',
        'Table 10',
    ]);
    const[availableTimes, setAvailableTimes] = useState([
        '12:00',
        '13:00',
        '14:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00'
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation Submitted',name, phone, date, time, numOfGuests, occasion);
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
        type="name"
        id="name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />

         <label htmlFor="phone">Phone Number</label>
        <input 
        type="phone"
        id="phone"
        value={phone}
        onChange={(e)=> setPhone(e.target.value)}
        />

         <label htmlFor="date">Date</label>
        <input 
        type="date"
        id="date"
        value={date}
        onChange={(e)=> setDate(e.target.value)}
        />

         <label htmlFor="time">Time:</label>
        <select id="time"
        value={time}
        onChange={(e)=> setTime(e.target.value)}>
        {availableTimes.map((timeOption)=>(
            <option key={timeOption} value={timeOption}>
                {timeOption}</option>
        ))}

        </select>

         <label htmlFor="numOfGuests">Number Of Guests</label>
        <input 
        type="numOfGuests"
        id="numOfGuests"
        value={numOfGuests}
        onChange={(e)=> setNumOfGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
        id="occasion"
        value={occasion}
        onChange={(e)=> setOccasion(e.target.value)}
        >
        <option value="">Select your Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Corporate Event">Corporate Event</option>
        <option value="other">Other</option>
        </select>
         <label htmlFor="availableTables">Available Tables</label>
        <input 
        type="availableTables"
        id="availableTables"
        value={availableTables}
        onChange={(e)=> setAvailableTables(e.target.value)}
        />

        <label htmlFor="availableTimes">Available Times</label>
        <input 
        type="availableTimes"
        id="availableTimes"
        value={availableTimes}
        onChange={(e)=> setAvailableTimes(e.target.value)}
        />
        <button type="submit" 
        // onClick={handleSubmit}
        >Submit Reservation</button>

    </form>
  )
}}

export default BookingForm

