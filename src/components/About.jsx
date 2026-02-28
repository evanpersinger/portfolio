import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Data Science student at Western University with a passion for uncovering 
            insights from data. Currently working as a Data Science Intern at Biztrip AI in 
            San Francisco, I'm gaining hands-on experience in applying machine learning and 
            analytics to real-world problems.
          </p>
          <p>
            I split my time between Canada and the United States, studying during the academic 
            year and working on exciting projects during the summer. My focus is on leveraging 
            data to drive decision-making and create meaningful impact.
          </p>
          <p>
            When I'm not analyzing data or building models, you can find me exploring new 
            technologies, working on side projects, or staying up-to-date with the latest 
            developments in AI and machine learning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
