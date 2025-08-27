'use client';

import dynamic from 'next/dynamic';

// Import other sections with dynamic loading
const MissionSection = dynamic(() => import('./components/MissionSection'), { ssr: false });
const PhilosophySection = dynamic(() => import('./components/PhilosophySection'), { ssr: false });
const CareerPathSection = dynamic(() => import('./components/CareerPathSection'), { ssr: false });
const DepartmentsSection = dynamic(() => import('./components/DepartmentsSection'), { ssr: false });
const JobListingsSection = dynamic(() => import('./components/JobListingsSection'), { ssr: false });
const ApplySection = dynamic(() => import('./components/ApplySection'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });

export default function MainSections() {
  return (
    <>
      <MissionSection />
      <PhilosophySection />
      <CareerPathSection />
      <DepartmentsSection />
      <JobListingsSection />
      <ApplySection />
      <Footer />
    </>
  );
}
