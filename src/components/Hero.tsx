import { FaGithub, FaLinkedinIn, FaMapPin, FaRegFileAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import CopyEmailButton from './CopyEmailButton'
import LeafField from './LeafField'
import Terminal from './Terminal'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <img src="/Selfie.jpg" alt="Evan Persinger" className="profile-image" />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            <span className="gradient-text">Evan Persinger</span>
          </h1>
          <p className="hero-about">21-Year-Old Backend Engineer</p>
          <div className="hero-info">
            <p className="hero-item">Data Science Student at Western University<img src="/icons/uwo_icon.png" alt="Western University" className="company-icon" /></p>
            <p className="hero-item">San Francisco, CA<FaMapPin className="location-icon" aria-hidden="true" /><img src="/icons/Niners.png" alt="San Francisco 49ers" className="niners-icon" /></p>
            <p className="hero-item">Dual-citizen: USA and Canada<span className="flag-group"><img src="/icons/USA_Flag.png" alt="USA" className="flag-icon" /><img src="/icons/Canadian_Flag.png" alt="Canada" className="flag-icon" /></span></p>
          </div>
          <div className="hero-links">
            <a href="/Resume.pdf" className="hero-link" target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume">
              <LeafField />
              <FaRegFileAlt className="resume-icon" aria-hidden="true" />
            </a>
            <a href="https://github.com/evanpersinger" className="hero-link hero-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <LeafField />
              <FaGithub className="social-icon" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/evanpersinger/" className="hero-link hero-icon-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LeafField />
              <FaLinkedinIn className="social-icon linkedin-icon" aria-hidden="true" />
            </a>
            <a href="https://x.com/Evan__Persinger" className="hero-link hero-icon-link" target="_blank" rel="noopener noreferrer" aria-label="X">
              <LeafField />
              <FaXTwitter className="social-icon" aria-hidden="true" />
            </a>
            <CopyEmailButton />
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  )
}

export default Hero
