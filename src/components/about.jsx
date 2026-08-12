import React from 'react'
import Pic from '../imgs/pic.png'
import Av from '../imgs/av2.png'
import { Sparkle, Code, Music, Heart, MapPin, GraduationCap, Laptop, Palette  , Gamepad2 ,  Dumbbell } from 'lucide-react'
import '../styles/about.css'

const About = () => {
  return (
    <div className="amain" id="about">
      <div className="acontent">
        <div className="left">
            <div className="pic">
          <img src={Pic} alt="Yash" />
          <div className="nameplate">
            <h3>Areeb Sheikh</h3>
            <p className="role">Student Developer</p>
            <p className="location"><MapPin size={16} /> New Delhi</p>
          </div>
        </div>
        <div className="pic f">
          <img  src={Av} alt="Yash" />
          <div className="nameplate">
            <h3>Side Character</h3>
            <p className="role">Noob too!</p>
            <p className="location"><MapPin size={16} /> Social media</p>
          </div>
        </div>
        </div>
        

        <div className="acont">
          <h1>About Me</h1>
          <p className="about-text">
            Just a student who likes building cool websites and clean UI stuff.
            I mostly work with HTML, CSS, JavaScript, and React to turn random
            ideas into real projects. Still learning, still building, and trying
            to make everything look aesthetic and smooth.
          </p>

          <div className="quickfacts">
            <div className="fact">
              <Laptop size={18} />
              <span>Frontend Dev</span>
            </div>
            <div className="fact">
              <Palette size={18} />
              <span>UI Lover</span>
            </div>
            <div className="fact">
              <GraduationCap size={18} />
              <span>Class 12</span>
            </div>
          </div>

          <div className="edu">
            <h2><Sparkle size={24} /> Education</h2>
            <div className="divider"></div>

            <div className="educont">
              <h3 id='jnv'>hemnani public school</h3>
              <p>
                Completed Class 12 while building skills in frontend development,
                UI design, and modern web technologies.
              </p>
            </div>
          </div>

          <div className="hobbies">
            <h2><Sparkle size={24} /> Hobbies</h2>
            <div className="divider"></div>

            <div className="hc">
              <div className="hcard">
                <h3>Web Development</h3>
                <Code />
                <p>Building cool websites and exploring new frontend ideas.</p>
              </div>

              <div className="hcard">
                <h3>Gaming</h3>
                <Gamepad2 />
                <p>Gaming is more than a hobby for me, it’s something I truly enjoy.</p>
              </div>

              <div className="hcard">
                <h3>Gym</h3>
                <Dumbbell />
                <p>I enjoy pushing my limits, building strength, and staying motivated at the gym.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About