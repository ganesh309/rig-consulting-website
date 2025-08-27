'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import components with dynamic loading
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false });
const MissionSection = dynamic(() => import('./components/MissionSection'), { ssr: false });
const PhilosophySection = dynamic(() => import('./components/PhilosophySection'), { ssr: false });
const CareerPathSection = dynamic(() => import('./components/CareerPathSection'), { ssr: false });
const DepartmentsSection = dynamic(() => import('./components/DepartmentsSection'), { ssr: false });
const JobListingsSection = dynamic(() => import('./components/JobListingsSection'), { ssr: false });
const ApplySection = dynamic(() => import('./components/ApplySection'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });

export default function CareersPage() {
  return (
    <div className="bg-[#FDFBF8]">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <HeroSection />
        <MissionSection />
        <PhilosophySection />
        <CareerPathSection />
        <DepartmentsSection />
        <JobListingsSection />
        <ApplySection />
        <Footer />
      </Suspense>
    </div>
  );
}