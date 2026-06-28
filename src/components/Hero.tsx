import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <img src="/Selfie.png" alt="Evan Persinger" className="profile-image" />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            <span className="gradient-text">Evan Persinger</span>
          </h1>
          <p className="hero-about">21 year old data science student from the Bay Area</p>
          <div className="hero-info">
            <p className="hero-item">Data Science Student at Western University<img src="/icons/uwo_icon.png" alt="Western University" className="company-icon" /></p>
            <p className="hero-item">Backend Engineering Intern at Biztrip AI<img src="/icons/biztrip_icon.png" alt="Biztrip AI" className="company-icon biztrip-icon" /></p>
            <p className="hero-item">San Francisco, CA <img src="/icons/Niners.png" alt="49ers" className="location-flag" /> <img src="/icons/USA_Flag.png" alt="US flag" className="location-flag" /></p>
            <p className="hero-item">London, ON <img src="/icons/Canadian_Flag.png" alt="Canadian flag" className="location-flag" /></p>
          </div>
          <div className="hero-links">
            <a href="/resume" className="hero-link">Resume</a>
            <a href="https://github.com" className="hero-link hero-icon-link" target="_blank" rel="noopener noreferrer">
              <img src="/icons/Github_icon.png" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://linkedin.com" className="hero-link hero-icon-link" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin_icon.jpg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="mailto:your-email@gmail.com" className="hero-link hero-icon-link">
              <img src="/icons/gmail_icon.webp" alt="Gmail" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
