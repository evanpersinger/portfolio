import React from 'react'
import { SiGooglesheets } from 'react-icons/si'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Tatari Data Analysis',
      bullets: [
        'Analyzed software and cloud infrastructure costs over 12 months',
        'Reviewed spending on tech products like Slack and AWS',
        'Reported findings to SVP of Engineering'
      ],
      technologies: [
        { name: 'Google Sheets', icon: SiGooglesheets }
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-bullets">
              {project.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="project-bullet">{bullet}</li>
              ))}
            </ul>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => {
                const IconComponent = tech.icon
                return (
                  <span key={techIndex} className="tech-tag">
                    {IconComponent && <IconComponent className="tech-icon" />}
                    {tech.name}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
