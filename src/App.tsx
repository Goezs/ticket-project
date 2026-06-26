// import { useLocation } from 'react-router-dom'
import './App.css'
import { ApertureTransition } from './components/ApertureTransition'
import { Footer } from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'


function App() {
  return (
    <>
      <ApertureTransition key={location.pathname} duration={900} />
      <Nav></Nav>
      <Home />
      <Footer companyName="ticketus"></Footer>
    </>
  )
}

export default App
