import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// Green from the hero photo ring, light text from the page's body color.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#457a5c',
          color: '#e8f0ea',
          fontSize: 18,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        EP
      </div>
    ),
    size
  )
}
