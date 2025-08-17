import { ArrowRight, BarChart2, Lightbulb, Shield, Users, Globe, Target } from "lucide-react"
import Link from "next/link"

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(86deg, rgb(129, 127, 219) 0%, rgb(11, 88, 212) 0%, rgb(237, 240, 240) 100%)' }}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-6">
              About RIG Global Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Shaping the future of business through <span className="text-blue-200">innovation</span> and <span className="text-blue-200">excellence</span>
            </h1>
            <p className="text-xl text-blue-100/90 mb-8 max-w-2xl">
              Empowering organizations worldwide with strategic insights and transformative solutions since 2010.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block text-blue-600 font-medium">WHO WE ARE</span>
              <h2 className="text-4xl font-bold text-gray-900">Leading the way in business transformation</h2>
              <div className="h-1 w-20 bg-blue-600"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                RIG Global Solutions is a premier consulting firm dedicated to helping businesses navigate the complexities of the digital age. 
                With over a decade of experience, we've partnered with organizations across various industries to turn their strategic visions into reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of seasoned experts combines deep industry knowledge with innovative thinking to deliver exceptional, sustainable results that drive growth and create lasting impact.
              </p>
              <div className="pt-4">
                <Link href="/services" className="inline-flex items-center text-blue-600 font-medium group">
                  Explore our services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-100">
              <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-blue-50/90">
                      To empower organizations to achieve sustainable growth through innovative solutions, strategic insights, 
                      and operational excellence while maintaining the highest standards of integrity and social responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3">OUR VALUES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guiding principles that define us</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
                title: 'Excellence',
                description: 'We strive for the highest quality in everything we do, delivering exceptional results that exceed expectations.'
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
                title: 'Innovation',
                description: 'We embrace creativity and forward-thinking solutions to solve complex business challenges.'
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and the highest ethical standards.'
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.'
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: 'Sustainability',
                description: 'We are committed to responsible business practices that benefit our clients, communities, and the planet.'
              },
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: 'Client Focus',
                description: 'Your success is our top priority, and we\'re dedicated to delivering value at every step.'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-blue-100 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how RIG Global Solutions can help your organization achieve its full potential. 
              Our team is ready to discuss your unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
