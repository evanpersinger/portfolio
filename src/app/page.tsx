import Hero from '../components/Hero'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import '../App.css'

export default function Page() {
  return (
    <div className="App">
      <main>
        <Hero />
        <div className="education-experience-container">
          <Experience />
          <Education />
          <Skills />
        </div>
      </main>
    </div>
  )
}
