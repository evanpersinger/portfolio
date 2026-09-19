'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react'
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

const ENTRIES = ['experience', 'education', 'tech-stack', 'projects', 'pets']

const HELP_TEXT = 'Commands: ls, cd <name>, find <term>, clear, help'

function entryLabel(name: string): string {
  return name in SUBFOLDERS ? `${name}/` : name
}

function commonPrefix(a: string, b: string): string {
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) i++
  return a.slice(0, i)
}

function dirForPath(pathname: string): Dir {
  if (pathname === '/projects') return 'projects'
  if (pathname === '/pets') return 'pets'
  return 'root'
}

function promptPath(dir: Dir): string {
  return dir === 'root' ? '~' : `~/${dir}`
}

type Line = { prompt: boolean; text: string; path: string }

// Lives in the layout, above the pages, so the history and a pending scroll
// survive `cd` switching routes (each route mounts its own <Terminal>).
type Session = {
  history: Line[]
  setHistory: Dispatch<SetStateAction<Line[]>>
  pendingScroll: MutableRefObject<string | null>
}

const SessionContext = createContext<Session | null>(null)

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<Line[]>([])
  const pendingScroll = useRef<string | null>(null)
  return (
    <SessionContext.Provider value={{ history, setHistory, pendingScroll }}>
      {children}
    </SessionContext.Provider>
  )
}

function useSession(): Session {
  const session = useContext(SessionContext)
  if (!session) throw new Error('Terminal must be rendered inside TerminalProvider')
  return session
}

function Terminal() {
  const router = useRouter()
  const pathname = usePathname()
  const dir = dirForPath(pathname)
  const { history, setHistory, pendingScroll } = useSession()
  const [input, setInput] = useState('')
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
          lines.push(ENTRIES.map(entryLabel).join('  '))
        }
        break
      case 'cd': {
        // `ls` prints folders as `pets/`, and a Mac's shell ignores case, so
        // accept `pets/`, `./pets`, `~/pets` and `Pets` too.
        const target = arg.replace(/^(~\/|\.\/|\/)/, '').replace(/\/+$/, '').toLowerCase()
        if (!target || target === '~' || target === '..' || target === 'root') {
          if (dir !== 'root') router.push('/')
        } else if (target === 'projects' || target === 'pets') {
          router.push(SUBFOLDERS[target])
        } else if (Object.hasOwn(ROOT_SECTION_IDS, target)) {
          scrollToSection(ROOT_SECTION_IDS[target])
        } else {
          lines.push(`cd: no such file or directory: ${arg}`)
        }
        break
      }
      case 'find': {
        if (!arg) {
          lines.push('usage: find <term>')
        } else {
          const matches = ENTRIES.filter((name) => name.includes(arg))
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

  // Only takes over Tab while a `cd` is being typed, so Tab still moves focus
  // out of the terminal for everyone else.
  function completeCd(e: React.KeyboardEvent<HTMLInputElement>) {
    const cd = input.match(/^cd(?:\s+(.*))?$/)
    if (!cd) return
    e.preventDefault()

    const partial = cd[1] ?? ''
    const candidates = dir === 'root' ? ENTRIES : [...ENTRIES, '..']
    const matches = candidates.filter((name) => name.startsWith(partial))
    if (matches.length === 0) return

    const line = `cd ${matches.reduce(commonPrefix)}`
    setInput(line)
    if (matches.length > 1) {
      const path = promptPath(dir)
      setHistory((prev) => [
        ...prev,
        { prompt: true, text: line, path },
        { prompt: false, text: matches.map(entryLabel).join('  '), path },
      ])
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'Tab') {
      completeCd(e)
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
