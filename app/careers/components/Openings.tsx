'use client';

import { useState } from 'react';
import Link from 'next/link';

type Job = {
  title: string;
  department: string;
  level: string;
  type: string;
  location: string;
  url: string;
};

const jobData: Job[] = [
  { title: 'Financial Analyst', department: 'Finance', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/finance/fa' },
  { title: 'Business Strategy Consultant', department: 'Consultancy', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/consultancy/business-strategy-consultant' },
  { title: 'Senior Legal Consultant', department: 'Advisory', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/advisory/legal-consultant' },
  { title: 'Business Strategy Consultant', department: 'Advisory', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/advisory/business-strategy-consultant' },
  { title: 'Project Manager', department: 'Management', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/management/project-manager' },
  { title: 'Marketing & Branding Specialist', department: 'Marketing', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/marketing/marketing-branding-specialist' },
  { title: 'Graphic Designer Intern', department: 'Marketing', level: 'Internship', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/marketing/graphic-designer-intern' },
  { title: 'AI Content Creator', department: 'Marketing', level: 'Internship', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/marketing/ai-content-creator-intern' },
  { title: 'Sales Representative', department: 'Sales', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/sales/sales-representative' },
  { title: 'Client Success Manager', department: 'Sales', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/sales/client-success-manager' },
  { title: 'Sales Representative Intern', department: 'Sales', level: 'Internship', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/sales/sales-representative-intern' },
  { title: 'HR & Talent Specialist', department: 'Talent Acquisition', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/talent-acquisition-hr/hr-talent-specialist' },
  { title: 'Web Developer', department: 'IT', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/it/web-developer' },
  { title: 'CRM & System Specialist', department: 'IT', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/it/crm-system-specialist' }
];

const uniqueDepartments = [...new Set(jobData.map(job => job.department))].sort();
const uniqueLevels = [...new Set(jobData.map(job => job.level))].sort();

export default function Openings() {
  const [filters, setFilters] = useState({
    search: '',
    department: 'All',
    level: 'All',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredJobs = jobData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesDepartment = filters.department === 'All' || job.department === filters.department;
    const matchesLevel = filters.level === 'All' || job.level === filters.level;
    
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  return (
    <section id="openings" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Current Openings
          </h2>
          <div className="w-20 h-1 bg-[#C5A47E] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8">
            Browse our current job openings and find the perfect opportunity to grow with us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  name="search"
                  placeholder="Job title..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A47E] focus:border-transparent"
                  value={filters.search}
                  onChange={handleFilterChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  name="department"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A47E] focus:border-transparent"
                  value={filters.department}
                  onChange={handleFilterChange}
                >
                  <option value="All">All Departments</option>
                  {uniqueDepartments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                <select
                  name="level"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A47E] focus:border-transparent"
                  value={filters.level}
                  onChange={handleFilterChange}
                >
                  <option value="All">All Levels</option>
                  {uniqueLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setFilters({ search: '', department: 'All', level: 'All' })}
                  className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobCard key={`${job.title}-${index}`} job={job} />
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {job.department}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {job.level}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {job.type}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {job.location}
              </span>
            </div>
          </div>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#C5A47E] hover:bg-[#b5946e] transition-colors whitespace-nowrap"
          >
            Apply Now
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
