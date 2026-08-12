import React from 'react'
import '../styles/skills.css'
import {
  Sparkles,
  BookHeart,
  HeartHandshake,
  WandSparkles,
  Code2
} from 'lucide-react'

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      note: 'The skeleton of all my web chaos. I use it to structure pages cleanly and stop everything from collapsing into sadness.',
      emoji: <i className="fa-brands fa-html5"></i>,
      deco: '✦',
      rotate: 'r1',
      mood: 'Structure & Layout'
    },
    {
      name: 'CSS',
      note: 'Probably my favorite one. I love making things aesthetic, smooth, cute, and way more dramatic than necessary.',
      emoji: <i className="fa-brands fa-css3-alt"></i>,
      deco: '♡',
      rotate: 'r2',
      mood: 'Styling & Vibes'
    },
    {
      name: 'JavaScript',
      note: 'The part where things either become interactive or catch fire. Still learning, still surviving.',
      emoji: <i className="fa-brands fa-js"></i>,
      deco: '★',
      rotate: 'r3',
      mood: 'Logic & Interactions'
    },
    {
      name: 'React',
      note: 'Makes building websites way more fun. Components, reusability, and slightly less suffering.',
      emoji: <i className="fa-brands fa-react"></i>,
      deco: '✿',
      rotate: 'r4',
      mood: 'Frontend Magic'
    },
    {
      name: 'Python',
      note: 'Used mostly for logic, problem solving, and school stuff. Quietly useful. Like a nerd with good posture.',
      emoji: <i className="fa-brands fa-python"></i>,
      deco: '☾',
      rotate: 'r1',
      mood: 'Logic & Problem Solving'
    },
  
  
  ]

  return (
    <section className="smain" id="skills">
      {/* dreamy background blobs */}
      <div className="skillblob sb1"></div>
      <div className="skillblob sb2"></div>
      <div className="skillblob sb3"></div>

      {/* floating mini stickers */}
      <div className="floating-sticker fs1">✦ code</div>
      <div className="floating-sticker fs2">♡ build</div>
      <div className="floating-sticker fs3">☁ dream</div>

      <div className="skills-head">
        <span className="skills-tag">My Tiny Tech Library</span>
        <h2><Sparkles size={22} /> Skills</h2>
        <p>
          A shelf full of tools I use to build websites, style interfaces,
          fix bugs, and occasionally survive my own code.
        </p>
      </div>

      <div className="skills-top-strip">
        <div className="mini-note">
          <BookHeart size={18} />
          <span>Tap into the books of my coding lore.</span>
        </div>

        <div className="mini-note">
          <HeartHandshake size={18} />
          <span>Frontend is my comfort zone.</span>
        </div>

        <div className="mini-note">
          <WandSparkles size={18} />
          <span>UI  emotional stability</span>
        </div>
      </div>

      <div className="skigrid">
        {skills.map((skill, index) => (
          <div className={`book ${skill.rotate}`} key={index}>
            <div className="inside">
              <span className="inside-emoji">{skill.emoji}</span>
              <span className="inside-mood">{skill.mood}</span>
              <h3>{skill.name}</h3>
              <p>{skill.note}</p>
            </div>

            <div className={`cover cover-${index % 4}`}>
              <div className="cover-shine"></div>

              <div className="cover-top">
                <span className="cover-deco">{skill.deco}</span>
                <span className="cover-emoji">{skill.emoji}</span>
              </div>

              <div className="cover-content">
                <span className="cover-mini-label">Skill Book</span>
                <h3>{skill.name}</h3>
                <p>Open me</p>
              </div>

              <div className="cover-bottom">
                <span>{skill.deco}</span>
                <Code2 size={15} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills