import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RIG Consulting',
  description: 'RIG Consulting - Professional Services',
  generator: 'Next.js',
  applicationName: 'RIG Consulting',
  referrer: 'strict-origin-when-cross-origin',
  keywords: ['RIG', 'Consulting', 'Professional Services'],
  authors: [{ name: 'RIG Consulting' }],
  creator: 'RIG Consulting',
  publisher: 'RIG Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen w-full overflow-x-hidden">
        <div className="min-h-screen w-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
