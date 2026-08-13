import Hero from '../components/Hero'
import Education from '../components/Education'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'
import '../App.css'

export default function Page() {
  return (
    <div className="App">
      <main>
        <Hero />
        <div className="education-experience-container">
          <Experience />
          <Education />
          <TechStack />
        </div>
      </main>
    </div>
  )
}
