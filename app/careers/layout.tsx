'use client';

import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <title>Careers at RIG Global Solutions</title>
        <meta name="description" content="Join RIG Global Solutions and build your future with purpose. Explore career opportunities across various departments." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className={`${inter.variable} font-sans min-h-screen bg-[#FDFBF8] text-gray-800 antialiased`}>
        {children}
      </div>
    </>
  );
}
