import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src="/Selfie.png" alt="Evan Persinger" className="profile-image" />
        <h1 className="hero-title">
          <span className="gradient-text">Evan Persinger</span>
        </h1>
        <div className="hero-info">
          <p className="hero-item">Data Science Student at Western University</p>
          <p className="hero-item">Data Science Intern at Biztrip AI</p>
          <p className="hero-item">San Francisco, CA <img src="/icons/Niners.png" alt="49ers" className="location-flag" /> <img src="/icons/USA_Flag.png" alt="US flag" className="location-flag" /></p>
          <p className="hero-item">London, ON <img src="/icons/Canadian_Flag.png" alt="Canadian flag" className="location-flag" /></p>
        </div>
        <div className="hero-links">
          <a href="/resume.pdf" className="hero-link">Resume</a>
          <a href="https://github.com" className="hero-link hero-icon-link">
            <img src="/icons/Github_icon.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://linkedin.com" className="hero-link hero-icon-link">
            <img src="/icons/linkedin_icon.jpg" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:your-email@gmail.com" className="hero-link hero-icon-link">
            <img src="/icons/gmail_icon.webp" alt="Gmail" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
