import React from 'react'
import type { IconType } from 'react-icons'
import { SiPython, SiPostgresql, SiJupyter, SiGit, SiDocker, SiFastapi } from 'react-icons/si'
import { FaDatabase, FaAws } from 'react-icons/fa'
import { technologies } from '../data/portfolio'
import './TechStack.css'

const ICONS: Record<(typeof technologies)[number], IconType> = {
  Python: SiPython,
  SQL: FaDatabase,
  Jupyter: SiJupyter,
  Git: SiGit,
  'AWS Postgres': FaAws,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  FastAPI: SiFastapi
}

function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack">
      <h2 className="section-title">Tech Stack</h2>
      <div className="tech-tags log-box">
        {technologies.map((name) => {
          const Icon = ICONS[name]
          return (
            <React.Fragment key={name}>
              {(name === 'AWS Postgres' || name === 'Docker') && <span className="tech-break" />}
              <span className="tech-tag">
                <Icon className="tech-icon" />
                {name}
              </span>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack
