'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import './Terminal.css'

// Root ("~") is the profile page. projects/ and pets/ are sibling
// subfolders with their own routes; experience/education/tech-stack are
// just sections within root, not real subfolders.
type Dir = 'root' | 'projects' | 'pets'

const SUBFOLDERS: Record<'projects' | 'pets', string> = {
  projects: '/projects',
  pets: '/pets',
}

const ROOT_SECTION_IDS: Record<string, string> = {
  experience: 'experience',
  education: 'education',
  'tech-stack': 'tech-stack',
}

const HELP_TEXT = 'Commands: ls, cd <name>, find <term>, clear, help'

function dirForPath(pathname: string): Dir {
  if (pathname === '/projects') return 'projects'
  if (pathname === '/pets') return 'pets'
  return 'root'
}

function promptPath(dir: Dir): string {
  return dir === 'root' ? '~' : `~/${dir}`
}

type Line = { prompt: boolean; text: string; path: string }

function Terminal() {
  const router = useRouter()
  const pathname = usePathname()
  const dir = dirForPath(pathname)
  const [history, setHistory] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const pendingScroll = useRef<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pendingScroll.current && pathname === '/') {
      const id = pendingScroll.current
      pendingScroll.current = null
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [pathname])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [history])

  function scrollToSection(id: string) {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      pendingScroll.current = id
      router.push('/')
    }
  }

  function run(raw: string) {
    const trimmed = raw.trim()
    const [cmd, ...args] = trimmed.split(/\s+/)
    const arg = args.join(' ')
    const lines: string[] = []

    switch (cmd) {
      case '':
        break
      case 'help':
        lines.push(HELP_TEXT)
        break
      case 'ls':
        if (dir === 'root') {
          lines.push('experience  education  tech-stack  projects/  pets/')
        }
        break
      case 'cd': {
        if (!arg || arg === '~' || arg === '/' || arg === '..' || arg === 'root') {
          if (dir !== 'root') router.push('/')
        } else if (arg === 'projects' || arg === 'pets') {
          router.push(SUBFOLDERS[arg])
        } else if (arg in ROOT_SECTION_IDS) {
          scrollToSection(ROOT_SECTION_IDS[arg])
        } else {
          lines.push(`cd: no such file or directory: ${arg}`)
        }
        break
      }
      case 'find': {
        if (!arg) {
          lines.push('usage: find <term>')
        } else {
          const names = ['experience', 'education', 'tech-stack', 'projects', 'pets']
          const matches = names.filter((name) => name.includes(arg))
          lines.push(matches.length ? matches.join('  ') : `find: no matches for "${arg}"`)
        }
        break
      }
      case 'clear':
        setHistory([])
        return
      default:
        lines.push(`command not found: ${cmd}`)
    }

    setHistory((prev) => [
      ...prev,
      { prompt: true, text: trimmed, path: promptPath(dir) },
      ...lines.map((text) => ({ prompt: false, text, path: promptPath(dir) })),
    ])
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    }
  }

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <span className="terminal-titlebar-label">evan@portfolio — zsh</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, i) =>
          line.prompt ? (
            <p className="terminal-line" key={i}>
              <span className="terminal-prompt">evan@portfolio {line.path} %</span> {line.text}
            </p>
          ) : (
            <p className="terminal-line terminal-output" key={i}>{line.text}</p>
          )
        )}
        <p className="terminal-line">
          <span className="terminal-prompt">evan@portfolio {promptPath(dir)} %</span>
          <span className="terminal-typed">{input}</span>
          <span className="terminal-cursor" />
          <input
            ref={inputRef}
            className="terminal-hidden-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </p>
      </div>
    </div>
  )
}

export default Terminal
