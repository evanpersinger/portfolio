'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Nav.css'

const NAV_LINKS = [
  { href: '/', label: 'Profile' },
  { href: '/projects', label: 'Projects' },
  { href: '/pets', label: 'Pets' },
]

function Nav() {
  const pathname = usePathname()

  return (
    <nav className="site-nav">
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`site-nav-link${pathname === href ? ' site-nav-link-active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
