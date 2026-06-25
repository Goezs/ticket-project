import viteLogo  from '../../public/favicon.svg'
import reactLogo from '../assets/react.svg'

export default function Home() {
  return (
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
        </section>
    </div>
  );
}