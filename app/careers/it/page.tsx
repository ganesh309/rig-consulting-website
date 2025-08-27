'use client';

import Link from 'next/link';
import PieChart from '@/components/ui/PieChart';

export default function ITPage() {
  const chartData = {
    labels: ['System Admin & Support', 'Digital Solutions Dev', 'Cybersecurity'],
    datasets: [{
      label: 'IT Department Focus',
      data: [50, 30, 20],
      backgroundColor: [
        '#A08466',
        '#C5A47E',
        '#E9D8C7'
      ],
      borderColor: '#FDFBF8',
      borderWidth: 4
    }]
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Our IT Service Distribution',
        font: { size: 18 }
      }
    }
  };

  interface Job {
    title: string;
    level: string;
    type: string;
    location: string;
    knowMoreLink: string;
    isKnowMore: boolean;
  }

  const itJobs: Job[] = [
    {
      title: 'Web Developer (Frontend & Backend)',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/it/web-developer',
      isKnowMore: true
    },
    {
      title: 'CRM/ System Specialist',
      level: 'Trainee',
      type: 'Virtual',
      location: 'Remote',
      knowMoreLink: 'https://sites.google.com/view/rig-talent/it/crm-system-specialist',
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Build the Digital Backbone of Business</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our IT Department and be the architect of the systems and digital solutions that power our firm and drive our clients' success.
            </p>
          </div>
        </section>

        {/* Our Role Section */}
        <section id="our-role" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Foundation of Innovation</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our IT Department is responsible for all system administration, digital infrastructure, and technology solutions, ensuring seamless, secure, and efficient operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] max-w-[400px] mx-auto">
                <PieChart data={chartData} options={chartOptions} />
              </div>
              <div className="space-y-6">
                <div className="it-card bg-white p-6 rounded-lg border-b-4 border-[#E9D8C7] hover:border-[#C5A47E] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">System Administration & Support</h3>
                  <p className="mt-2 text-gray-600">
                    Managing all internal and client-facing IT infrastructure, from servers and networks to end-user support.
                  </p>
                </div>
                <div className="it-card bg-white p-6 rounded-lg border-b-4 border-[#E9D8C7] hover:border-[#C5A47E] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">Digital Solutions & Development</h3>
                  <p className="mt-2 text-gray-600">
                    Developing and deploying custom digital solutions, including web applications and CRM systems, to meet business needs.
                  </p>
                </div>
                <div className="it-card bg-white p-6 rounded-lg border-b-4 border-[#E9D8C7] hover:border-[#C5A47E] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">Cybersecurity & Compliance</h3>
                  <p className="mt-2 text-gray-600">
                    Implementing robust security measures and ensuring all systems are compliant with data protection regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">IT in Action</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We build solutions that enable modern business. Here's how we empowered a client to transition to a fully secure, remote work environment.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">Case Study: Enabling a Seamless Transition to Remote Work</h3>
              <p className="text-lg text-[#C5A47E] font-semibold mt-1">Client: "Growth Advisory Partners"</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">
                    Growth Advisory Partners, a mid-sized consulting firm, needed to shift its entire 100-person team to a remote work model within two weeks. They lacked the necessary IT infrastructure, security protocols, and collaboration tools to do so effectively and securely.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Our Solution</h4>
                  <p className="text-gray-600">
                    Our IT team designed and deployed a comprehensive remote work solution. This included setting up a secure VPN for remote access, migrating key data to a cloud server for accessibility, and integrating collaboration tools like Microsoft Teams. We also conducted virtual training sessions for all employees on the new systems and cybersecurity best practices.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-[#F8F5F1] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">The Result</h4>
                <p className="text-gray-600">
                  The client transitioned to a fully remote model with zero downtime. The new infrastructure improved operational efficiency and collaboration, and the enhanced security measures protected sensitive client data. The project was completed on time and within budget, enabling the client to continue their business operations without interruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Join Our IT Team?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Move beyond support tickets and become a strategic technology partner.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">Work with Modern Tech Stacks</h3>
                <p className="text-gray-600">
                  Gain hands-on experience with cloud infrastructure (AWS, Azure), modern development frameworks, and enterprise-level CRM systems.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">Solve Real Business Problems</h3>
                <p className="text-gray-600">
                  Your work isn't just about maintaining systems. You'll build and implement technology solutions that directly solve client challenges.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">Be a Driver of Efficiency</h3>
                <p className="text-gray-600">
                  You will be at the core of our firm's operations, with the power to automate processes and improve productivity across all 10 departments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="openings" className="py-20 bg-[#F8F5F1]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Open Roles in IT</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                If you are a problem-solver with a passion for technology, find your next challenge here.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {itJobs.length > 0 ? (
                itJobs.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C5A47E] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{job.level}</span>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{job.type}</span>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{job.location}</span>
                      </div>
                    </div>
                    <a
                      href={job.knowMoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3A3A3A] text-white py-2 px-4 rounded-lg hover:bg-[#505050] transition-colors whitespace-nowrap w-full md:w-auto text-center"
                    >
                      {job.isKnowMore ? 'Know More' : 'Apply Now'}
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">There are currently no open positions in the IT department. Please check back later.</p>
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
                <li><a href="https://sites.google.com/view/rig-talent/home" className="hover:text-white transition-colors">Main Careers Page</a></li>
                <li><a href="https://sites.google.com/view/rig-talent/home" className="hover:text-white transition-colors">All Openings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: <a href="mailto:talent@rigfinancialservices.com" className="hover:text-white transition-colors">talent@rigfinancialservices.com</a></li>
                <li>Phone: <a href="tel:+918617715655" className="hover:text-white transition-colors">+91 86177 15655</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <a 
                href="https://www.linkedin.com/company/rig-global-solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-2xl hover:text-white transition-colors"
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
    </div>
  );
}
