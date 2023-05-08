import './globals.css'

export const metadata = {
  title: 'Bambuu',
  description: 'Bambuu WebSite',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  )
}
