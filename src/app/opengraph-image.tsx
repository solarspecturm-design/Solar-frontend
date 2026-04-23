import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Solar Spectrum'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '500px',
            height: '500px',
          }}
        >
          {/* Using a relative path to the public folder for the icon */}
          <img
            src="https://solarspectrum.com.au/favicon.png"
            alt="Solar Spectrum Icon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
