// import { useLocation } from 'react-router-dom'
import './App.css'
import { ApertureTransition } from './components/ApertureTransition'
import { Footer } from './components/Footer'
import Nav from './components/Nav'


function App() {
  return (
    <>
      <ApertureTransition key={location.pathname} duration={900} />
      <div className="flex flex-col min-h-screen ">
        <div className="flex-grow p-6">
          <Nav/>
        </div>
        <Footer companyName="ticketus" />
      </div>
    </>
  )
}

export default App
