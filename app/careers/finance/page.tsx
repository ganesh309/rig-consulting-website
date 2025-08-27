'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Link from 'next/link';
import Head from 'next/head';

type Job = {
  title: string;
  level: string;
  type: string;
  location: string;
  applyUrl: string;
  detailsUrl?: string;
};

export default function FinanceCareersPage() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !chartRef.current) return;

    // Clean up previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Create the chart
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Business Services', 'Personal Services', 'Investment & Advisory', 'Legal & Compliance'],
        datasets: [{
          label: 'Service Focus',
          data: [40, 25, 20, 15],
          backgroundColor: ['#A08466', '#C5A47E', '#E9D8C7', '#F8F5F1'],
          borderColor: '#FDFBF8',
          borderWidth: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Our Financial Service Portfolio',
            font: { size: 18 }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const jobs: Job[] = [
    {
      title: 'Financial Analyst',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      applyUrl: 'https://forms.gle/bHxCRrtxVYRxoYaG7',
      detailsUrl: 'https://sites.google.com/view/rig-talent/finance/fa'
    },
    // Add more finance-related jobs as needed
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-gray-800">
      <Head>
        <title>Finance Department Careers | RIG Global Solutions</title>
        <meta name="description" content="Join our Finance Department and help drive financial excellence and strategic growth for our clients." />
      </Head>

      <header id="navbar" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">RIG Global Solutions</Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-28 bg-[#F8F5F1]">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Join Our Finance Department
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Drive financial excellence and strategic growth for our clients, from individual entrepreneurs to established businesses.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Do</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our Finance Department provides a comprehensive suite of services, acting as a strategic partner for our clients' financial health and success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full max-w-md mx-auto h-80">
                <canvas ref={chartRef}></canvas>
              </div>
              <div>
                <div className="space-y-6">
                  <ServiceCard 
                    title="Personal Financial Services"
                    description="Goal-based planning, retirement, credit advisory, and tax support for individuals and freelancers."
                  />
                  <ServiceCard 
                    title="Business Financial Services"
                    description="Virtual CFO services, accounting, business taxation, and working capital advisory for companies."
                  />
                  <ServiceCard 
                    title="Investment & Advisory"
                    description="Mutual funds distribution, stock market advisory, startup funding, and real estate investment guidance."
                  />
                  <ServiceCard 
                    title="Legal & Compliance"
                    description="Company registration, ROC compliance, and regulatory licensing to ensure businesses operate smoothly."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Impact in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We translate complex financial challenges into clear, actionable solutions. Here's a look at how we help our clients thrive.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800">Case Study: Empowering a Freelance Graphic Designer</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: Alex Sharma</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">As a new freelancer, Alex was overwhelmed by tax obligations, credit management for business growth, and separating personal vs. business finances, leading to financial stress.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">Alex subscribed to our "Financial Services - Starter" tier. We provided personalized tax advisory, a clear strategy for building credit, and tools for effective budgeting and expense tracking.</p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">Alex gained financial clarity and confidence, allowing him to focus on his creative work. He successfully filed his taxes, improved his credit score, and established a sustainable budget, setting his business up for long-term success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Join Our Finance Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Be part of a team that's at the heart of our clients' success and our nation's growth story.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Direct Client Impact</h3>
                <p className="text-gray-600">Work directly with a diverse range of clients, providing tangible solutions that help them achieve their financial goals.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Holistic Skill Development</h3>
                <p className="text-gray-600">Gain exposure to accounting, taxation, investment advisory, and compliance, building a comprehensive financial skill set.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Drive National Growth</h3>
                <p className="text-gray-600">Our work with MSMEs and startups directly supports the 'Make in India' mission, contributing to a stronger national economy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="openings" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Open Roles in Finance</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to make an impact? Your journey in finance starts here.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {jobs.length > 0 ? (
                jobs.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))
              ) : (
                <p className="text-center text-gray-600">There are currently no open positions in the Finance department. Please check back later.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border-l-4 border-[#E9D8C7] hover:border-[#C5A47E] hover:shadow-md transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C5A47E] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.level}</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.type}</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.location}</span>
        </div>
      </div>
      {job.detailsUrl ? (
        <Link 
          href={job.detailsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3A3A3A] text-white py-2 px-4 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
        >
          Know More
        </Link>
      ) : (
        <Link 
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3A3A3A] text-white py-2 px-4 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
        >
          Apply Now
        </Link>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">RIG Global Solutions</h3>
            <p className="text-sm">Empowering Solutions—Strategically, Sustainably, Globally.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/careers" className="hover:text-white">Main Careers Page</Link></li>
              <li><Link href="/careers" className="hover:text-white">All Openings</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:talent@rigfinancialservices.com" className="hover:text-white">talent@rigfinancialservices.com</a></li>
              <li>Phone: <a href="tel:+918617715655" className="hover:text-white">+91 86177 15655</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <a href="https://www.linkedin.com/company/rig-global-solutions/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white">
              <span aria-hidden="true">in</span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RIG Global Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
