import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import Nav from '../components/Nav'
import { TerminalProvider } from '../components/Terminal'
import { siteUrl } from '../data/portfolio'
import '../index.css'
import '../App.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Evan Persinger | Data Science',
    template: '%s | Evan Persinger',
  },
  description: 'Evan Persinger - Data Science Student Portfolio',
  openGraph: {
    type: 'website',
    siteName: 'Evan Persinger',
  },
  twitter: {
    card: 'summary',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Nav />
        <div className="App">
          <main>
            <TerminalProvider>{children}</TerminalProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
