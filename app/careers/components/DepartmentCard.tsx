import Link from 'next/link';
import { ReactNode } from 'react';

interface DepartmentCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export default function DepartmentCard({ title, description, href, icon }: DepartmentCardProps) {
  return (
    <Link 
      href={href}
      className="group p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-gray-600">
            {description}
          </p>
          <div className="mt-4 inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
            View opportunities
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
