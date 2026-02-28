import React from 'react'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <div className="education-experience-container">
          <Education />
          <Experience />
        </div>
        <Skills />
      </main>
    </div>
  )
}

export default App
