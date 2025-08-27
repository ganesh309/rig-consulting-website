import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

'use client';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Research & Development Careers | RIG Global Solutions',
  description: 'Discover what\'s next. Join our Research & Development team and be the intelligence that powers our strategy, innovation, and future growth.',
};

const ResearchDevelopmentPage = () => {
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
          type: 'radar',
          data: {
            labels: ['Market Research', 'Policy Analysis', 'New Product Dev.', 'Competitor Intelligence', 'Data Analytics', 'Client Surveys'],
            datasets: [{
              label: 'R&D Activities',
              data: [90, 80, 75, 85, 95, 70],
              fill: true,
              backgroundColor: 'rgba(197, 164, 126, 0.2)',
              borderColor: 'rgb(197, 164, 126)',
              pointBackgroundColor: 'rgb(197, 164, 126)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(197, 164, 126)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              line: {
                borderWidth: 3
              }
            },
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Our R&D Focus Areas',
                font: { size: 18 }
              }
            },
            scales: {
              r: {
                angleLines: {
                  color: 'rgba(0, 0, 0, 0.1)'
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)'
                },
                pointLabels: {
                  font: {
                    size: 12
                  }
                },
                suggestedMin: 0,
                suggestedMax: 100
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

  const jobs: any[] = []; // No current R&D jobs in the provided data

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-gray-800">
      {/* Header */}
      <header id="navbar" className="sticky top-0 z-50 shadow-sm bg-[#FDFBF8] bg-opacity-80 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="text-2xl font-bold">
            <Link href="/">RIG Global Solutions</Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-28 bg-[#F8F5F1]">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Discover What's Next</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Research & Development team and be the intelligence that powers our strategy, innovation, and future growth.
            </p>
          </div>
        </section>

        {/* Our Purpose Section */}
        <section id="our-purpose" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Intelligence Behind the Strategy</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our R&D Department is the firm's think tank, responsible for market intelligence, policy analysis, and new product development that keeps us and our clients ahead of the curve.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  {[
                    {
                      title: 'Market & Sector Intelligence',
                      description: 'Conducting deep primary and secondary research to identify emerging trends, competitive threats, and new market opportunities.'
                    },
                    {
                      title: 'Innovation & Product Development',
                      description: 'Analyzing data and client feedback to support the creation of new, market-ready services and solutions.'
                    },
                    {
                      title: 'Thought Leadership',
                      description: 'Developing whitepapers, case studies, and policy analyses that establish RIG as an industry expert.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="rnd-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-transparent hover:border-[#C5A47E] hover:-translate-y-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold">R&D in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We turn data into direction. Here's how our research into the MSME sector led to the creation of a new, high-demand service line.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Developing a "Virtual CFO" Service for MSMEs</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Project: New Service Innovation</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">While serving our existing clients, we hypothesized that many fast-growing MSMEs lacked access to high-level financial strategy but could not afford a full-time Chief Financial Officer (CFO).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">The R&D team conducted a three-month study, including market surveys and interviews with 50 MSME owners. The research confirmed a significant market gap. Based on this data, the team developed the framework for a "Virtual CFO" service—a flexible, retainer-based model offering strategic financial guidance at an affordable price point.</p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">The Virtual CFO service was launched and became one of our most successful offerings within six months. The data-driven approach ensured the service was perfectly tailored to market needs, creating a new revenue stream for RIG and providing critical support to the growing MSME sector, directly aligning with our national development goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our R&D Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Be the catalyst for innovation and the strategic voice that shapes our future.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Inform High-Level Strategy',
                  description: 'Your research and analysis will directly influence the decisions made by our executive team and our clients.'
                },
                {
                  title: 'Become a Thought Leader',
                  description: 'Develop deep industry expertise and contribute to published reports and whitepapers that shape industry conversations.'
                },
                {
                  title: 'Drive Real Innovation',
                  description: 'This isn\'t theoretical research. Your work will lead to the creation of new, tangible services that solve real-world business problems.'
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
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Research & Development</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you are a curious, analytical thinker who loves to connect the dots, find your place with us.
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
                      href="https://forms.gle/bHxCRrtxVYRxoYaG7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#3A3A3A] text-white py-2 px-6 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
                    >
                      Apply Now
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Research & Development department. Please check back later.</p>
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
          max-width: 450px;
          margin-left: auto;
          margin-right: auto;
          height: 450px;
          max-height: 55vh;
        }
        .rnd-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ResearchDevelopmentPage;
