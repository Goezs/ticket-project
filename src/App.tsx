// import { useLocation } from 'react-router-dom'
import './App.css'
import { ApertureTransition } from './components/ApertureTransition'
import viteLogo  from '../public/favicon.svg'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


function App() {
  // const location = useLocation();
  const [count, setCount] = useState(0)

  return (
    <>
      <ApertureTransition key={location.pathname} duration={900} />
      <section id="center">
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

    </>
  )
}

export default App
