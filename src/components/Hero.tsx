import React from 'react'
import { FaGithub, FaLinkedinIn, FaRegFileAlt } from 'react-icons/fa'
import CopyEmailButton from './CopyEmailButton'
import GitHubActivity from './GitHubActivity'
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
          <p className="hero-about">21 year old backend engineer</p>
          <div className="hero-info">
            <p className="hero-item">Data Science Student at Western University<img src="/icons/uwo_icon.png" alt="Western University" className="company-icon" /></p>
            <p className="hero-item">Backend Engineering Intern at BizTrip AI<a href="https://www.biztrip.ai/" target="_blank" rel="noopener noreferrer" aria-label="BizTrip AI"><img src="/icons/biztrip_icon.png" alt="BizTrip AI" className="company-icon biztrip-icon" /></a></p>
            <p className="hero-item">San Francisco, CA <img src="/icons/USA_Flag.svg" alt="US flag" className="location-flag" /></p>
          </div>
          <div className="hero-links">
            <a href="/Resume.pdf" className="hero-link resume-link" target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume">
              <FaRegFileAlt className="resume-icon" aria-hidden="true" />
            </a>
            <a href="https://github.com/evanpersinger" className="hero-link hero-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/evanpersinger/" className="hero-link hero-icon-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="social-icon" aria-hidden="true" />
            </a>
            <CopyEmailButton />
          </div>
        </div>
        <GitHubActivity />
      </div>
    </section>
  )
}

export default Hero
