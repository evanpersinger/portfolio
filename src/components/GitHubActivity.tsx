'use client'

import dynamic from 'next/dynamic'
import './GitHubActivity.css'

// Client-only: the calendar fetches contributions after mount, so the server can
// only ever render a full-year placeholder that transformData then trims. That
// mismatch breaks hydration.
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
)

function GitHubActivity() {
  return (
    <section className="github-activity">
      <GitHubCalendar
        username="evanpersinger"
        colorScheme="dark"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        transformData={(contributions) => {
          const cutoff = new Date()
          cutoff.setMonth(cutoff.getMonth() - 6)
          return contributions.filter((day) => new Date(day.date) >= cutoff)
        }}
      />
    </section>
  )
}

export default GitHubActivity
