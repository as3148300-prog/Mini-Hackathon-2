import React from 'react'
import '../styles/githubboard.css'
import Gitsec from '../imgs/githubsec.png'
import {
  Sparkles,
  GitFork,
  ExternalLink,
  FolderGit2,
  GitCommitHorizontal,
  Laptop2,
  Code2
} from 'lucide-react'

const GithubBoard = () => {
  return (
    <section className="github-section" id="github">
      {/* Floating background blobs */}
      <div className="github-blob gb1"></div>
      <div className="github-blob gb2"></div>
      <div className="github-blob gb3"></div>

      <div className="github-wrap">

        {/* Heading */}
        <div className="github-head">
          <span className="github-tag">Code Cave</span>
          <h2><Sparkles size={24} /> GitHub Universe</h2>
          <p>
            A little corner of the internet where I push code, break things,
            fix them, and pretend I definitely knew what I was doing.
          </p>
        </div>

        {/* Top bulky profile area */}
        <div className="github-top-grid">

          {/* Left profile card */}
          <div className="github-profile-card">
            <div className="gh-profile-top">
              <div className="gh-icon-wrap">
                <GitFork size={28} />
              </div>
              <div>
                <h3>Areeb Sheikh</h3>
                <p>@as3148300-prog</p>
              </div>
            </div>

            <p className="gh-bio">
              Frontend dev in progress, UI lover, React enjoyer, and full-time
              survivor of JavaScript mood swings.
            </p>

            <div className="gh-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
        
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/as3148300-prog?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="gh-main-btn"
            >
              Visit GitHub <ExternalLink size={16} />
            </a>
          </div>

          {/* Right stats cards */}
          <div className="github-stats-wrap">
            <div className="gh-stat-card">
              <FolderGit2 size={22} />
              <h4>Projects</h4>
              <p>My random ideas turned into actual code.</p>
            </div>

            <div className="gh-stat-card">
              <GitCommitHorizontal size={22} />
              <h4>Commits</h4>
              <p>Tiny squares proving I do, in fact, touch code.</p>
            </div>

            <div className="gh-stat-card">
              <Laptop2 size={22} />
              <h4>Consistency</h4>
              <p>Trying to show up daily like a responsible dev.</p>
            </div>

            <div className="gh-stat-card">
              <Code2 size={22} />
              <h4>Learning</h4>
              <p>Always building, improving, and debugging my existence.</p>
            </div>
          </div>
        </div>

        {/* Main bulky contribution card */}
        <div className="github-main-card">
          <div className="github-main-top">
            <div>
              <h3>Contribution Garden</h3>
              <p>My coding activity board straight from GitHub.</p>
            </div>
            <span className="live-badge">● Live</span>
          </div>

          <div className="calendar-wrap">
            <img src={Gitsec} id='avg' />
            <img
              src="https://ghchart.rshah.org/f4a7b5/as3148300-prog"
              alt="GitHub contribution chart"
              className="github-chart"
            />
          </div>

          <div className="gh-bottom-row">
            <div className="gh-note-card">
              <h4>Currently Building</h4>
              <p>
                Improving my portfolio, making cooler UI sections, and trying to
                turn random ideas into stuff that actually works.
              </p>
            </div>

            <div className="gh-note-card">
              <h4>Coding Mood</h4>
              <p>
                Usually calm until one missing semicolon or broken div destroys
                my emotional stability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GithubBoard