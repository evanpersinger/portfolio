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
          <p className="hero-item">San Francisco, CA | London, ON</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
