import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Experience />
        <Skills />
      </main>
    </div>
  )
}

export default App
