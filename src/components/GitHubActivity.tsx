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

const MONTHS_SHOWN = 6

function GitHubActivity() {
  return (
    <section className="github-activity">
      <GitHubCalendar
        username="evanpersinger"
        errorMessage="GitHub activity couldn't be loaded right now."
        colorScheme="dark"
        blockSize={16}
        blockMargin={5}
        fontSize={16}
        transformData={(contributions) => {
          const cutoff = new Date()
          cutoff.setMonth(cutoff.getMonth() - MONTHS_SHOWN)
          return contributions.filter((day) => new Date(day.date) >= cutoff)
        }}
      />
    </section>
  )
}

export default GitHubActivity
