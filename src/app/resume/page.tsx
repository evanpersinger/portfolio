import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './resume.css'

export const metadata = {
  title: 'Resume | Evan Persinger',
  description: 'Resume of Evan Persinger, Data Science Student',
}

export default function ResumePage() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'resume', 'resume.md')
  const markdown = fs.readFileSync(filePath, 'utf8')

  return (
    <main className="resume">
      <div className="resume-actions">
        <a href="/" className="resume-back">← Back to portfolio</a>
      </div>
      <article className="resume-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </main>
  )
}
