'use client'

import { useEffect, useState } from 'react'
import { FaPlane } from 'react-icons/fa'
import sfMap from './sf-map-data.json'
import './LocationMap.css'

// FaPlane's glyph rests nose-up-and-to-the-right; this levels it to point
// along +x before the tangential/orbit rotations are applied on top.
const PLANE_LEVEL_ANGLE = -20
const ORBIT_RADIUS = 76

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const handleChange = () => setReduced(query.matches)
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return reduced
}

function LocationMap() {
  const reducedMotion = useReducedMotion()
  const [pinX, pinY] = sfMap.pin

  return (
    <div id="location" className="location-map-wrap">
      <svg
        className="location-map-illustration"
        viewBox={`0 0 ${sfMap.size} ${sfMap.size}`}
        role="img"
        aria-label="Map of San Francisco, built from public-domain US Census TIGER/Line data"
      >
        <defs>
          <radialGradient id="sf-land-gradient" cx="45%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#1d3325" />
            <stop offset="100%" stopColor="#101d15" />
          </radialGradient>
          <linearGradient id="sf-water-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#134a63" />
            <stop offset="100%" stopColor="#08222f" />
          </linearGradient>
          <filter id="sf-road-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0.8" stdDeviation="0.8" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>
        <rect width={sfMap.size} height={sfMap.size} fill="url(#sf-land-gradient)" />
        {sfMap.water.map((d, i) => (
          <path key={`water-${i}`} d={d} fill="url(#sf-water-gradient)" />
        ))}
        <g filter="url(#sf-road-shadow)">
          {sfMap.secondary.map((d, i) => (
            <path key={`secondary-case-${i}`} d={d} className="sf-road-secondary-case" />
          ))}
          {sfMap.primary.map((d, i) => (
            <path key={`primary-case-${i}`} d={d} className="sf-road-primary-case" />
          ))}
        </g>
        {sfMap.secondary.map((d, i) => (
          <path key={`secondary-${i}`} d={d} className="sf-road-secondary" />
        ))}
        {sfMap.primary.map((d, i) => (
          <path key={`primary-${i}`} d={d} className="sf-road-primary" />
        ))}
        <text x={sfMap.size / 2 + 12} y={sfMap.size / 2} className="sf-label">
          San Francisco
        </text>
        <g transform={`translate(${pinX},${pinY})`}>
          <g>
            <g transform={`translate(${ORBIT_RADIUS},0) rotate(90)`}>
              <g transform={`rotate(${PLANE_LEVEL_ANGLE})`}>
                <FaPlane color="#e8f0ea" size={17} x={-8.5} y={-8.5} />
              </g>
            </g>
            {!reducedMotion && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="6s"
                repeatCount="indefinite"
              />
            )}
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LocationMap
