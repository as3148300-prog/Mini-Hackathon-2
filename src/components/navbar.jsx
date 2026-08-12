import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import MusicToggle from './music'
import '../styles/nav.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nwrap">
      <div className="nmain">
        <h2>Areeb Sheikh</h2>

        <div className="desktop-nav">
          <a href="#about" className="navl">About</a>
          <a href="#projects" className="navl">Projects</a>
          <a href="#skills" className="navl">Skills</a>
          <a href="#contact" className="navl">Contact</a>
          <a href="#footer" className="navl">Footer</a>
          <MusicToggle />
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about" className="navl" onClick={closeMenu}>About</a>
        <a href="#projects" className="navl" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="navl" onClick={closeMenu}>Contact</a>
        <a href="#footer" className="navl" onClick={closeMenu}>Footer</a>
        <MusicToggle />
      </div>
    </nav>
  )
}

export default Navbar