'use client'

import { useState } from 'react'
import { FaPlane } from 'react-icons/fa'
import './PlaneButton.css'

function PlaneButton() {
  const [flying, setFlying] = useState(false)

  return (
    <button
      type="button"
      className={`plane-button${flying ? ' flying' : ''}`}
      onClick={() => setFlying(true)}
      onAnimationEnd={() => setFlying(false)}
      aria-label="Fly the plane in a loop"
    >
      <FaPlane className="plane-icon" aria-hidden="true" />
    </button>
  )
}

export default PlaneButton
