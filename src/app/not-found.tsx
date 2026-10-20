import type { Metadata } from 'next'
import Link from 'next/link'
import './not-found.css'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-text">That page doesn&apos;t exist.</p>
      <Link href="/" className="not-found-link">Back to the home page</Link>
    </section>
  )
}
