import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! This is a demo form. Connect with me via email or LinkedIn.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new opportunities, collaborations, or just 
            chatting about data science and technology.
          </p>
          <div className="contact-links">
            <a href="mailto:evan9persinger@gmail.com" className="contact-link">
              Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
            <a href="https://github.com/evanpersinger" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
