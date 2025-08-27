'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const inter = Inter({ subsets: ['latin'] });

const AdvisoryPage = () => {
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
          type: 'bar',
          data: {
            labels: ['Legal & Compliance', 'Financial Advisory', 'Regulatory Guidance', 'Strategic Advisory'],
            datasets: [{
              label: 'Focus Area',
              data: [90, 85, 80, 70],
              backgroundColor: [
                'rgba(160, 132, 102, 0.8)',
                'rgba(197, 164, 126, 0.8)',
                'rgba(233, 216, 199, 0.8)',
                'rgba(248, 245, 241, 0.9)'
              ],
              borderColor: [
                'rgb(160, 132, 102)',
                'rgb(197, 164, 126)',
                'rgb(233, 216, 199)',
                'rgb(200, 200, 200)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Our Advisory Practice Areas',
                font: { size: 18 }
              }
            },
            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  display: false
                }
              },
              y: {
                grid: {
                  color: 'rgba(0, 0, 0, 0.05)'
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
      title: 'Senior Legal Consultant',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      applyLink: 'https://sites.google.com/view/rig-talent/advisory/legal-consultant',
      isKnowMore: true
    },
    {
      title: 'Business Strategy Consultant',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      applyLink: 'https://sites.google.com/view/rig-talent/advisory/business-strategy-consultant',
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Become a Trusted Advisor</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Advisory Department to guide businesses through their most critical financial, legal, and regulatory challenges.
            </p>
          </div>
        </section>

        {/* Mandate Section */}
        <section id="mandate" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mandate: Clarity in Complexity</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We serve as the essential partner for businesses facing high-stakes decisions, providing expert guidance that ensures compliance, mitigates risk, and unlocks value.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Financial Advisory',
                      description: 'Guiding clients through investment decisions, startup funding, valuation, and complex financial planning.'
                    },
                    {
                      title: 'Legal & Regulatory Advisory',
                      description: 'Navigating the complexities of corporate law, ROC compliance, and regulatory frameworks from SEBI, RBI, and IRDA.'
                    },
                    {
                      title: 'Strategic Guidance',
                      description: 'Providing high-level advice on business structuring, risk management, and long-term strategic alignment.'
                    }
                  ].map((service, index) => (
                    <div key={index} className="advisory-card bg-white p-6 rounded-lg shadow-sm border-l-4 border-transparent hover:border-[#C5A47E] hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chart-container">
                <canvas ref={chartRef} />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Advisory in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We provide the critical insights that allow businesses to operate with confidence. Here's how we helped a FinTech startup launch successfully.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Navigating the Regulatory Maze for a FinTech Innovator</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: &quot;PaySwift&quot; Technologies</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">
                    PaySwift had a groundbreaking payment gateway product but was unprepared for the complex web of RBI regulations, data privacy laws, and licensing requirements needed to operate legally in India.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">
                    Our advisory team created a comprehensive compliance roadmap. We guided them through the entire licensing process, drafted their data privacy policies to be compliant with Indian law, and structured their corporate entity for investment readiness.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">
                  PaySwift successfully secured all necessary regulatory approvals and launched their product on schedule, avoiding costly delays and potential legal penalties. Our guidance gave their investors the confidence to proceed with a crucial seed funding round.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our Advisory Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Build a career based on expertise, influence, and integrity, guiding the future of Indian enterprise.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Become a Subject Matter Expert',
                  description: 'Develop deep, specialized knowledge in high-demand areas of financial, legal, and regulatory compliance.'
                },
                {
                  title: 'Influence Key Decisions',
                  description: 'Your advice will directly impact the strategic decisions of our clients, from startup founders to established executives.'
                },
                {
                  title: 'Operate at the Highest Levels',
                  description: 'Engage with complex, intellectually stimulating challenges that define the success and failure of modern businesses.'
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
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Advisory</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you have a passion for detail and a mind for strategy, find your next role with us.
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
                      href={job.applyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#3A3A3A] text-white py-2 px-6 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
                    >
                      {job.isKnowMore ? 'Know More' : 'Apply Now'}
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Advisory department. Please check back later.</p>
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
        .advisory-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default AdvisoryPage;
