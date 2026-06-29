import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Biztrip AI Inc',
      location: 'San Francisco, CA',
      period: 'January 2026 - Present',
      description: [
        'Built and maintained backend features in Python for the travel platform',
        'Designed and tested REST API endpoints backed by PostgreSQL',
        'Shipped containerized services with Docker in a team Git workflow'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Biztrip AI Inc',
      location: 'San Francisco, CA',
      period: 'May 2025 - September 2025',
      description: [
        'Developed machine learning models to optimize business operations',
        'Analyzed large datasets to extract actionable insights',
        'Built automated reporting systems using Python and SQL'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-meta">
                <span className="company">{exp.company}</span>
                <span className="location">{exp.location}</span>
              </div>
              <p className="period">{exp.period}</p>
              <ul className="experience-description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
