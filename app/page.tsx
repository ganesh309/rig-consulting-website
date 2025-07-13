"use client"

import { ArrowRight, Globe, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import dynamic from "next/dynamic"

const Hero3D = dynamic(() => import("@/components/hero-3d").then((m) => m.Hero3D), { ssr: false })
const Stats3D = dynamic(() => import("@/components/stats-3d").then((m) => m.Stats3D), { ssr: false })

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      {/* Hero Section with 3D Network Visualization */}
      <section className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center">
        {/* 3D Network Background */}
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>

        {/* Professional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-blue-900/10 z-10"></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 z-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="bg-blue-50/95 text-blue-700 border-blue-200 backdrop-blur-sm shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    Global Consulting Excellence
                  </span>
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Transform your business with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                    {" "}
                    strategic insights
                  </span>
                </h1>

                <div className="relative">
                  <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed backdrop-blur-sm bg-white/20 p-6 rounded-2xl border border-white/30 shadow-xl">
                    RIG Global Solutions partners with leading organizations to solve their most complex challenges and
                    unlock sustainable growth through data-driven strategies and cutting-edge analytics.
                  </p>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl -z-10"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 text-lg px-8 py-4"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 hover:bg-white/80 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 text-lg px-8 py-4"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { value: "500+", label: "Global Clients" },
                  { value: "50+", label: "Countries" },
                  { value: "95%", label: "Success Rate" },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-sm text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - let the 3D visualization fill this space */}
            <div className="lg:block hidden relative">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D */}
      <section className="py-16 bg-white/50 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Global Impact</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Delivering measurable results across industries and continents through advanced analytics and strategic
              consulting
            </p>
          </div>
          <Stats3D />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We help organizations across all industries and geographies solve their most important challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Strategy & Corporate Finance",
                description:
                  "Transform your strategy and operations to drive sustainable growth and competitive advantage.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Organization & Leadership",
                description:
                  "Build organizational capabilities and leadership excellence to execute your strategy effectively.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Digital & Technology",
                description:
                  "Accelerate digital transformation and leverage technology to create new value propositions.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Operations & Performance",
                description: "Optimize operations and improve performance across your entire value chain.",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Risk & Resilience",
                description: "Build resilient organizations that can navigate uncertainty and manage complex risks.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Sustainability & ESG",
                description: "Create sustainable business models that deliver both profit and positive impact.",
                color: "from-teal-500 to-green-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Deep sector expertise across the world's most dynamic industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Financial Services",
              "Healthcare & Life Sciences",
              "Technology, Media & Telecommunications",
              "Energy & Materials",
              "Consumer Goods & Retail",
              "Automotive & Assembly",
              "Public & Social Sector",
              "Travel, Logistics & Infrastructure",
            ].map((industry, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay ahead with our latest thinking on the issues that matter most to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Strategy",
                title: "The future of competitive advantage in the digital age",
                description: "How leading companies are reimagining their strategies for the post-digital world.",
                readTime: "5 min read",
              },
              {
                category: "Technology",
                title: "Generative AI's impact on business transformation",
                description: "Understanding the opportunities and challenges of implementing AI at scale.",
                readTime: "7 min read",
              },
              {
                category: "Sustainability",
                title: "Building resilient supply chains for tomorrow",
                description: "Strategies for creating sustainable and adaptable supply chain networks.",
                readTime: "6 min read",
              },
            ].map((insight, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {insight.category}
                  </Badge>
                  <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    {insight.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{insight.readTime}</span>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our experts to discuss how we can help you achieve your most ambitious goals.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">RIG Global Solutions</h3>
              <p className="text-slate-400 mb-4">
                Transforming businesses through strategic consulting and innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Operations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Organization
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Energy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 RIG Global Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
