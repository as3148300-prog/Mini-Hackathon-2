import React from 'react'
import '../styles/projects.css'
import Dihh from '../imgs/dihh.png'
import Legendro from '../imgs/legendro.png'
import Jnv from '../imgs/jnv.png'
import Anopoll from '../imgs/anopoll.png'
import Projectsec from '../imgs/projectsec.png'
import UI from '../imgs/UI.png'

import { ExternalLink, GitFork, Sparkles } from 'lucide-react'

const projectData = [
    {
        title: "Sky Mart",
        desc: " Responsive e-commerce website built with HTML, CSS, JavaScript, and React.",
        image: Dihh,
        tech: ["HTML", "CSS","JS" , "React"],
        live: "https://sky-mart-project.vercel.app/",
        github: "https://github.com/as3148300-prog/SKY-MART-PROJECT"
    },
    {
        title: "FinTrack Pro",
        desc: "A smooth aesthetic personal portfolio with responsive UI.",
        image: Legendro,
        tech: ["HTML", "CSS" , "JS"],
        live: "https://as3148300-prog.github.io/FINTRACK-PRO/",
        github: "https://github.com/as3148300-prog/FINTRACK-PRO",
        underDevelopment: true
    },
    {
        title: "Responsive UI",
        desc: "Responsive UI Build with HTML and CSS.",
        image: UI,
        tech: ["HTML", "CSS" , "Responsive"],
        live: "https://as3148300-prog.github.io/Assignment-7/",
        github: "https://github.com/as3148300-prog/Assignment-7",
        underDevelopment: true
    },
    {
        title: "Task Manager",
        desc: "A Task Manager Build with html css js.",
        image: Anopoll,
        tech: ["HTML" , "CSS" , "JS" , ],
        live: "https://as3148300-prog.github.io/Assignment-Interactive-Task-Manager/",
        github: "https://github.com/as3148300-prog/Assignment-Interactive-Task-Manager",
        underDevelopment: true
    },
    {
        title: "Task-Verse",
        desc: "A Productivity Dashboard Build with HTML CSS JS .",
        image: Jnv,
        tech: ["HTML", "CSS",'JS'],
        live: "https://as3148300-prog.github.io/Productivity-Dashboard/",
        github: "https://github.com/as3148300-prog/Productivity-Dashboard",
        underDevelopment: true
    },
]

const handleProjectClick = (project) => {
    if (project.live === "#" && project.github === "#") {
        alert("This project is under development!")
    }
}

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-head">
          <span className="project-badge">My Work</span>
          <h2><Sparkles size={24} /> Projects</h2>
          <p>Some cool things I built while surviving bugs and bad decisions.</p>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-top">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tech-stack">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <GitFork size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <img src={Projectsec} id='prosec' />
        </div>
      </div>
      <div className="more-projects">
  <a href="https://github.com/as3148300-prog?tab=repositories" target="_blank" rel="noreferrer">
    More on GitHub →
  </a>
</div>
    </section>
  )
}

export default Projects