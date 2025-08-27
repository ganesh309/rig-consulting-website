'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const inter = Inter({ subsets: ['latin'] });

const SalesPage = () => {
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
          type: 'line',
          data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
              label: 'Qualified Leads in Pipeline',
              data: [120, 180, 250, 400],
              fill: true,
              borderColor: 'rgb(197, 164, 126)',
              backgroundColor: 'rgba(197, 164, 126, 0.1)',
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Quarterly Sales Pipeline Growth',
                font: { size: 18 }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Number of Qualified Leads'
                }
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
      title: 'Sales Representative',
      level: 'Internship',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/sales/sales-representative-intern',
      isKnowMore: true
    },
    {
      title: 'Client Success Manager',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/sales/client-success-manager',
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Drive the Engine of Growth</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Sales Department and be on the front lines of our expansion, building relationships and delivering value to clients across India.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Architects of Opportunity</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our Sales Department identifies new opportunities, builds lasting client relationships, and closes the deals that fuel our company's growth and success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  {[
                    {
                      title: 'Client Acquisition & Prospecting',
                      description: 'Identifying and engaging potential clients who can benefit from our diverse portfolio of services.'
                    },
                    {
                      title: 'CRM & Pipeline Management',
                      description: 'Meticulously managing the sales pipeline from lead to close using advanced CRM tools.'
                    },
                    {
                      title: 'Consultative Selling & Closing',
                      description: 'Understanding client needs and positioning RIG Global Solutions as the ideal strategic partner to help them achieve their goals.'
                    }
                  ].map((service, index) => (
                    <div key={index} className="sales-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-transparent hover:border-[#C5A47E] hover:-translate-y-1">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chart-container order-1 md:order-2">
                <canvas ref={chartRef} />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Sales in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We build partnerships that create lasting value. Here's how our sales team secured a multi-service contract with a fast-growing manufacturing client.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Forging a Strategic Partnership with an SME Manufacturer</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: &quot;Precision Parts Inc.&quot;</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">Precision Parts Inc. was expanding rapidly but their back-office operations were struggling to keep up. They were facing challenges with financial reporting, legal compliance, and marketing, but were engaging separate, uncoordinated vendors for each.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">Our sales representative took a consultative approach. Instead of selling a single service, they conducted a deep-dive needs analysis and identified multiple pain points. They then collaborated with our Finance, Legal, and Marketing departments to propose a single, integrated solution that addressed all of the client's challenges under one strategic partnership.</p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">The client signed a comprehensive, long-term retainer that was three times the value of the initial inquiry. This integrated approach not only solved the client's immediate problems but also positioned RIG Global Solutions as their trusted, long-term growth partner, leading to significant recurring revenue and a strong client testimonial.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our Sales Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Build a rewarding career where your performance is directly tied to your success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Uncapped Earning Potential',
                  description: 'With our generous, performance-based incentive structure, your hard work and success are directly reflected in your earnings.'
                },
                {
                  title: 'Sell Solutions, Not Products',
                  description: 'You\'re not just a salesperson; you\'re a consultant. You\'ll learn to sell a diverse portfolio of 10+ high-value services.'
                },
                {
                  title: 'Be a Key Growth Driver',
                  description: 'The sales team is the lifeblood of our company. Your success is the company\'s success, making you a vital part of our growth story.'
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
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Sales</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you are a driven, relationship-focused individual, find your next opportunity with us.
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
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Sales department. Please check back later.</p>
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
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          height: 400px;
          max-height: 50vh;
        }
        .sales-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default SalesPage;
