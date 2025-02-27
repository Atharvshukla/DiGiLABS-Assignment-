import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DigiLabs-Assignment',
  description: 'Created By Atharv Shukla',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
