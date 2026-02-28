import React from 'react'
import { SiPython, SiR, SiPostgresql, SiJavascript, SiPytorch, SiJupyter, SiGit, SiDocker, SiAmazon, SiTableau, SiMysql, SiMongodb } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import './Skills.css'

function Skills() {
  const allSkills = [
    { name: 'Python', icon: SiPython },
    { name: 'R', icon: SiR },
    { name: 'SQL', icon: FaDatabase },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Jupyter', icon: SiJupyter },
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
    { name: 'AWS', icon: SiAmazon },
    { name: 'Tableau', icon: SiTableau },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb }
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
