import React from 'react'
import './Education.css'

function Education() {
  const education = [
    {
      school: 'Western University',
      degree: 'Bachelor of Science',
      major: 'B.S. in Data Science',
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
              <h3 className="education-degree">{edu.school}<img src="/icons/uwo_icon.png" alt="Western University" className="school-icon" /></h3>
              <div className="education-meta">
                <span className="location">{edu.location}</span>
              </div>
              <p className="major">{edu.major}</p>
              <p className="graduation">{edu.graduation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
