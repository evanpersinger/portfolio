import React from 'react'
import { SiPython, SiPostgresql, SiJupyter, SiGit, SiDocker, SiFastapi } from 'react-icons/si'
import { FaDatabase, FaAws } from 'react-icons/fa'
import './Skills.css'

function Skills() {
  // Order drives the row layout together with the .skill-break markers below:
  // row 1: Python, SQL, Jupyter, Git | row 2: AWS Postgres, PostgreSQL | row 3: Docker, FastAPI
  const allSkills = [
    { name: 'Python', icon: SiPython },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Jupyter', icon: SiJupyter },
    { name: 'Git', icon: SiGit },
    { name: 'AWS Postgres', icon: FaAws },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Docker', icon: SiDocker },
    { name: 'FastAPI', icon: SiFastapi }
  ]

  return (
    <section id="technologies" className="skills">
      <h2 className="section-title">Tech Stack</h2>
      <div className="skill-tags">
        {allSkills.map((skill, index) => {
          const IconComponent = skill.icon
          return (
            <React.Fragment key={index}>
              {(skill.name === 'AWS Postgres' || skill.name === 'Docker') && <span className="skill-break" />}
              <span className="skill-tag">
                {IconComponent && <IconComponent className="skill-icon" />}
                {skill.name}
              </span>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
