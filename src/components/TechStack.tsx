import React from 'react'
import { SiPython, SiPostgresql, SiJupyter, SiGit, SiDocker, SiFastapi } from 'react-icons/si'
import { FaDatabase, FaAws } from 'react-icons/fa'
import './TechStack.css'

function TechStack() {
  // Order drives the row layout together with the .tech-break markers below:
  // row 1: Python, SQL, Jupyter, Git | row 2: AWS Postgres, PostgreSQL | row 3: Docker, FastAPI
  const technologies = [
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
    <section id="tech-stack" className="tech-stack">
      <h2 className="section-title">Tech Stack</h2>
      <div className="tech-tags">
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <React.Fragment key={index}>
              {(tech.name === 'AWS Postgres' || tech.name === 'Docker') && <span className="tech-break" />}
              <span className="tech-tag">
                <Icon className="tech-icon" />
                {tech.name}
              </span>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack
