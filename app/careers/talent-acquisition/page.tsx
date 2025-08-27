'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const inter = Inter({ subsets: ['latin'] });

const TalentAcquisitionPage = () => {
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
          type: 'polarArea',
          data: {
            labels: ['Recruitment', 'Onboarding', 'Employee Engagement', 'Performance Management', 'Culture Initiatives'],
            datasets: [{
              label: 'HR Focus Areas',
              data: [40, 20, 20, 10, 10],
              backgroundColor: [
                'rgba(160, 132, 102, 0.7)',
                'rgba(197, 164, 126, 0.7)',
                'rgba(233, 216, 199, 0.7)',
                'rgba(120, 120, 120, 0.6)',
                'rgba(248, 245, 241, 0.8)'
              ],
              borderColor: '#3A3A3A',
              borderWidth: 1
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
                text: 'Our HR Department Functions',
                font: { size: 18 }
              }
            },
            scales: {
              r: {
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
      title: 'HR and Talent Specialist',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/talent-acquisition-hr/hr-talent-specialist',
      isKnowMore: true
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Build Our Most Valuable Asset: Our People</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Talent Acquisition team and be the architect of our culture, dedicated to hiring, nurturing, and empowering the next generation of leaders.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Heartbeat of the Organization</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our HR department manages the entire employee lifecycle, from first contact to career development, ensuring RIG Global Solutions is an exceptional place to work and grow.
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
                      title: 'Hiring & Recruitment',
                      description: 'Managing the end-to-end recruitment cycle to attract and hire the best emerging talent in India.'
                    },
                    {
                      title: 'Onboarding & Employee Management',
                      description: 'Creating a seamless onboarding experience and managing all aspects of employee relations and performance.'
                    },
                    {
                      title: 'Culture & Engagement',
                      description: 'Driving initiatives that foster our collaborative culture, from team-building events to our mentorship programs.'
                    }
                  ].map((service, index) => (
                    <div key={index} className="hr-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-transparent hover:border-[#C5A47E] hover:-translate-y-1">
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
              <h2 className="text-3xl md:text-4xl font-bold">HR in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We build the teams that build the future. Here's how we successfully scaled our internship program to build a robust talent pipeline.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Scaling Our National Internship Program</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Project: Youth Empowerment Initiative</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">To fulfill our mission of youth empowerment, we needed to rapidly scale our internship program from a small cohort to a national initiative, recruiting from diverse academic backgrounds across the country without sacrificing quality or candidate experience.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">The HR team designed a streamlined, multi-stage virtual recruitment process. We partnered with university career services, ran targeted social media campaigns, and developed a structured interview framework to assess both technical skills and cultural fit. We also created a comprehensive virtual onboarding program to ensure a consistent experience for all new interns.</p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">We successfully recruited and onboarded over 50 interns in a single quarter, a 500% increase from the previous year. The program achieved a 95% satisfaction rate from participants, and over 80% of high-performing interns were extended Pre-Placement Offers, creating a strong, pre-trained pipeline of talent for our full-time Trainee roles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our HR Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Be more than an HR manager. Be a culture-builder, a talent-spotter, and a career-shaper.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Shape the Future Workforce',
                  description: 'You will be at the forefront of our youth empowerment mission, designing programs that launch hundreds of careers.'
                },
                {
                  title: 'Drive Strategic Initiatives',
                  description: 'This isn\'t just an administrative role. You\'ll lead strategic projects, from performance management systems to employee engagement.'
                },
                {
                  title: 'Be a Champion of Culture',
                  description: 'You will be the guardian of our unique, growth-oriented culture, ensuring RIG remains a top destination for emerging talent.'
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
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in Talent Acquisition</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you have a passion for people and a talent for building great teams, we want to hear from you.
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
                <p className="text-center text-gray-600 py-8">There are currently no open positions in the Talent Acquisition department. Please check back later.</p>
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
        .hr-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default TalentAcquisitionPage;
