import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

'use client';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marketing Department Careers | RIG Global Solutions',
  description: 'Build brands and drive growth by joining our Marketing Department. Become the storyteller and strategist behind our clients\' success and our company\'s expansion.',
};

const MarketingPage = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Digital Campaigns', 'Content & Branding', 'Lead Generation'],
            datasets: [{
              label: 'Marketing Focus',
              data: [40, 35, 25],
              backgroundColor: [
                '#A08466',
                '#C5A47E',
                '#E9D8C7'
              ],
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
                text: 'Our Marketing Strategy Focus',
                font: { size: 18 }
              }
            }
          }
        });
      }
    }

    // Cleanup function to destroy chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const jobs = [
    {
      title: 'Marketing & Branding Specialist',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/marketing/marketing-branding-specialist',
      isKnowMore: true
    },
    {
      title: 'Graphic Designer',
      level: 'Internship',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/marketing/graphic-designer-intern',
      isKnowMore: true
    },
    {
      title: 'AI Marketing Content Creator',
      level: 'Internship',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/marketing/ai-content-creator-intern',
      isKnowMore: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-gray-800">
      {/* Header */}
      <header id="navbar" className="sticky top-0 z-50 shadow-sm bg-[#FDFBF8] bg-opacity-80 backdrop-blur-md">
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Build Brands, Drive Growth</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Marketing Department and become the storyteller and strategist behind our clients' success and our company's expansion.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Architects of Connection</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our Marketing Department creates compelling narratives and data-driven strategies to build brand awareness, generate leads, and foster client loyalty.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="chart-container">
                <canvas ref={chartRef} />
              </div>
              <div>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Branding & Content Creation',
                      description: 'Developing strong brand identities, creating engaging content, and managing our corporate narrative.'
                    },
                    {
                      title: 'Digital Marketing & Social Media',
                      description: 'Executing targeted campaigns across all digital channels, including social media, SEO, and email marketing.'
                    },
                    {
                      title: 'Lead Generation & Analytics',
                      description: 'Driving the sales pipeline through strategic lead generation and measuring campaign performance with advanced analytics.'
                    }
                  ].map((service, index) => (
                    <div key={index} className="marketing-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-transparent hover:border-[#C5A47E] hover:-translate-y-1">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Marketing in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We turn insights into influence. Here's how we launched a new B2B tech service and generated a qualified sales pipeline from scratch.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Launching a New IT Outsourcing Service</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: Internal Project for RIG IT Department</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">Our IT department developed a new, comprehensive outsourced IT helpdesk service for small to medium-sized businesses. The service was robust, but there was zero market awareness and no existing sales leads.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">The marketing team developed an integrated launch strategy. We created a targeted LinkedIn campaign aimed at IT decision-makers, published a series of blog posts on the benefits of outsourced IT, and ran social media ads with a free "IT Security Checklist" as a lead magnet to capture contact information.</p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">The 3-month campaign generated over 200 qualified leads for the sales team. The content marketing efforts established RIG as a thought leader in the space, and the targeted ads resulted in a 15% conversion rate from lead to sales meeting, successfully building a strong initial client base for the new service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our Marketing Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Combine your creativity with data-driven strategy to build brands that matter.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Be Both Creative & Analytical',
                  description: 'This isn\'t just a creative role. You\'ll learn to master the full marketing funnel, from brand storytelling to performance analytics.'
                },
                {
                  title: 'Work on Diverse Campaigns',
                  description: 'Promote a wide range of services, from financial advisory to IT solutions, giving you broad B2B and B2C marketing experience.'
                },
                {
                  title: 'See Your Direct Impact on Sales',
                  description: 'Our marketing team works hand-in-hand with sales. You\'ll see a clear line from your campaigns to the company\'s bottom line.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="openings" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Marketing</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you're ready to create campaigns that convert, find your role with us.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {jobs.length > 0 ? (
                jobs.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C5A47E] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.level}</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.type}</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.location}</span>
                      </div>
                    </div>
                    <a 
                      href={job.knowMoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#3A3A3A] text-white py-2 px-6 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
                    >
                      {job.isKnowMore ? 'Know More' : 'Apply Now'}
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Marketing department. Please check back later.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <li><a href="https://sites.google.com/view/rig-talent/home" target="_blank" rel="noopener noreferrer" className="hover:text-white">All Openings</a></li>
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
              <a 
                href="https://www.linkedin.com/company/rig-global-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-white inline-block"
                aria-label="LinkedIn"
              >
                <span aria-hidden="true">in</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} RIG Global Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .chart-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
          height: 400px;
          max-height: 50vh;
        }
        .marketing-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default MarketingPage;
