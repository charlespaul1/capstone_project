import './App.css';
import Home from './Home'
// import About from './About'
import Menu from './Menu'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/booking-page' element={<BookingPage/>}/>
      <Route path='/confirmed-booking' element={<ConfirmedBooking/>}/>
    </Routes>


  );
}

export default App;
