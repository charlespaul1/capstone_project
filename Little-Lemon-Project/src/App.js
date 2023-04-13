import './App.css';
import Home from './Home'
// import About from './About'
import Menu from './Menu'
import BookingPage from './BookingPage'
import OrderOnline from './Order-online'
import Login from './Login'
import ConfirmedBooking from './ConfirmedBooking';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/about' element={<About/>}/> */}
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/booking-page' element={<BookingPage/>}/>
      <Route path='/order-online' element={<OrderOnline/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/confirmed-booking' element={<ConfirmedBooking/>}/>
    </Routes>


  );
}

export default App;
