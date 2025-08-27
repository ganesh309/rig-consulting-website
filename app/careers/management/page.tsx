import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

'use client';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Management Department Careers | RIG Global Solutions',
  description: 'Lead high-impact projects and be the driving force that turns strategy into successful execution across all our client engagements.',
};

const ManagementPage = () => {
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
            labels: ['On-Time Delivery Rate', 'Client Satisfaction Score', 'Budget Adherence', 'Project Success Rate'],
            datasets: [{
              label: 'Performance Metric (%)',
              data: [95, 92, 98, 97],
              backgroundColor: [
                'rgba(160, 132, 102, 0.8)',
                'rgba(197, 164, 126, 0.8)',
                'rgba(233, 216, 199, 0.8)',
                'rgba(120, 120, 120, 0.7)'
              ],
              borderColor: [
                'rgb(160, 132, 102)',
                'rgb(197, 164, 126)',
                'rgb(233, 216, 199)',
                'rgb(120, 120, 120)'
              ],
              borderWidth: 1
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
                text: 'Our Project Management Success Metrics',
                font: { size: 18 }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.label}: ${context.raw}%`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                suggestedMax: 100,
                ticks: {
                  callback: function(value) {
                    return value + '%';
                  }
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
      title: 'Project Manager',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      applyLink: 'https://sites.google.com/view/rig-talent/management/project-manager',
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Lead High-Impact Projects</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Management Department and be the driving force that turns strategy into successful execution across all our client engagements.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Engine of Execution</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our Management Department is the central nervous system of RIG Global Solutions, ensuring seamless project oversight, workflow coordination, and flawless delivery.
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
                      title: 'Project Oversight',
                      description: 'End-to-end management of project lifecycles, from scoping and planning to execution and delivery.'
                    },
                    {
                      title: 'Workflow Coordination',
                      description: 'Acting as the bridge between our 10 departments to ensure resources are allocated effectively and timelines are met.'
                    },
                    {
                      title: 'Client Relationship Management',
                      description: 'Serving as the primary point of contact for clients, ensuring clear communication and satisfaction.'
                    }
                  ].map((service, index) => (
                    <div key={index} className="management-card bg-white p-6 rounded-lg border-b-4 border-[#E9D8C7] hover:border-[#C5A47E] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold">Management in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We don't just manage projects; we guarantee their success. Here&apos;s how we orchestrated a complex, multi-departmental digital transformation.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Delivering a Unified E-Commerce Platform</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: &quot;Heritage Foods&quot; FMCG</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">
                    Heritage Foods needed to launch a new e-commerce platform, a project that required seamless collaboration between our IT, Marketing, Sales, and Legal departments. The timeline was aggressive, and the risk of silos and miscommunication was high.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">
                    A dedicated Project Manager from our Management department was assigned as the single point of accountability. They developed a detailed project plan, established clear communication channels, and ran daily stand-ups to coordinate efforts across all four departments, ensuring everyone was aligned and on track.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">
                  The platform was delivered on time and 10% under budget. The coordinated approach ensured the final product was technically robust, legally compliant, and perfectly aligned with the client's marketing and sales goals, leading to a highly successful launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our Management Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Develop into a true business leader by mastering the art and science of execution.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Gain 360° Business View',
                  description: 'As a project manager, you\'ll work with every department, giving you a unique, holistic understanding of how a business operates.'
                },
                {
                  title: 'Become a Master Communicator',
                  description: 'Hone your skills in negotiation, client relations, and team leadership—essential abilities for any future executive.'
                },
                {
                  title: 'Deliver Tangible Results',
                  description: 'This is a role where you see the direct impact of your work every day, taking projects from idea to successful completion.'
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
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Management</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you are a natural organizer and leader, we have a role for you.
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
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Management department. Please check back later.</p>
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
        .management-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ManagementPage;
