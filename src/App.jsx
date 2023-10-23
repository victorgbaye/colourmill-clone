// import { useState } from 'react'

import './App.css'
import Navigation from './components/navigation/Navigation'
// import HeroImage from './assets/images/Colour_Mill_Web_Banner.png'; // Import the image file
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
       <Navigation/>
        <section className='hero'>
          {/* <img src={HeroImage} alt='HeroImage'/> */}
          <div className='hero-text'>
            <span>LOREM IPSUM</span>
            <h2>LOREM IPSUM</h2>
            <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
             Quisque sed turpis commodo urna egestas interdum.
              Pellentesque ornare ut velit at fringilla.
            </p>
          </div>
        </section>
      </header>
      <section className='subSection1Container'>
        <div className='subSection1'>
          <h2>
          <span>V</span>
          <span>I</span>
          <span>B</span>
          <span>R</span>
          <span>A</span>
          <span>N</span>
          <span>T</span>
          <span> </span>
          <span>C</span>
          <span>O</span>
          <span>L</span>
          <span>O</span>
          <span>U</span>
          <span>R</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span> </span> 
          <br></br>
          <span>F</span>
          <span>O</span>
          <span>R</span>
          <span> </span> 
          <span>B</span>
          <span>O</span>
          <span>L</span>
          <span>D</span>
          <span>E</span>
          <span>R</span>
          <span> </span> 
          <br></br>
          <span>B</span>
          <span>A</span>
          <span>K</span>
          <span>E</span>
          <span>S</span>
          </h2>
        </div>
      </section>
      <section>
        <p>hello world</p>
      </section>
    </>
  )
}

export default App
