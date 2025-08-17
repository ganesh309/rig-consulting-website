'use client';

import { useEffect } from 'react';

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

export default function StructuredData() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    
    // Add script to head
    document.head.appendChild(script);
    
    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
