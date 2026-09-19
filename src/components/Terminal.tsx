'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { education, experiences, technologies } from '../data/portfolio'
import './Terminal.css'

// Root ("~") is the profile page. projects/ and pets/ are sibling
// subfolders with their own routes; experience/education/tech-stack are
// files you can `cat`, and `cd` scrolls to them on root.
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

// A single space keeps a blank line visible (an empty <p> collapses).
const BLANK = ' '

const FILES: Record<string, string[]> = {
  experience: experiences.flatMap((exp, i) => [
    ...(i > 0 ? [BLANK] : []),
    `${exp.title} @ ${exp.company}`,
    `${exp.period}, ${exp.location}`,
    ...exp.description.map((item) => `  - ${item}`),
    `  Tech: ${exp.technologies.join(', ')}`,
  ]),
  education: education.flatMap((edu, i) => [
    ...(i > 0 ? [BLANK] : []),
    edu.school,
    `${edu.major}, ${edu.graduation}`,
    edu.location,
  ]),
  'tech-stack': [technologies.join(', ')],
}

const ENTRIES = ['experience', 'education', 'tech-stack', 'projects', 'pets']

const COMMANDS = ['ls', 'cd', 'cat', 'find', 'pwd', 'whoami', 'history', 'clear', 'help']

const HELP_LINES = [
  'ls            list this folder',
  'cd <name>     go to a section or folder',
  'cat <name>    print a section',
  'find <term>   search section names',
  'pwd           print the current folder',
  'whoami        who is this',
  'history       show past commands',
  'clear         clear the screen (Ctrl+L)',
  'Tab completes, up/down recalls history',
]

const WHOAMI = 'Evan Persinger, 21-Year-Old Backend Engineer and Data Science student at Western University'

