import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Backend Engineering Intern',
      company: 'BizTrip AI',
      location: 'San Francisco, CA',
      period: 'January 2026 - Present',
      description: [
        'Created an automated hotel price-drop rebooking feature and reusable Slack alerting service for an AI travel-booking platform.',
        'Improved map-based hotel search, fixing stale/incomplete results and adding on-demand "search this area" functionality.',
        'Implemented an ICS calendar along with booking email confirmations, allowing users to track the status of their trip.'
      ],
      technologies: ['Python', 'TypeScript', 'Docker', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Data Science Intern',
      company: 'BizTrip AI',
      location: 'San Francisco, CA',
      period: 'May 2025 - September 2025',
      description: [
        'Utilized Python and SQL to build a custom AI analytics agent enabling clients to query complex travel datasets using natural language.',
        'Created data pipelines to ingest and normalize historical travel data (flights, hotels, rental cars) used by the BizTrip AI travel planner.',
        'Built a feature to enable ad-hoc upload of new datasets into the analytics agent. Datasets are automatically parsed and stored and made available for analytics by the AI agent.'
      ],
      technologies: ['Python', 'FastAPI', 'AWS Postgres', 'PostgreSQL', 'SQL', 'Docker']
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
              {exp.technologies && (
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="experience-tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
