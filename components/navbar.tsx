"use client"

import { useState } from "react"
import { Menu, Search, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const industries = [
    "Aerospace & Defense",
    "Financial Services",
    "Private Capital",
    "Agriculture",
    "Healthcare",
    "Public Sector",
    "Automotive & Assembly",
    "Industrials & Electronics",
    "Real Estate",
    "Chemicals",
    "Infrastructure",
    "Retail",
    "Consumer Packaged Goods",
    "Life Sciences",
    "Semiconductors",
    "Education",
    "Logistics",
    "Social Sector",
    "Electric Power & Natural Gas",
    "Metals & Mining",
    "Technology, Media & Telecommunications",
    "Energy and Materials",
    "Oil & Gas",
    "Travel",
    "Engineering, Construction & Building Materials",
    "Packaging & Paper",
  ]

  const capabilities = [
    { name: "Business Building", featured: true },
    { name: "Digital", featured: true },
    { name: "Geopolitics", featured: false },
    { name: "Growth, Marketing & Sales", featured: false },
    { name: "Implementation", featured: false },
    { name: "M&A", featured: false },
    { name: "Operations", featured: false },
    { name: "Risk & Resilience", featured: false },
    { name: "Strategy & Corporate Finance", featured: false },
    { name: "People & Organizational Performance", featured: false },
    { name: "Sustainability", featured: false },
    { name: "Transformation", featured: true },
  ]

  const featuredInsights = {
    trending: ["Artificial Intelligence & Gen AI", "Business Resilience", "Case Studies"],
    series: ["Global Surveys", "RIG Explainers", "RIG on Books", "RIG on Lives & Legacies"],
    interviews: ["Author Talks", "RIG Live"],
    other: ["Tariffs and Global Trade", "The Rise of Quantum Computing", "Week in Charts"],
  }

  const careers = [
    "Home",
    "Explore",
    "Jobs",
    "Interviewing",
    "Our People",
    "Students",
    "Tech Careers",
    "Careers Beyond Consulting",
    "Experienced Professionals",
  ]

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RIG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-tight">RIG Global</span>
                <span className="text-sm text-slate-600 leading-tight">Solutions</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  placeholder="Type to search..."
                  className="w-full pl-4 pr-10 py-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Menu Button */}
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="hover:bg-slate-100">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Dark Sidebar */}
          <div className="w-80 bg-slate-900 text-white flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RIG</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">RIG Global</span>
                  <span className="text-sm text-slate-300 leading-tight">Solutions</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-slate-800"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex-1 p-6 space-y-2">
              {[
                { name: "Industries", key: "industries" },
                { name: "Capabilities", key: "capabilities" },
                { name: "Featured Insights", key: "insights" },
                { name: "Locations", key: "locations" },
                { name: "Careers", key: "careers" },
                { name: "About Us", key: "about" },
                { name: "RIG Blog", key: "blog" },
                { name: "Global", key: "global" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(activeSection === item.key ? null : item.key)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    activeSection === item.key
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.key !== "locations" && item.key !== "blog" && (
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${activeSection === item.key ? "rotate-90" : ""}`}
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-slate-50 overflow-y-auto">
            <div className="p-8">
              {/* Search Bar for Mobile */}
              <div className="lg:hidden mb-8">
                <div className="relative">
                  <Input
                    placeholder="Type to search..."
                    className="w-full pl-4 pr-10 py-3 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                </div>
              </div>

              {/* Industries Section */}
              {activeSection === "industries" && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Industries</h2>
                  <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
                    {industries.map((industry, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="text-slate-600 hover:text-blue-600 transition-colors py-2 block"
                      >
                        {industry}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Capabilities Section */}
              {activeSection === "capabilities" && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Capabilities</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {capabilities
                          .filter((cap) => !cap.featured)
                          .map((capability, index) => (
                            <Link
                              key={index}
                              href="#"
                              className="text-slate-600 hover:text-blue-600 transition-colors py-2 block"
                            >
                              {capability.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-4">FEATURED</h3>
                      <div className="space-y-6">
                        {capabilities
                          .filter((cap) => cap.featured)
                          .map((capability, index) => (
                            <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                              <h4 className="font-semibold text-slate-900 mb-2">{capability.name}</h4>
                              <p className="text-sm text-slate-600 mb-2">
                                {capability.name === "Digital" && "Digital upends old models. Reinvent your business."}
                                {capability.name === "Transformation" && "Most transformations fail. Flip the odds."}
                                {capability.name === "Business Building" &&
                                  "Create new growth engines for your organization."}
                              </p>
                              <div className="space-y-1">
                                <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm block">
                                  → Business Building
                                </Link>
                                <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm block">
                                  → QuantumBlack, AI by RIG
                                </Link>
                                <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm block">
                                  → Technology
                                </Link>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Featured Insights Section */}
              {activeSection === "insights" && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-slate-900">Featured Insights</h2>
                    <Link href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                      Explore our featured insights <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-4">TRENDING TOPICS</h3>
                      <div className="space-y-3">
                        {featuredInsights.trending.map((topic, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="text-slate-600 hover:text-blue-600 transition-colors block"
                          >
                            {topic}
                          </Link>
                        ))}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-4 mt-8">FEATURED SERIES</h3>
                      <div className="space-y-3">
                        {featuredInsights.series.map((series, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="text-slate-600 hover:text-blue-600 transition-colors block"
                          >
                            {series}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="space-y-3">
                        {featuredInsights.other.map((item, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="text-slate-600 hover:text-blue-600 transition-colors block"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-4 mt-8">INTERVIEWS</h3>
                      <div className="space-y-3">
                        {featuredInsights.interviews.map((interview, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="text-slate-600 hover:text-blue-600 transition-colors block"
                          >
                            {interview}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-4">FEATURED</h3>
                      <div className="space-y-6">
                        <div className="border-b border-slate-200 pb-4">
                          <h4 className="font-semibold text-slate-900 mb-2">RIG Quarterly</h4>
                          <p className="text-sm text-slate-600">
                            Our flagship business publication has been defining and informing the senior-management
                            agenda since 1964.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">RIG Global Institute</h4>
                          <p className="text-sm text-slate-600">
                            Our mission is to help leaders in multiple sectors develop a deeper understanding of the
                            global economy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Careers Section */}
              {activeSection === "careers" && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Careers</h2>
                  <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
                    {careers.map((career, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="text-slate-600 hover:text-blue-600 transition-colors py-2 block"
                      >
                        {career}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* About Us Section */}
              {activeSection === "about" && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">About Us</h2>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    {["Our Story", "Leadership Team", "Global Offices", "Sustainability", "Alumni", "Media Center"].map(
                      (item, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="text-slate-600 hover:text-blue-600 transition-colors py-2 block"
                        >
                          {item}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
