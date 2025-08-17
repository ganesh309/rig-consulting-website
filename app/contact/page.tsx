import { ArrowRight, Mail, MapPin, Phone, Send, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(86deg, rgb(129, 127, 219) 0%, rgb(11, 88, 212) 0%, rgb(237, 240, 240) 100%)' }}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-6">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let's Talk About Your Next Project
            </h1>
            <p className="text-xl text-blue-100/90 mb-8">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-8">
                  <span className="inline-block text-blue-600 font-medium mb-3">SEND US A MESSAGE</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
                  <p className="text-gray-600">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-2xl h-full">
                  <div className="mb-10">
                    <span className="inline-block text-blue-600 font-medium mb-3">CONTACT INFORMATION</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-gray-600">
                      Have questions about our services or want to discuss a project? Reach out to us using the contact information below.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
                        <p className="mt-1 text-gray-600">Kolkata, West Bengal 700102</p>
                        <p className="text-gray-600">India</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                        <a href="mailto:info@rigglobal.com" className="mt-1 block text-blue-600 hover:text-blue-700 transition-colors">
                          info@rigglobal.com
                        </a>
                        <a href="mailto:support@rigglobal.com" className="block text-blue-600 hover:text-blue-700 transition-colors">
                          support@rigglobal.com
                        </a>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                        <a href="tel:+911234567890" className="mt-1 block text-gray-600 hover:text-blue-600 transition-colors">
                          +91 12345 67890
                        </a>
                        <p className="text-gray-500 text-sm mt-1">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-12 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://www.linkedin.com/company/rig-global-solutions/' },
                        { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: '#' },
                        { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: '#' },
                        { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: '#' },
                      ].map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          className="h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                          aria-label={item.name}
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