// Names are matched in lowercase but shown capitalized, like folders on a Mac.
function display(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function entryLabel(name: string): string {
  return name in SUBFOLDERS ? `${display(name)}/` : display(name)
}

// `ls` prints folders as `pets/`, and a Mac's shell ignores case, so accept
// `pets/`, `./pets`, `~/pets` and `Pets`.
function normalizeArg(arg: string): string {
  return arg.replace(/^(~\/|\.\/|\/)/, '').replace(/\/+$/, '').toLowerCase()
}

function isHome(target: string): boolean {
  return !target || target === '~' || target === '..' || target === 'root'
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
  return dir === 'root' ? '~' : `~/${display(dir)}`
}

type Line = { prompt: boolean; text: string; path: string }

// Lives in the layout, above the pages, so the output, the command history and
// a pending scroll survive `cd` switching routes (each route mounts its own
// <Terminal>).
type Session = {
  history: Line[]
  setHistory: Dispatch<SetStateAction<Line[]>>
  commands: MutableRefObject<string[]>
  pendingScroll: MutableRefObject<string | null>
}

const SessionContext = createContext<Session | null>(null)

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<Line[]>([])
  const commands = useRef<string[]>([])
  const pendingScroll = useRef<string | null>(null)
  return (
    <SessionContext.Provider value={{ history, setHistory, commands, pendingScroll }}>
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
  const { history, setHistory, commands, pendingScroll } = useSession()
  const [input, setInput] = useState('')
  const [caret, setCaret] = useState(0)
  // Which past command up/down is showing (null = the line being typed), and
  // the half-typed line to restore when arrowing back down to it.
  const recallIndex = useRef<number | null>(null)
  const draft = useRef('')
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

  function setLine(value: string) {
    setInput(value)
    setCaret(value.length)
  }

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
        lines.push(...HELP_LINES)
        break
      case 'ls':
        if (dir === 'root') {
          lines.push(ENTRIES.map(entryLabel).join('  '))
        }
        break
      case 'cd': {
        const target = normalizeArg(arg)
        if (isHome(target)) {
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
      case 'cat': {
        const target = normalizeArg(arg)
        if (!arg) {
          lines.push('usage: cat <name>')
        } else if (isHome(target) || Object.hasOwn(SUBFOLDERS, target)) {
          lines.push(`cat: ${arg}: Is a directory`)
        } else if (Object.hasOwn(FILES, target)) {
          lines.push(...FILES[target])
        } else {
          lines.push(`cat: ${arg}: No such file or directory`)
        }
        break
      }
      case 'find': {
        if (!arg) {
          lines.push('usage: find <term>')
        } else {
          const matches = ENTRIES.filter((name) => name.includes(arg.toLowerCase()))
          lines.push(
            matches.length ? matches.map(entryLabel).join('  ') : `find: no matches for "${arg}"`
          )
        }
        break
      }
      case 'pwd':
        lines.push(dir === 'root' ? '/Users/evan' : `/Users/evan/${display(dir)}`)
        break
      case 'whoami':
        lines.push(WHOAMI)
        break
      case 'history':
        lines.push(...commands.current.map((c, i) => `${String(i + 1).padStart(4)}  ${c}`))
        break
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

  function submit() {
    const cmd = input.trim()
    if (cmd && cmd !== commands.current.at(-1)) commands.current.push(cmd)
    recallIndex.current = null
    run(input)
    setLine('')
  }

  // Ctrl+C: abandon the line, leaving it behind with ^C like a real shell.
  function cancelLine() {
    setHistory((prev) => [...prev, { prompt: true, text: `${input}^C`, path: promptPath(dir) }])
    recallIndex.current = null
    setLine('')
  }

  function recall(direction: 'up' | 'down') {
    const past = commands.current
    let next: number | null
    if (direction === 'up') {
      if (past.length === 0) return
      if (recallIndex.current === null) draft.current = input
      next = recallIndex.current === null ? past.length - 1 : Math.max(0, recallIndex.current - 1)
    } else {
      if (recallIndex.current === null) return
      next = recallIndex.current + 1 >= past.length ? null : recallIndex.current + 1
    }
    recallIndex.current = next
    setLine(next === null ? draft.current : past[next])
  }

  // Completes an argument to `cd`/`cat`, or a command name while a single word
  // is being typed. Only takes over Tab when there is something to complete,
  // so Tab still moves focus out of the terminal on an empty line or an
  // unknown word.
  function complete(e: React.KeyboardEvent<HTMLInputElement>) {
    const withArg = input.match(/^(cd|cat)(?:\s+(.*))?$/)
    if (!withArg && !/^\S+$/.test(input)) return

    const partial = withArg ? normalizeArg(withArg[2] ?? '') : input.toLowerCase()
    const candidates = !withArg
      ? COMMANDS
      : withArg[1] === 'cd' && dir !== 'root'
        ? [...ENTRIES, '..']
        : ENTRIES
    const matches = candidates.filter((name) => name.startsWith(partial))
    if (matches.length === 0) {
      if (withArg) e.preventDefault()
      return
    }
    e.preventDefault()

    const common = matches.reduce(commonPrefix)
    const line = withArg
      ? `${withArg[1]} ${matches.length === 1 ? entryLabel(matches[0]) : display(common)}`
      : matches.length === 1
        ? `${common} `
        : common
    setLine(line)
    if (matches.length > 1) {
      const path = promptPath(dir)
      const label = withArg ? entryLabel : (name: string) => name
      setHistory((prev) => [
        ...prev,
        { prompt: true, text: line, path },
        { prompt: false, text: matches.map(label).join('  '), path },
      ])
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const ctrl = e.ctrlKey && !e.metaKey && !e.altKey
    if (e.key === 'Enter') {
      submit()
    } else if (e.key === 'Tab') {
      complete(e)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      recall(e.key === 'ArrowUp' ? 'up' : 'down')
    } else if (ctrl && e.key.toLowerCase() === 'l') {
      e.preventDefault()
      setHistory([])
    } else if (ctrl && e.key.toLowerCase() === 'c' && !window.getSelection()?.toString()) {
      e.preventDefault()
      cancelLine()
    }
  }

  function syncCaret(e: React.SyntheticEvent<HTMLInputElement>) {
    setCaret(e.currentTarget.selectionStart ?? e.currentTarget.value.length)
  }

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <span className="terminal-titlebar-label">evan@portfolio (zsh)</span>
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
          <span className="terminal-typed">{input.slice(0, caret)}</span>
          <span className="terminal-cursor">{input[caret] ?? ' '}</span>
          <span className="terminal-typed">{input.slice(caret + 1)}</span>
          <input
            ref={inputRef}
            className="terminal-hidden-input"
            value={input}
            onChange={(e) => {
              recallIndex.current = null
              setInput(e.target.value)
              syncCaret(e)
            }}
            onKeyDown={handleKeyDown}
            onKeyUp={syncCaret}
            onSelect={syncCaret}
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
