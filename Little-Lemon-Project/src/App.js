import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Main from './components/Main';
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Reservation from './Reservation'
import OrderOnline from './Order-online'
import Login from './Login'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/reservation' element={<Reservation/>}/>
      <Route path='/order-online' element={<OrderOnline/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>


  );
}

export default App;
