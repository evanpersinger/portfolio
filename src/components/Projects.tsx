import { projects } from '../data/portfolio'
import Terminal from './Terminal'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-layout">
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card log-box"
              key={project.title}
            >
              <h3 className="project-title">{project.title}</h3>
              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />
              )}
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tag) => (
                  <span className="project-tech-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <Terminal />
      </div>
    </section>
  )
}

export default Projects
