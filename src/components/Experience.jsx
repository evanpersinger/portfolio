import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Biztrip AI Inc',
      location: 'San Francisco, CA',
      period: 'May 2025 - Present',
      description: [
        'Developed machine learning models to optimize business operations',
        'Analyzed large datasets to extract actionable insights',
        'Collaborated with cross-functional teams to implement data-driven solutions',
        'Built automated reporting systems using Python and SQL'
      ]
    },
    {
      title: 'Data Science Student',
      company: 'Western University',
      location: 'London, ON',
      period: '2022 - Present',
      description: [
        'Studying statistical analysis, machine learning, and data visualization',
        'Completed coursework in algorithms, databases, and statistical modeling',
        'Participated in hackathons and data science competitions',
        'Maintained strong academic standing while building practical skills'
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
