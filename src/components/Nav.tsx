import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import './Nav.css';


export default function Nav (){
    return(
      <Router>
        <nav className="nav" id="navbar">
          <Link to="/" className="navtitle" id="navbarTitle">TicketHub</Link>
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