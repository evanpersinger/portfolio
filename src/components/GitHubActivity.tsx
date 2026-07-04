'use client'

import { GitHubCalendar } from 'react-github-calendar'
import './GitHubActivity.css'

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
