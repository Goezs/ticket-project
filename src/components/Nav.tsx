import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import logoImg from '../../public/ticket_logo.png'

import './Nav.css';


export default function Nav (){
    return(
      <Router>
        <nav className="nav" id="navbar">
          <Link to="/" className="img-wrapper" id="navbarTitle"><img src= { logoImg } alt="TicketIn"></img></Link>
          <ul className="navGeneralList">
            <Link className="navItem" to="/about" >About us</Link>
            <Link className="navItem" to="/events" >Events</Link>
            <Link className="navItem" to="/sell" >Sell tickets</Link>
            <Link className="navItem" to="/publications" >Publications</Link>
            <Link className="navItem" to="/support" >Support</Link>
            <Link className="navItem" to="/log" >Log in</Link>
          </ul>
        </nav>

        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About />} />
        </Routes>
      </Router>
    );
}