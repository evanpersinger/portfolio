import './Terminal.css'

// Static shell only, no input handling yet.
function Terminal() {
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-titlebar-label">evan@portfolio — zsh</span>
      </div>
      <div className="terminal-body">
        <p className="terminal-line">
          <span className="terminal-prompt">evan@portfolio ~ %</span>
          <span className="terminal-cursor" />
        </p>
      </div>
    </div>
  )
}

export default Terminal
