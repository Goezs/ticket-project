import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Login from '../pages/Login';
import logoImg from '../../public/ticket_logo.png'

import './Nav.css';


export default function Nav (){
    return(
      <Router>
        <nav className="border-b border-yellow-400 sticky top-0 z-50 nav-bg" id="navbar">
          <div className="max-w-7x1 mx-auto px-4 sm:px-12 lg:px-8">
            <div className="flex items-center justify-between h-22">
              <Link
                className="flex-shrink-0 flex items-center gap-2 img-wrapper"
                id="navbarTitle"
                to="/">
                <img 
                  className="h-14 w-auto object-contain cursor-point"
                  src= { logoImg }
                  alt="TicketIn"
                />
              </Link>
              <div className="hidden md:flex">
                <Link
                  className="hover:text-blue-400 transition-colors duration-200 text-3x1 font-medium"
                  to="/about">
                  About us
                </Link>
              </div>
              <div className="hidden md:block">
                <Link
                  className="hover:text-blue-400 transition-colors duration-200 text-3x1 font-medium"
                  to="/events">
                  Events
                </Link>
              </div>
              <div className="hidden md:flex items-center">
                <Link
                  className="bg-green-600 hover:bg-blue-700 text-3x1 px-6 py-4 rounded-lg font-medium transition-colors"
                  to="/log">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/events" element={<Events/>} />
          <Route path = "/log" element={<Login />} />
        </Routes>
      </Router>
    );
}