import React from 'react'
import '../styles/hero.css'
import Avatar from '../imgs/avatar.png'

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="grid-glow"></div>

      <div className="hero-container">
        <div className="content hero-content">
          <span className="badge">Hey, welcome to my portfolio 😄</span>
          <h1>Areeb Sheikh</h1>
          <h3 className="sub-heading">Frontend Developer & UI Lover</h3>
          <p id="parah">
            Hi, I’m Areeb Sheikh, a teen web developer who loves turning ideas
            into aesthetic and interactive websites. I enjoy building smooth
            digital experiences and bringing creative concepts to life through code.
          </p>

          <div className="hero-btns">
            <a href="#contact" className="uiverse">
              <div className="wrapper">
                <span>Contact!</span>
                <div className="circle circle-12"></div>
                <div className="circle circle-11"></div>
                <div className="circle circle-10"></div>
                <div className="circle circle-9"></div>
                <div className="circle circle-8"></div>
                <div className="circle circle-7"></div>
                <div className="circle circle-6"></div>
                <div className="circle circle-5"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-1"></div>
              </div>
            </a>

            <a href="#projects" className="cta">
              <span>View Projects</span>
              <svg width="18px" height="12px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="av-wrapper hero-image-wrapper">
          <div className="avatar-blob">
            <img src={Avatar} alt="avatar" className="avatar-img avatar" />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero