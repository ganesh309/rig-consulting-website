'use client';

import { useState, useEffect } from 'react';

interface Job {
  id: string;
  title: string;
  department: string;
  level: string;
  type: string;
  location: string;
  url: string;
}

export default function JobListingsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState({
    department: 'all',
    level: 'all',
    type: 'all'
  });
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [departments, setDepartments] = useState<string[]>([]);

  useEffect(() => {
    // Mock job data - in a real app, this would come from an API
    const jobData: Job[] = [
      { id: '1', title: 'Financial Analyst', department: 'Finance', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/finance/fa' },
      { id: '2', title: 'Business Strategy Consultant', department: 'Consultancy', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/consultancy/business-strategy-consultant' },
      { id: '3', title: 'Senior Legal Consultant', department: 'Advisory', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/advisory/legal-consultant' },
      { id: '4', title: 'Marketing Specialist', department: 'Marketing', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/marketing/marketing-specialist' },
      { id: '5', title: 'Sales Representative', department: 'Sales', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/sales/representative' },
      { id: '6', title: 'HR Specialist', department: 'Talent Acquisition', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/talent-acquisition/hr-specialist' },
      { id: '7', title: 'Web Developer', department: 'IT', level: 'Trainee', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/it/web-developer' },
      { id: '8', title: 'Graphic Design Intern', department: 'Marketing', level: 'Internship', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/marketing/design-intern' },
      { id: '9', title: 'Business Development Intern', department: 'Sales', level: 'Internship', type: 'Virtual', location: 'Remote', url: 'https://sites.google.com/view/rig-talent/sales/business-dev-intern' }
    ];

    setJobs(jobData);
    setFilteredJobs(jobData);
    
    // Extract unique departments
    const depts = [...new Set(jobData.map(job => job.department))];
    setDepartments(depts);
  }, []);

  useEffect(() => {
    // Apply filters
    const filtered = jobs.filter(job => {
      const deptMatch = filters.department === 'all' || job.department === filters.department;
      const levelMatch = filters.level === 'all' || job.level === filters.level;
      const typeMatch = filters.type === 'all' || job.type === filters.type;
      return deptMatch && levelMatch && typeMatch;
    });
    setFilteredJobs(filtered);
  }, [filters, jobs]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="openings" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Current Openings
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore opportunities that match your skills and ambitions. We are always looking for talented individuals to join our team.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
          <select
            name="department"
            value={filters.department}
            onChange={handleFilterChange}
            className="w-full md:w-auto p-3 border rounded-md focus:ring-2 focus:ring-[#C5A47E] focus:border-transparent"
          >
            <option value="all">All Departments</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
          
          <select
            name="level"
            value={filters.level}
            onChange={handleFilterChange}
            className="w-full md:w-auto p-3 border rounded-md focus:ring-2 focus:ring-[#C5A47E] focus:border-transparent"
          >
            <option value="all">All Levels</option>
            <option value="Internship">Internship</option>
            <option value="Trainee">Trainee</option>
            <option value="Associate">Associate</option>
            <option value="Experienced">Experienced</option>
          </select>
          
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full md:w-auto p-3 border rounded-md focus:ring-2 focus:ring-[#C5A47E] focus:border-transparent"
          >
            <option value="all">All Work Types</option>
            <option value="Virtual">Virtual</option>
            <option value="On-site">On-site</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C5A47E] hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 mt-1">{job.department}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{job.level}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{job.type}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{job.location}</span>
                </div>
                <a 
                  href={job.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-[#C5A47E] font-semibold hover:underline"
                >
                  View Details →
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">No job openings match your current filters.</p>
              <button 
                onClick={() => setFilters({ department: 'all', level: 'all', type: 'all' })}
                className="mt-4 text-[#C5A47E] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
