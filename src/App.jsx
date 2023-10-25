// import { useState } from 'react'

import './App.css'
import { feedData } from './components/IGFeed/FeedData'
import DiscoverCollections from './components/discoverCollections/DiscoverCollections'
import Navigation from './components/navigation/Navigation'
import Tab from './components/tabs/Tab'

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
      <section className='subSection2'>
        <Tab/>
      </section>
      <section className='subSection3'>
      <p className="subSection3headerText">DISCOVER OUR COLLECTIONS</p>
        <DiscoverCollections/>
      </section>
      {/* <section className='subSection4'>
      <p>Subsection4</p>
      </section> */}
      <section className='subSection5'>
        <header className='subSection5Header'>
          <h2>Fill your feeds with colour</h2>
        <div className='subSection5HeaderSocials'>
          <span>
            <p>Instagram</p>
          </span>
          <span>
            <p>Youtube</p>
          </span>
        </div>
        </header>
        <main className='subSection5HeaderSocialsImage'>
          {feedData.map((item)=>{
            return(
              <div key={item.id} className='subSection5HeaderSocialsImageItem'>
                <img src={item.img}/>
              </div>
            )
          })}
        </main>
      </section>
      <section className='subSection7'>
       <div className='subSection7SignupSec'>
        <h2>Sign up to stay inspired</h2>
        <div className='subSection7SignupSecInput'>
          <input
          placeholder='Email'
          />
        </div>
        <p>We promise not to spam you</p>
       </div>
       <div className='subSection7ULContainer'>
        <ul className='subSection7UL'>
          <li>SHOP</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
        </ul>
        <ul className='subSection7UL'>
        <li>SHOP</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
        </ul>
        <ul className='subSection7UL'>
          <li>SHOP</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
          <li>Oil Blends</li>
        </ul>
       </div>
      </section>
      <div className="color-text">
        <span>colour mill</span>
        {/* <span>c</span>
        <span>o</span>
        <span>l</span>
        <span>o</span>
        <span>u</span>
        <span>r</span>
        <span> </span>
        <span>m</span>
        <span>i</span>
        <span>l</span>
        <span>l</span> */}
</div>
    </>
  )
}

export default App
