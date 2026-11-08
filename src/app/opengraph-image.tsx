import { ImageResponse } from 'next/og'

export const alt = 'Evan Persinger — Data Science Student Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Brand tokens from the site: dark fern-green background, light body text,
// and the green accent used on the hero photo ring and favicon.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#0b140e',
          color: '#e8f0ea',
          padding: '0 96px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#457a5c',
              color: '#e8f0ea',
              fontSize: 34,
              fontWeight: 700,
              borderRadius: 12,
            }}
          >
            EP
          </div>
          <div style={{ fontSize: 30, color: '#9fc3ad', fontWeight: 600 }}>
            Evan Persinger
          </div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Data Science Student
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Portfolio
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 34,
            color: '#9fc3ad',
            lineHeight: 1.4,
          }}
        >
          Python · SQL · FastAPI · TypeScript · Machine Learning
        </div>
      </div>
    ),
    size
  )
}
