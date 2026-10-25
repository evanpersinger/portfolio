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
  image?: string
}

export const experiences: Experience[] = [
  {
    title: 'Backend Engineering Intern',
    plane: true,
    company: 'BizTrip AI',
    location: 'San Francisco, CA',
    period: 'January 2026 - August 2026',
    description: [
      'Built an opt-in feature that rebooks hotel stays at a lower rate when the price drops. A daily job re-prices refundable bookings through Sabre and only rebooks if the free-cancel window is still open, the property is the same, and the savings are big enough. Added an admin dashboard that shows price history for each stay.',
      'Reduced AWS costs by about $500/month by moving data from AWS to encrypted DuckDB files, and kept the analytics agent working against it.',
      'Built two flight fare features in the travel agent. It recommends the lowest logical fare and offers it as a cheaper alternative the user can accept or decline. I also added an opt-in “Show all fares” view that goes from one fare per cabin to the full set of branded fares.'
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
      'Built a Sabre API pipeline that matches a client’s hotel lists to Sabre hotel codes by location and name, with match scoring.',
      'Wrote scripts to clean and normalize a client’s historical air, hotel, and car data. They fix cost formatting, expand rates, parse routes and airports, and validate the schema.'
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

export const projects: Project[] = [
  {
    title: 'Price Tracking',
    description: 'Compares grocery prices.\nTake a photo of a receipt and upload it to add your items.\nReceipts are processed by an LLM.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite'],
    link: 'https://github.com/evanpersinger/price-tracking',
    image: '/projects/price-tracking.png'
  },
  {
    title: 'File Converter',
    description: 'Converts files between various file formats.\nLLM powered scripts turn PDFs into Markdown.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript'],
    link: 'https://github.com/evanpersinger/file-converter',
    image: '/projects/file-converter.jpg'
  },
  {
    title: 'Typing Practice',
    description: 'A typing trainer that focus on the words you misspell.\nAn LLM writes practice sentences around them.\nIf you spell a word correctly 10 times it gets removed from your weak word list.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'Tailwind CSS'],
    link: 'https://github.com/evanpersinger/typing-practice',
    image: '/projects/typing-practice.png'
  }
]

// Order drives the TechStack row layout together with its .tech-break markers:
// row 1: Python, SQL, Jupyter, Git | row 2: AWS Postgres, PostgreSQL | row 3: Docker, FastAPI, TypeScript
export const technologies = [
  'Python',
  'SQL',
  'Jupyter',
  'Git',
  'AWS Postgres',
  'PostgreSQL',
  'Docker',
  'FastAPI',
  'TypeScript'
] as const
