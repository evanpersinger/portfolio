import './Projects.css'

const PROJECTS: { title: string; description: string; tech: string[]; link: string }[] = []

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card log-box"
            key={project.title}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tag) => (
                <span className="project-tech-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
