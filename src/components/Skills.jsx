import React from 'react'
import { SiPython, SiR, SiPostgresql, SiJavascript } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'R', icon: SiR },
        { name: 'SQL', icon: FaDatabase },
        { name: 'JavaScript', icon: SiJavascript }
      ]
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Pandas', icon: null },
        { name: 'NumPy', icon: null },
        { name: 'Scikit-learn', icon: null },
        { name: 'TensorFlow', icon: null },
        { name: 'PyTorch', icon: null },
        { name: 'Matplotlib', icon: null },
        { name: 'Seaborn', icon: null }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Jupyter', icon: null },
        { name: 'Git', icon: null },
        { name: 'Docker', icon: null },
        { name: 'AWS', icon: null },
        { name: 'Tableau', icon: null },
        { name: 'Excel', icon: null }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: null },
        { name: 'MongoDB', icon: null }
      ]
    }
  ]

  return (
    <section id="technologies" className="skills">
      <h2 className="section-title">Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon
                return (
                  <span key={skillIndex} className="skill-tag">
                    {IconComponent && <IconComponent className="skill-icon" />}
                    {skill.name}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
