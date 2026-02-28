import React from 'react'
import './Hero.css'
import uwoIcon from '../../icons/uwo_icon.png'
import biztrip_icon from '../../icons/biztrip_icon.png'

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
          <div className="hero-info">
            <p className="hero-item">Data Science Student at Western University<img src={uwoIcon} alt="Western University" className="company-icon" /></p>
            <p className="hero-item">Backend Engineering Intern at Biztrip AI<img src={biztrip_icon} alt="Biztrip AI" className="company-icon biztrip-icon" /></p>
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
      </div>
    </section>
  )
}

export default Hero
