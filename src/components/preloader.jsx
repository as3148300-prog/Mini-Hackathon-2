import React, { useEffect, useState } from 'react'
import '../styles/preloader.css'

const Preloader = ({ hide }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let current = 0

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3

      if (current >= 100) {
        current = 100
        clearInterval(interval)
      }

      setProgress(current)
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`preloader ${hide ? 'fade-out' : ''}`}>
      {/* background effects */}
      <div className="preloader-grid"></div>
      <div className="blur-orb orb-1"></div>
      <div className="blur-orb orb-2"></div>
      <div className="blur-orb orb-3"></div>

      <div className="preloader-content">
        <p className="preloader-tag">Loading Portfolio Experience</p>

        <div className="logo-stack">
          <h1 className="preloader-logo ghost">Areeb S.</h1>
          <h1 className="preloader-logo main">Areeb S.</h1>
        </div>

        <p className="preloader-sub">
          Preparing assets, interactions & polished frontend nonsense.
        </p>

        <div className="progress-wrapper">
          <div className="progress-top">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>

          <div className="loader-line-wrap">
            <div
              className="loader-line"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader