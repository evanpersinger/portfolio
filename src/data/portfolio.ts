// Used by the metadata, sitemap and robots. Change it here when the domain does.
export const siteUrl = 'https://portfolio-sable-seven-14.vercel.app'

export interface Experience {
  title: string
  plane?: boolean
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

export interface Education {
  school: string
  major: string
  location: string
  graduation: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

export const experiences: Experience[] = [
  {
    title: 'Backend Engineering Intern',
    plane: true,
    company: 'BizTrip AI',
    location: 'San Francisco, CA',
    period: 'January 2026 - August 2026',
    description: [
      'Created an automated hotel price-drop rebooking feature and reusable Slack alerting service for an AI travel-booking platform.',
      'Improved map-based hotel search, fixing stale/incomplete results and adding on-demand "search this area" functionality.',
      'Implemented an ICS calendar along with booking email confirmations, allowing users to track the status of their trip.'
    ],
    technologies: ['Python', 'TypeScript', 'Docker', 'FastAPI', 'PostgreSQL']
  },
  {
    title: 'Data Science Intern',
    company: 'BizTrip AI',
    location: 'San Francisco, CA',
    period: 'May 2025 - August 2025',
    description: [
      'Utilized Python and SQL to build a custom AI analytics agent enabling clients to query complex travel datasets using natural language.',
      'Created data pipelines to ingest and normalize historical travel data (flights, hotels, rental cars) used by the BizTrip AI travel planner.',
      'Built a feature to enable ad-hoc upload of new datasets into the analytics agent. Datasets are automatically parsed and stored and made available for analytics by the AI agent.'
    ],
    technologies: ['Python', 'FastAPI', 'AWS Postgres', 'PostgreSQL', 'SQL', 'Docker']
  }
]

export const education: Education[] = [
  {
    school: 'Western University',
    major: 'B.S. in Data Science',
    location: 'London, Ontario, Canada',
    graduation: 'Expected 2028'
  }
]

// Empty until the first project is added.
export const projects: Project[] = []

// Order drives the TechStack row layout together with its .tech-break markers:
// row 1: Python, SQL, Jupyter, Git | row 2: AWS Postgres, PostgreSQL | row 3: Docker, FastAPI
export const technologies = [
  'Python',
  'SQL',
  'Jupyter',
  'Git',
  'AWS Postgres',
  'PostgreSQL',
  'Docker',
  'FastAPI'
] as const
