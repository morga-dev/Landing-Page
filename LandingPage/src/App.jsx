import React, { useEffect } from 'react'
import Nabvar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import About from './components/About'
import Services from './components/Services'
import Software from './components/Software'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    window.lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      window.lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Conectar GSAP ScrollTrigger con Lenis
    window.lenis.on('scroll', ScrollTrigger.update)

    return () => {
      window.lenis.destroy()
    }
  }, [])

  return (
    <div className='min-h-screen bg-dark-primary'>
      <Nabvar />
      <div id='hero' className='bg-dark-primary section'>
        <Hero/>
      </div>
      <div id='about-us' className='bg-dark-primary section'>
        <AboutUs />
      </div>
      <div id='about' className='bg-dark-primary section'>
        <About />
      </div>
      <div id='services' className='bg-dark-primary section'>
        <Services />
      </div>
      <div id='software' className='bg-dark-primary section'>
        <Software />
      </div>
      <div id='pricing' className='bg-dark-primary section'>
        <Pricing />
      </div>
      <div id='contact' className='bg-dark-primary section'>
        <Contact />
      </div>
      <Footer/>
    </div>
  )
}

export default App
