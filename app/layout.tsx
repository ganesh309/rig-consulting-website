import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'RIG Global Solutions',
  url: 'https://rigglobalsolutions.com',
  logo: 'https://rigglobalsolutions.com/logo.png',
  description: 'Leading professional services and consulting firm providing expert solutions for businesses worldwide.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: 'Your ZIP',
    addressCountry: 'Your Country'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '00.000000',
    longitude: '00.000000'
  },
  telephone: '+1-XXX-XXX-XXXX',
  sameAs: [
    'https://facebook.com/rigglobalsolutions',
    'https://linkedin.com/company/rig-global-solutions',
    'https://twitter.com/rigglobalsolns'
  ],
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  }],
  priceRange: '$$-$$$'
};

export const metadata: Metadata = {
  title: 'RIG Global Solutions | Professional Consulting Services',
  description: 'RIG Global Solutions is a leading professional services and consulting firm providing expert business solutions and strategic consulting services to help businesses grow and succeed.',
  generator: 'Next.js',
  applicationName: 'RIG Global Solutions',
  referrer: 'strict-origin-when-cross-origin',
  keywords: [
    'RIG Global Solutions',
    'professional consulting firm',
    'business consulting services',
    'management consulting',
    'business strategy consulting',
    'corporate consulting services',
    'business advisory services',
    'consulting company',
    'business solutions',
    'strategic consulting',
    'business transformation',
    'corporate strategy',
    'business process improvement',
    'operational excellence',
    'business growth consulting'
  ],
  authors: [{ name: 'RIG Global Solutions' }],
  creator: 'RIG Global Solutions',
  publisher: 'RIG Global Solutions',
  metadataBase: new URL('https://rigglobalsolutions.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/RIG favicon.png', type: 'image/png' },
    ],
  },
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
      <head />
      <body className="min-h-screen w-full overflow-x-hidden">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
          strategy="beforeInteractive"
        />
        <div className="min-h-screen w-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
