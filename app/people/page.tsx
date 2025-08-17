import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 20+ years of industry experience driving digital transformation for Fortune 500 companies.',
    image: '/placeholder-avatar.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Sarah Williams',
    role: 'Chief Technology Officer',
    bio: 'Technology strategist and innovation expert with a passion for building scalable solutions.',
    image: '/placeholder-avatar.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Head of Consulting',
    bio: 'Specializes in digital transformation strategies that deliver measurable business impact.',
    image: '/placeholder-avatar.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Operations',
    bio: 'Operations excellence leader focused on process optimization and efficiency.',
    image: '/placeholder-avatar.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Lead Architect',
    bio: 'Enterprise solutions expert with deep expertise in system architecture and cloud technologies.',
    image: '/placeholder-avatar.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Priya Patel',
    role: 'Head of Client Success',
    bio: 'Dedicated to ensuring client satisfaction and delivering exceptional value through strategic partnerships.',
    image: '/placeholder-avatar.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  }
];

export default function PeoplePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(86deg, rgb(129, 127, 219) 0%, rgb(11, 88, 212) 0%, rgb(237, 240, 240) 100%)' }}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-6">
              OUR TEAM
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Meet Our <span className="text-blue-200">Leadership</span> Team
            </h1>
            <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto">
              The brilliant minds behind RIG Global Solutions, dedicated to driving innovation and delivering exceptional results.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3">OUR EXPERTS</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Leaders & Innovators</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                  <div className="relative z-10 w-32 h-32 rounded-full bg-white p-1 shadow-inner">
                    <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-4xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex space-x-3">
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                    <Link 
                      href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                    >
                      View Profile
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Growing Team</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate, talented individuals to join our team and help shape the future of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/careers" 
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Open Positions
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
