import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Divider from './components/divider'
import Projects from './components/projects'
import Skills from './components/skills'
import GithubBoard from './components/github'
import CustomCursor from './components/cursor'
 
import Contact from './components/contact'
import Footer from './components/footer'
import Preloader from './components/preloader'
import ContextMenu from './components/contextmenu'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [hidePreloader, setHidePreloader] = useState(false)

  const mstyle = {
    transform: 'rotate(5deg) translateY(50%)',
  }

  const mstyle2 = {
    background: 'white',
  }

  const backtotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const button = document.querySelector('.button')
    if (!button) return

    if (window.scrollY > 200) {
      button.classList.add('show')
    } else {
      button.classList.remove('show')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // PRELOADER LOGIC
  useEffect(() => {
    const MIN_LOAD_TIME = 2200 // minimum smooth loading time
    const startTime = Date.now()

    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(MIN_LOAD_TIME - elapsed, 0)

      setTimeout(() => {
        setHidePreloader(true)

        setTimeout(() => {
          setLoading(false)
        }, 800) // match fade-out animation
      }, remaining)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <>
      {loading && <Preloader hide={hidePreloader} />}

      {!loading && (
        <>
          <CustomCursor />

          <button className="button" onClick={backtotop}>
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>

          <Navbar />
          <Hero />
          <Divider />
          <About />

          <div className="marquee-wrap" style={mstyle}>
            <div className="marquee-track">
              <span>Creative ✦ Repository ✦ Projects ✦ Github ✦ Live Link ✦ Projects ✦</span>
              <span>Creative ✦ Repository ✦ Projects ✦ Github ✦ Live Link ✦ Projects ✦</span>
            </div>
          </div>

          <Projects />
          <GithubBoard />

          <div className="marquee-wrap">
            <div className="marquee-track">
              <span>✦ <i className='fab fa-html5'></i>HTML ✦ <i className='fab fa-css3-alt'></i>CSS ✦ <i className='fab fa-js'></i>JS ✦ <i className='fab fa-react'></i>REACTJS ✦ <i className='fab fa-python'></i>PYTHON ✦ <i className='fab fa-google'></i>FIREBASE ✦ <i className='fas fa-database'></i>MYSQL</span>
              <span>✦ <i className='fab fa-html5'></i>HTML ✦ <i className='fab fa-css3-alt'></i>CSS ✦ <i className='fab fa-js'></i>JS ✦ <i className='fab fa-react'></i>REACTJS ✦ <i className='fab fa-python'></i>PYTHON ✦ <i className='fab fa-google'></i>FIREBASE ✦ <i className='fas fa-database'></i>MYSQL</span>
            </div>
          </div>

          <Skills />

          <div className="marquee-wrap">
            <div className="marquee-track">
              <span>Guest Area ✦ Write Something ✦ Guest Area ✦</span>
              <span>Guest Area ✦ Write Something ✦ Guest Area ✦</span>
            </div>
          </div>

       
          <Contact />

          <div className="marquee-wrap" style={mstyle2}>
            <div className="marquee-track">
              <span>Thank You For Visiting ✦ Have A Great Day ✦ Thank You For Visiting ✦</span>
              <span>Thank You For Visiting ✦ Have A Great Day ✦ Thank You For Visiting ✦</span>
            </div>
          </div>

          <Footer />
          <ContextMenu />
        </>
      )}
    </>
  )
}

export default App