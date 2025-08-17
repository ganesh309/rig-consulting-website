import { ArrowRight, BarChart2, Cpu, Database, Lock, Server, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: 'Strategy Consulting',
      description: 'Comprehensive business strategy development and implementation planning to drive sustainable growth and competitive advantage.',
      icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
      features: ['Market Analysis', 'Business Planning', 'Growth Strategy', 'Performance Optimization']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations and customer experiences.',
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      features: ['Process Automation', 'Digital Roadmapping', 'Change Management', 'Customer Experience']
    },
    {
      title: 'Technology Solutions',
      description: 'Cutting-edge technology implementation and integration services tailored to your business needs.',
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      features: ['System Integration', 'IT Consulting', 'Software Development', 'Infrastructure']
    },
    {
      title: 'Data Analytics',
      description: 'Data-driven insights and business intelligence solutions to power your decision-making.',
      icon: <Database className="h-8 w-8 text-blue-600" />,
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Reporting']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions to support your business growth.',
      icon: <Server className="h-8 w-8 text-blue-600" />,
      features: ['Cloud Migration', 'Hybrid Solutions', 'Managed Services', 'DevOps']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      features: ['Risk Assessment', 'Security Audits', 'Threat Protection', 'Compliance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(86deg, rgb(129, 127, 219) 0%, rgb(11, 88, 212) 0%, rgb(237, 240, 240) 100%)' }}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-6">
              OUR EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transformative <span className="text-blue-200">Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto">
              Comprehensive services designed to solve your most complex business challenges and drive sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3">OUR SERVICES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Business Solutions</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you navigate the complexities of digital transformation and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Started Today
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
