'use client'

import React, { useState } from 'react'

const EMAIL = 'evan9persinger@gmail.com'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (older browser or insecure context)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="hero-link hero-icon-link copy-email"
      aria-label="Copy email address"
      title={EMAIL}
    >
      <img src="/icons/gmail_icon.webp" alt="Gmail" className="social-icon" />
      {copied && <span className="copy-tooltip" role="status">Copied!</span>}
    </button>
  )
}

export default CopyEmailButton
