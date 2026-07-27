import './App.css'
// Components 
import { ApertureTransition } from './components/ApertureTransition'
import { Footer } from './components/Footer'
import Nav from './components/Nav'

// Router and pages
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Login from './pages/Login';
import EventDetails from './pages/EventDetails'

function App() {
  return (
    <>
      <ApertureTransition key={location.pathname} duration={900} />
      <Router>
        <div className="flex flex-col min-h-screen ">
          <div className="flex-grow p-6">
            <Nav/>
            <Routes>
              <Route path = "/" element={<Home />} />
              <Route path = "/about" element={<About />} />
              <Route path = "/events" element={<Events/>} />
              <Route path = "/log" element={<Login />} />
              <Route path = "/events/:id" element={<EventDetails />} />
            </Routes>
          </div>
          <Footer companyName="ticketus" />
        </div>

      </Router>
 

    </>
  )
}

export default App
