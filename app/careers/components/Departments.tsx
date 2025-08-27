'use client';

import { useState } from 'react';
import Link from 'next/link';

type Department = {
  name: string;
  url: string;
  description: string;
  icon: string;
};

const departments: Department[] = [
  { name: 'Finance', url: 'https://sites.google.com/view/rig-talent/finance', description: 'Financial strategy and growth planning.', icon: '💰' },
  { name: 'Consultancy', url: 'https://sites.google.com/view/rig-talent/consultancy', description: 'Expert business solutions.', icon: '💼' },
  { name: 'Advisory', url: 'https://sites.google.com/view/rig-talent/advisory', description: 'Strategic business guidance.', icon: '🎯' },
  { name: 'Management', url: 'https://sites.google.com/view/rig-talent/management', description: 'Leadership and project delivery.', icon: '👥' },
  { name: 'Legal', url: 'https://sites.google.com/view/rig-talent/legal', description: 'Compliance and risk management.', icon: '⚖️' },
  { name: 'Marketing', url: 'https://sites.google.com/view/rig-talent/marketing', description: 'Brand building and engagement.', icon: '📢' },
  { name: 'Sales', url: 'https://sites.google.com/view/rig-talent/sales', description: 'Revenue growth and partnerships.', icon: '📈' },
  { name: 'Talent Acquisition', url: 'https://sites.google.com/view/rig-talent/talent-acquisition-hr', description: 'Hiring and talent development.', icon: '👥' },
  { name: 'R&D', url: 'https://sites.google.com/view/rig-talent/r-d', description: 'Innovation and solution development.', icon: '🔬' },
  { name: 'IT', url: 'https://sites.google.com/view/rig-talent/it', description: 'Technology and digital solutions.', icon: '💻' }
];

export default function Departments() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Departments</h2>
          <div className="w-20 h-1 bg-[#C5A47E] mx-auto mb-8"></div>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search departments..."
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C5A47E] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDepartments.map((dept) => (
            <DepartmentCard key={dept.name} department={dept} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DepartmentCard({ department }: { department: Department }) {
  return (
    <Link 
      href={department.url} 
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100">
        <div className="text-4xl mb-4">{department.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#C5A47E] transition-colors">
          {department.name}
        </h3>
        <p className="text-gray-600">{department.description}</p>
        <div className="mt-4 text-sm text-[#C5A47E] font-medium flex items-center">
          Explore opportunities
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
