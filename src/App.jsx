import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}

export default App
