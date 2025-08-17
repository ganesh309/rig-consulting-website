import { ArrowRight, Briefcase, GraduationCap, Users, Globe, Home, MapPin, Zap } from "lucide-react"
import Link from "next/link"

const careerOpportunities = [
  {
    id: 1,
    title: 'Join Our Team in India',
    description: 'Become part of our collaborative team in India, working on challenging projects that drive real change across industries and communities.',
    icon: <Users className="h-8 w-8 text-blue-600" />,
    features: [
      'Work on meaningful projects with real impact',
      'Experience accelerated professional growth',
      'Be part of an inclusive and diverse workplace',
      'Opportunities across various industries and functions'
    ]
  },
  {
    id: 2,
    title: 'Professional Opportunities',
    description: 'We offer diverse roles for experienced professionals looking to make a difference in their fields.',
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    features: [
      'Consulting roles across multiple industries',
      'Specialist positions in various functions',
      'Leadership development programs',
      'Global mobility opportunities'
    ]
  },
  {
    id: 3,
    title: 'Student Programs',
    description: 'Kickstart your career with our programs designed for students and recent graduates.',
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    features: [
      'Summer internships for penultimate-year students',
      'Full-time opportunities for recent graduates',
      'Specialized tracks in different business areas',
      'Mentorship from industry experts'
    ]
  },
  {
    id: 4,
    title: 'Support Functions',
    description: 'Join our professional teams that keep our organization running smoothly.',
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    features: [
      'Human Resources',
      'Finance and Accounting',
      'Marketing and Communications',
      'IT and Operations'
    ]
  }
];

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'We offer competitive salaries and performance-based bonuses.',
    icon: <Briefcase className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Flexible Work',
    description: 'Work remotely or from our modern offices, with flexible hours.',
    icon: <Home className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Learning & Growth',
    description: 'Annual learning budget and access to professional development resources.',
    icon: <Zap className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Global Opportunities',
    description: 'Work with international teams and clients from around the world.',
    icon: <Globe className="h-8 w-8 text-blue-600" />
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(86deg, rgb(129, 127, 219) 0%, rgb(11, 88, 212) 0%, rgb(237, 240, 240) 100%)' }}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Careers at RIG Global India
            </h1>
            <p className="text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto">
              Join our collaborative team tackling some of the toughest challenges and driving real change across India and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#opportunities"
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Explore Opportunities
              </a>
              <a 
                href="#students"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Student Programs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div id="opportunities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Build Your Career with Us</h2>
            <p className="text-xl text-gray-600">
              With accelerated growth, continuous learning, and an inclusive environment, you'll make a real impact on industries and communities across India and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {careerOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  {opportunity.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <ul className="space-y-2 mt-4">
                  {opportunity.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Programs */}
      <div id="students" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Paths for Students</h2>
              <p className="text-xl text-gray-600">
                Whether you're finishing your undergraduate degree or studying at the postgraduate level, you won't just continue learning at RIG Global—you'll grow faster here than anywhere else.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Internship Programs</h3>
                  <p className="text-gray-600 mb-6">
                    Our internship programs provide hands-on experience, mentorship, and the opportunity to work on real projects that matter.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Summer internships for penultimate-year students</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>6-month industry projects</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mentorship from industry experts</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Campus Recruitment</h3>
                  <p className="text-gray-600 mb-6">
                    We partner with leading educational institutions to identify and recruit top talent through campus placement programs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>On-campus recruitment drives</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Case competitions and hackathons</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pre-placement talks and workshops</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Learn More About Student Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't See the Perfect Role?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Our Team
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
