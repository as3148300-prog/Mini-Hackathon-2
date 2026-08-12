import React, { useEffect, useRef, useState } from 'react'
import '../styles/contextmenu.css'
import {
  ArrowUp,
  RotateCcw,
  Copy,
  GitFork,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

const ContextMenu = () => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const menuRef = useRef(null)

  const handleContextMenu = (e) => {
    if (window.innerWidth <= 768) return
    e.preventDefault()

    const menuWidth = 250
    const menuHeight = 390

    let x = e.clientX
    let y = e.clientY

    if (x + menuWidth > window.innerWidth) {
      x = window.innerWidth - menuWidth - 14
    }

    if (y + menuHeight > window.innerHeight) {
      y = window.innerHeight - menuHeight - 14
    }

    setPosition({ x, y })
    setVisible(true)
  }

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setVisible(false)
    }
  }

  const handleEscape = (e) => {
    if (e.key === 'Escape') setVisible(false)
  }

  useEffect(() => {
    const closeOnScroll = () => setVisible(false)

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('scroll', closeOnScroll)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('scroll', closeOnScroll)
    }
  }, [])

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setVisible(false)
      setTimeout(() => {
        alert('Website link copied ✦')
      }, 100)
    } catch (err) {
      console.error(err)
    }
  }

  const menuItems = [
    {
      icon: <ArrowUp size={18} />,
      label: 'Go to Top',
      desc: 'Back to the hero section',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setVisible(false)
      },
    },
    {
      icon: <RotateCcw size={18} />,
      label: 'Reload Page',
      action: () => {
        window.location.reload()
      },
    },
    {
      icon: <Copy size={18} />,
      label: 'Copy Website Link',
      action: copyLink,
    },
    {
      icon: <GitFork size={18} />,
      label: 'Open GitHub',
      action: () => {
        window.open('https://github.com/as3148300-prog?tab=repositories', '_blank')
        setVisible(false)
      },
    },
    {
      icon: <ExternalLink size={18} />,
      label: 'Open Instagram',
      action: () => {
        window.open('https://www.instagram.com/igsasukeexx/', '_blank')
        setVisible(false)
      },
    },
    {
      icon: <Sparkles size={18} />,
      label: 'Say Hi',
      desc: 'Tiny emotional support button',
      action: () => {
        alert('Hii dawg 😼✨ thanks for visiting')
        setVisible(false)
      },
    },
  ]

  return (
    <>
      {visible && (
        <div className="context-overlay" onClick={() => setVisible(false)} />
      )}

      <div
        ref={menuRef}
        className={`context-menu ${visible ? 'show' : ''}`}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      >
        <div className="context-top">
          <span className="context-tag">Quick Menu</span>
          <div className="context-sub">
            Tiny useful things, wrapped in unnecessary elegance.
          </div>
        </div>

        <div className="context-list">
          {menuItems.map((item, index) => (
            <button key={index} className="context-item" onClick={item.action}>
              <div className="context-left">
                <div className="context-icon-wrap">{item.icon}</div>
                <div className="context-text">
                  <span className="context-label">{item.label}</span>
                  <span className="context-desc">{item.desc}</span>
                </div>
              </div>

              <span className="context-arrow">↗</span>
            </button>
          ))}
        </div>

        <div className="context-footer">
          made with caffeine, confusion & soft pink pixels
        </div>
      </div>
    </>
  )
}

export default ContextMenu