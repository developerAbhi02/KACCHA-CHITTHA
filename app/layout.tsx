import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KACHHA CHITTHA - An Intellectual Audit of the Indian Reality',
  description: 'Seeking intellectuals, auditors & whistleblowers. Help us break the loop of suffering through rational thinking.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>{children}</body>
    </html>
  )
}
