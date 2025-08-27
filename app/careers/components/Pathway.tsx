'use client';

import { useState } from 'react';

type PathwayStep = {
  level: number;
  title: string;
  duration: string;
  salary: string;
  benefits: string;
};

const pathwayData: PathwayStep[] = [
  { 
    level: 1, 
    title: 'Intern', 
    duration: '3 Months', 
    salary: 'Competitive, performance-based stipend', 
    benefits: 'Internship Completion Certificate and a Pre-Placement Offer (PPO) opportunity' 
  },
  { 
    level: 2, 
    title: 'Trainee', 
    duration: '18 Months', 
    salary: '₹20,000 - ₹30,000/month + incentives', 
    benefits: 'PF Registration, statutory benefits, and potential for a 50% salary hike' 
  },
  { 
    level: 3, 
    title: 'Associate', 
    duration: '12 Months', 
    salary: '₹35,000 - ₹50,000/month + bonuses', 
    benefits: 'Cross-functional project exposure and internal certifications' 
  },
  { 
    level: 4, 
    title: 'Assistant Executive', 
    duration: '12 Months', 
    salary: '₹50,000 - ₹65,000/month + incentives', 
    benefits: 'Direct leadership mentoring and partial team management experience' 
  },
  { 
    level: 5, 
    title: 'Executive', 
    duration: 'Ongoing', 
    salary: '₹65,000 - ₹80,000/month + bonuses', 
    benefits: 'Full benefits package, annual retreats, and leadership track eligibility' 
  },
  { 
    level: 6, 
    title: 'Department Head', 
    duration: 'Ongoing', 
    salary: 'Leadership Scale', 
    benefits: 'Drive strategic decision-making and manage a high-performing team' 
  }
];

export default function Pathway() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  const toggleLevel = (level: number) => {
    setActiveLevel(activeLevel === level ? null : level);
  };

  return (
    <section id="pathway" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Your Career Pathway
          </h2>
          <div className="w-20 h-1 bg-[#C5A47E] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            We provide a clear, structured progression path with defined milestones and rewards at each level.
            Click on each level to learn more about the role, compensation, and benefits.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Timeline steps */}
            <div className="space-y-8">
              {pathwayData.map((step, index) => (
                <div key={step.level} className="relative pl-12">
                  {/* Level dot */}
                  <div 
                    className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold z-10 cursor-pointer transition-all ${
                      activeLevel === step.level ? 'bg-[#C5A47E] scale-110' : 'bg-gray-400 hover:bg-[#C5A47E]'
                    }`}
                    onClick={() => toggleLevel(step.level)}
                  >
                    {step.level}
                  </div>
                  
                  {/* Level content */}
                  <div 
                    className={`p-6 rounded-lg border transition-all ${
                      activeLevel === step.level 
                        ? 'border-[#C5A47E] bg-[#F8F5F1] shadow-md' 
                        : 'border-gray-200 hover:border-[#C5A47E] bg-white'
                    }`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleLevel(step.level)}
                    >
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      <span className="text-sm text-gray-500">{step.duration}</span>
                    </div>
                    
                    {activeLevel === step.level && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Compensation</h4>
                            <p className="text-[#C5A47E] font-medium">{step.salary}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Key Benefits</h4>
                            <p className="text-gray-600">{step.benefits}</p>
                          </div>
                        </div>
                        
                        {index < pathwayData.length - 1 && (
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <h4 className="font-medium text-gray-700 mb-2">Path to Next Level</h4>
                            <p className="text-gray-600">
                              Successfully complete your tenure, demonstrate leadership potential, and achieve your performance targets to progress to {pathwayData[index + 1].title}.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-[#F8F5F1] p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready to start your journey?</h3>
            <p className="text-gray-600 mb-4">
              Our structured career path ensures your growth is recognized and rewarded at every step.
            </p>
            <a 
              href="#apply" 
              className="inline-block bg-[#C5A47E] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#b5946e] transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
