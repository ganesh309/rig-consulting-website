'use client';

import Link from 'next/link';

export default function DepartmentsSection() {
  const departments = [
    { 
      name: 'Finance', 
      url: 'https://sites.google.com/view/rig-talent/finance',
      icon: '💰',
      description: 'Financial analysis and strategic planning'
    },
    { 
      name: 'Consultancy', 
      url: 'https://sites.google.com/view/rig-talent/consultancy',
      icon: '💼',
      description: 'Business strategy and operations consulting'
    },
    { 
      name: 'Advisory', 
      url: 'https://sites.google.com/view/rig-talent/advisory',
      icon: '📊',
      description: 'Expert guidance and strategic advice'
    },
    { 
      name: 'Management', 
      url: 'https://sites.google.com/view/rig-talent/management',
      icon: '👔',
      description: 'Leadership and organizational management'
    },
    { 
      name: 'Legal', 
      url: 'https://sites.google.com/view/rig-talent/legal',
      icon: '⚖️',
      description: 'Legal compliance and corporate governance'
    },
    { 
      name: 'Marketing', 
      url: 'https://sites.google.com/view/rig-talent/marketing',
      icon: '📢',
      description: 'Branding and digital marketing strategies'
    },
    { 
      name: 'Sales', 
      url: 'https://sites.google.com/view/rig-talent/sales',
      icon: '📈',
      description: 'Business development and client relations'
    },
    { 
      name: 'Talent Acquisition', 
      url: 'https://sites.google.com/view/rig-talent/talent-acquisition-hr',
      icon: '👥',
      description: 'HR and talent management'
    },
    { 
      name: 'R&D', 
      url: 'https://sites.google.com/view/rig-talent/r-d',
      icon: '🔬',
      description: 'Innovation and product development'
    },
    { 
      name: 'IT', 
      url: 'https://sites.google.com/view/rig-talent/it',
      icon: '💻',
      description: 'Technology solutions and support'
    }
  ];

  return (
    <section id="departments" className="py-20 bg-[#F8F5F1]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            10 Specialized Departments, Endless Possibilities
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Find your fit within our multidisciplinary structure, designed for seamless collaboration and cross-functional impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {departments.map((dept, index) => (
            <Link 
              key={index}
              href={dept.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="department-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md border-2 border-transparent hover:border-[#C5A47E] transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              <span className="text-4xl mb-3">{dept.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{dept.name}</h3>
              <p className="text-gray-600 text-sm">{dept.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
