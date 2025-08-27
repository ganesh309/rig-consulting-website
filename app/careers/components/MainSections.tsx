'use client';

import dynamic from 'next/dynamic';

// Import other sections with dynamic loading
const MissionSection = dynamic(() => import('./MissionSection'), { ssr: false });
const PhilosophySection = dynamic(() => import('./PhilosophySection'), { ssr: false });
const CareerPathSection = dynamic(() => import('./CareerPathSection'), { ssr: false });
const DepartmentsSection = dynamic(() => import('./DepartmentsSection'), { ssr: false });
const JobListingsSection = dynamic(() => import('./JobListingsSection'), { ssr: false });
const ApplySection = dynamic(() => import('./ApplySection'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

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
