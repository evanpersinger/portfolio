import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Machine Learning Project',
      description: 'Built a predictive model to forecast customer behavior using Python and scikit-learn. Achieved 85% accuracy through feature engineering and hyperparameter tuning.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      link: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created an interactive dashboard for analyzing business metrics using Tableau and Python. Enabled stakeholders to make data-driven decisions.',
      technologies: ['Python', 'Tableau', 'SQL', 'Pandas'],
      link: '#'
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Developed a sentiment analysis tool for social media data using natural language processing techniques and deep learning models.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
