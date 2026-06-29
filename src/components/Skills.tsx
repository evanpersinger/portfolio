import React from 'react'
import { SiPython, SiPostgresql, SiJupyter, SiGit, SiDocker, SiFastapi } from 'react-icons/si'
import { FaDatabase, FaAws } from 'react-icons/fa'
import './Skills.css'

function Skills() {
  const allSkills = [
    { name: 'Python', icon: SiPython },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Jupyter', icon: SiJupyter },
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
    { name: 'AWS', icon: FaAws },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'FastAPI', icon: SiFastapi }
  ]

  return (
    <section id="technologies" className="skills">
      <h2 className="section-title">Technologies</h2>
      <div className="skill-tags">
        {allSkills.map((skill, index) => {
          const IconComponent = skill.icon
          return (
            <span key={index} className="skill-tag">
              {IconComponent && <IconComponent className="skill-icon" />}
              {skill.name}
            </span>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
