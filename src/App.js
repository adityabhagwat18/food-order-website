
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import About from './Components/About';
import Home from './Components/Home';
import Booking from './Components/Booking'
import Signin from './Components/Signin'
import Signout from './Components/Signout'
import Signup from './Components/Signup'
import Cart from './Components/Cart'
import Footer from './Components/Footer';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signout' element={<Signout/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Search' element={<Search/>}/>
        


      </Routes>
      <Footer/>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
