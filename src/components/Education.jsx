import React from 'react'
import './Education.css'

function Education() {
  const education = [
    {
      school: 'Western University',
      degree: 'Bachelor of Science',
      major: 'Data Science',
      location: 'London, Ontario',
      graduation: 'Expected 2027'
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-meta">
                <span className="school">{edu.school}</span>
                <span className="location">{edu.location}</span>
              </div>
              <p className="major">Major: {edu.major}</p>
              <p className="graduation">{edu.graduation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
