// import { useLocation } from 'react-router-dom'
import './App.css'
import { ApertureTransition } from './components/ApertureTransition'
import viteLogo  from '../public/favicon.svg'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import { Footer } from './components/Footer'
import Nav from './components/Nav'


function App() {
  // const location = useLocation();
  const [count, setCount] = useState(0)

  return (
    <>
      <ApertureTransition key={location.pathname} duration={900} />
      <Nav></Nav>
      <div id="app_container" className="app-container">
        <section id="up_center" className="section_all">
            <div className="">
            <img src={reactLogo} className="" alt="React logo" />
            <img src={viteLogo} className="" alt="Vite logo" />
          </div>
          <div>
            <h1>Get started</h1>
            <p>
              Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
            </p>
          </div>
          <button
            type="button"
            className=""
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>
      </div>
      <Footer companyName="ticketus"></Footer>
    </>
  )
}

export default App
