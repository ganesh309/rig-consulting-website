import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

'use client';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Consultancy Department Careers | RIG Global Solutions',
  description: 'Join our Consultancy Department and solve the most complex challenges for India\'s emerging and established enterprises.',
};

const ConsultancyPage = () => {
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
            labels: ['Strategic Planning', 'Market Entry', 'Process Optimization', 'Digital Transformation', 'Change Management', 'Data Analysis'],
            datasets: [{
              label: 'Core Competencies',
              data: [90, 85, 75, 80, 70, 95],
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
                text: 'Our Consultancy Focus Areas',
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

  const jobs = [
    {
      title: 'Business Strategy Consultant',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      applyLink: 'https://sites.google.com/view/rig-talent/consultancy/business-strategy-consultant',
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Shape the Future of Business</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Consultancy Department and solve the most complex challenges for India&apos;s emerging and established enterprises.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Core Expertise</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end strategic guidance, helping businesses navigate uncertainty, seize opportunities, and achieve sustainable growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Strategic Planning',
                      description: 'Developing long-term roadmaps, business model design, and vision setting.'
                    },
                    {
                      title: 'Market Entry',
                      description: 'Crafting go-to-market strategies and conducting deep competitor analysis.'
                    },
                    {
                      title: 'Operational Excellence',
                      description: 'Optimizing business processes, supply chains, and organizational structure.'
                    },
                    {
                      title: 'Digital Transformation',
                      description: 'Integrating technology to enhance efficiency and create new revenue streams.'
                    }
                  ].map((service, index) => (
                    <div key={index} className="competency-card bg-white p-6 rounded-lg border-b-4 border-[#E9D8C7] hover:border-[#C5A47E] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold">Strategy in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We partner with clients to turn ambition into reality. Here&apos;s how we helped a local manufacturer go national.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Scaling a Sustainable Crafts Enterprise</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: &quot;Desi Weaves&quot; Handlooms</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">
                    Desi Weaves had a strong local brand but struggled with inefficient supply chains, inconsistent quality control, and no clear strategy for reaching a national customer base.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">
                    Our team conducted a full operational audit and developed a 3-year strategic roadmap. This included digitizing their inventory, optimizing logistics, and creating a targeted digital marketing and e-commerce strategy.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">
                  Within 18 months, Desi Weaves reduced operational costs by 20%, increased production capacity by 40%, and successfully launched their online store, reaching customers in over 15 states and supporting the &apos;Make in India&apos; initiative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our Consultancy Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Become a trusted advisor and a problem-solver at the forefront of business innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Solve Diverse Challenges',
                  description: 'Tackle a new business problem every day. Our projects span multiple industries, from tech startups to manufacturing giants.'
                },
                {
                  title: 'Develop a Strategic Mindset',
                  description: 'Learn to think like a CEO. You\'ll gain unparalleled exposure to high-level business strategy and data-driven decision-making.'
                },
                {
                  title: 'Accelerate Your Learning',
                  description: 'The steep learning curve in consultancy means you\'ll develop core business skills faster here than anywhere else.'
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
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Consultancy</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to build your strategic toolkit? Find your role below.
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
                    {job.isKnowMore ? (
                      <a 
                        href={job.applyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#3A3A3A] text-white py-2 px-6 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
                      >
                        Know More
                      </a>
                    ) : (
                      <a 
                        href="https://forms.gle/bHxCRrtxVYRxoYaG7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#3A3A3A] text-white py-2 px-6 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
                      >
                        Apply Now
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Consultancy department. Please check back later.</p>
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
        .nav-link {
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #C5A47E;
        }
        .competency-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ConsultancyPage;
