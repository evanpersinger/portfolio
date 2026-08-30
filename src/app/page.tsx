import Hero from '../components/Hero'
import Education from '../components/Education'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'

export default function Page() {
  return (
    <>
      <Hero />
      <div className="education-experience-container">
        <Experience />
        <Education />
        <TechStack />
      </div>
    </>
  )
}
