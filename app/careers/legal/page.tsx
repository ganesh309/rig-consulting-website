'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const inter = Inter({ subsets: ['latin'] });

const LegalPage = () => {
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
          type: 'pie',
          data: {
            labels: ['Contract Management', 'Regulatory Compliance', 'Corporate Governance'],
            datasets: [{
              label: 'Legal Department Focus',
              data: [45, 35, 20],
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
                text: 'Our Legal Practice Distribution',
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
      title: 'Senior Legal Consultant',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/advisory/legal-consultant',
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Uphold Integrity, Drive Business</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Legal Department and serve as the strategic backbone that enables our company and our clients to operate with confidence and compliance.
            </p>
          </div>
        </section>

        {/* Our Role Section */}
        <section id="our-role" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Guardians of Governance</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our Legal Department is responsible for all aspects of corporate law, contract management, and regulatory compliance, ensuring the firm operates on a foundation of legal excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  {[
                    {
                      title: 'Contracts & Agreements',
                      description: 'Drafting, reviewing, and negotiating all client, vendor, and partnership contracts to mitigate risk and protect company interests.'
                    },
                    {
                      title: 'Compliance & Regulatory Affairs',
                      description: 'Ensuring adherence to all corporate laws, including ROC filings and compliance with industry-specific regulations.'
                    },
                    {
                      title: 'Corporate Law & Governance',
                      description: 'Advising on matters of company structuring, intellectual property, and internal governance policies.'
                    }
                  ].map((service, index) => (
                    <div key={index} className="legal-card bg-white p-6 rounded-lg border-b-4 border-[#E9D8C7] hover:border-[#C5A47E] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold">Legal Strategy in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our legal guidance is a critical component of our clients' success. Here's how we enabled a startup to secure its first major enterprise contract.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: De-risking a High-Value Partnership</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: &quot;Innovate AI&quot; Tech Startup</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">
                    Innovate AI was on the verge of signing a transformative deal with a large corporation. However, the corporate client's 100-page contract was filled with complex clauses on intellectual property, liability, and data security that the startup was ill-equipped to handle.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">
                    Our legal team conducted a thorough review of the contract, identifying high-risk clauses and areas of ambiguity. We then drafted clear, protective amendments and led the negotiation process on behalf of Innovate AI, ensuring their IP was protected and their liability was reasonably limited.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">
                  The contract was successfully signed with terms that were fair and safe for the startup. Our legal intervention not only secured the deal but also established a strong legal foundation for Innovate AI's future enterprise engagements, preventing potential disputes and protecting their core assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our Legal Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Go beyond traditional legal practice and become a strategic business partner.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Be a Business Enabler',
                  description: 'Our legal team doesn\'t just say "no." You\'ll learn to find creative, compliant solutions that help the business achieve its goals.'
                },
                {
                  title: 'Gain Diverse Experience',
                  description: 'Work on a wide variety of legal matters, from tech contracts and IP to corporate compliance and client advisory, all under one roof.'
                },
                {
                  title: 'Operate with Influence',
                  description: 'As an in-house counsel at a fast-growing firm, your advice will be critical to strategic decisions made at the highest levels.'
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
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Legal</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you have a sharp legal mind and a passion for business, find your role here.
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
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Legal department. Please check back later.</p>
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
        .legal-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default LegalPage;
