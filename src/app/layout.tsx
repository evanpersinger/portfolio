import '../index.css'

export const metadata = {
  title: 'Evan Persinger | Data Science',
  description: 'Evan Persinger - Data Science Student Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
