import { useState } from 'react'

export default function About() {
  // const location = useLocation();
  const [count, setCount] = useState(0)


  return (
    <div id="app_container" className="app-container">
        <section id="up_center" className="section_all">
            <button
                type="button"
                className=""
                onClick={() => setCount((count) => count + 1)}
            >
                Count is {count}
            </button>
        </section>
    </div>
  );
}