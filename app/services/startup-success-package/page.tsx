import { ArrowRight, Check, Zap, Target, Shield, Palette, Cpu, FileText, Users, Clock, Rocket, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function StartupSuccessPackage() {
  const keyDeliverables = [
    "Personalized 1:1 consultation call for startup strategy and roadmap",
    "Business advisory to define clear business structure",
    "Legal and compliance setup including MSME, GST, PAN registration, and bank account opening",
    "Foundational legal documents for smooth operations",
    "Branding support with brand name suggestions, professional logo, and brand identity kit",
    "1-page website development with domain registration and professional email setup",
    "Founder introduction deck and business proposal templates",
    "Guided handholding with step-by-step support and regular progress updates",
    "Efficient 4-week delivery timeline ensuring launch readiness"
  ]

  const serviceSections = [
    {
      title: "Business Advisory & Strategy",
      description: "Our expert consultants provide personalized 1:1 consultation calls tailored to understand your unique vision and challenges. We guide you through a comprehensive startup roadmap session designed to define your business structure, strategic priorities, and growth direction.",
      benefits: [
        "Personalized 1:1 consultation calls",
        "Comprehensive business roadmap",
        "Market analysis and positioning",
        "Growth strategy development"
      ],
      icon: <Target className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Branding & Digital Presence",
      description: "We help startups create a powerful and memorable brand identity that stands out in a crowded market. Our expert team provides unique brand name suggestions and crafts a professional logo and comprehensive brand identity kit.",
      benefits: [
        "Brand name suggestions",
        "Professional logo design",
        "Brand identity kit",
        "1-page website development",
        "Domain registration",
        "Professional email setup"
      ],
      icon: <Palette className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Legal & Compliance Setup",
      description: "We provide comprehensive assistance to ensure your startup meets all essential legal and regulatory requirements right from the start. Our services include MSME registration, GST and PAN application, and setting up a dedicated business bank account.",
      benefits: [
        "MSME registration",
        "GST & PAN application",
        "Business bank account setup",
        "Foundational legal documents",
        "Compliance guidance"
      ],
      icon: <Shield className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Pitch-Ready Founder's Kit & Support",
      description: "We equip you with a polished Founder Introduction Deck and business proposal formats designed to impress partners, clients, and investors. Our process guarantees a timely 4-week delivery with step-by-step guidance.",
      benefits: [
        "Founder Introduction Deck",
        "Business proposal templates",
        "4-week delivery timeline",
        "Step-by-step guidance",
        "Dedicated support team"
      ],
      icon: <FileText className="h-6 w-6 text-blue-600" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(86deg, rgb(129, 127, 219) 0%, rgb(11, 88, 212) 0%, rgb(237, 240, 240) 100%' }}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-6">
              OUR EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Starter Package – Launch Your Startup with Confidence!
            </h1>
            <p className="text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto">
              Kickstart your entrepreneurial journey with our all-in-one Starter Package – designed for idea-stage founders and solo entrepreneurs who want to build their business right, from Day 1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="#deliverables" 
                className="bg-white/10 hover:bg-white/20 font-medium px-8 py-3 rounded-lg transition-colors border border-white/20"
              >
                View Key Deliverables
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Deliverables */}
      <div id="deliverables" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Deliverables</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Everything you need to launch your startup successfully</p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              {keyDeliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {serviceSections.map((section, index) => {
              // Get the corresponding image path based on section title
              const getImagePath = (title: string): string => {
                if (title.includes('Business Advisory')) return '/Business Advisory.png'
                if (title.includes('Branding')) return '/Branding&Digital Presence.png'
                if (title.includes('Legal')) return '/Legal&Compliance Setup.png'
                if (title.includes('Pitch')) return '/PitchReady.png'
                return ''
              }
              
              const imagePath = getImagePath(section.title)
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                  {/* Image Section */}
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={imagePath} 
                        alt={section.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-start mb-6">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        {section.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{section.description}</p>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                      <div className="grid gap-3">
                        {section.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Timeline & Support */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Efficient 4-week delivery with expert guidance at every step</p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 1-2</h3>
                <p className="text-gray-600 text-sm">Strategy & Planning</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 2-3</h3>
                <p className="text-gray-600 text-sm">Documentation & Setup</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 3-4</h3>
                <p className="text-gray-600 text-sm">Implementation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 4</h3>
                <p className="text-gray-600 text-sm">Launch & Handover</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 text-white overflow-hidden" style={{ background: 'linear-gradient(86deg, rgb(129, 127, 219) 0%, rgb(11, 88, 212) 0%, rgb(237, 240, 240) 100%' }}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Entrepreneurial Journey?</h2>
            <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto">
              Our comprehensive startup package provides everything you need to turn your vision into a successful business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="#deliverables" 
                className="bg-white/10 hover:bg-white/20 font-medium px-8 py-3 rounded-lg transition-colors border border-white/20"
              >
                View Package Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
