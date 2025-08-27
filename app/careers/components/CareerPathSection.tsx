'use client';

import { useState, useEffect } from 'react';

interface PathStep {
  level: number;
  title: string;
  duration: string;
  salary: string;
  benefits: string;
}

export default function CareerPathSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const pathwayData: PathStep[] = [
    { 
      level: 1, 
      title: 'Intern', 
      duration: '3 Months', 
      salary: 'Competitive, performance-based stipend.', 
      benefits: 'Internship Completion Certificate and a Pre-Placement Offer (PPO) opportunity.' 
    },
    { 
      level: 2, 
      title: 'Trainee', 
      duration: '18 Months', 
      salary: '₹20,000 - ₹30,000/month + incentives.', 
      benefits: 'PF Registration, statutory benefits, and potential for a 50% salary hike.' 
    },
    { 
      level: 3, 
      title: 'Associate', 
      duration: '12 Months', 
      salary: '₹35,000 - ₹50,000/month + bonuses.', 
      benefits: 'Cross-functional project exposure and internal certifications.' 
    },
    { 
      level: 4, 
      title: 'Assistant Executive', 
      duration: '12 Months', 
      salary: '₹50,000 - ₹65,000/month + incentives.', 
      benefits: 'Direct leadership mentoring and partial team management experience.' 
    },
    { 
      level: 5, 
      title: 'Executive', 
      duration: 'Ongoing', 
      salary: '₹65,000 - ₹80,000/month + bonuses.', 
      benefits: 'Full benefits package, annual retreats, and leadership track eligibility.' 
    },
    { 
      level: 6, 
      title: 'Department Head', 
      duration: 'Ongoing', 
      salary: 'Leadership Scale', 
      benefits: 'Drive strategic decision-making and manage a high-performing team.' 
    }
  ];

  useEffect(() => {
    // Set the first step as active by default
    setActiveStep(0);
  }, []);

  const activeData = pathwayData[activeStep];

  return (
    <section id="pathway" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Journey from Intern to Executive
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A clear roadmap of your potential career journey with us, designed for ambitious individuals ready to make an impact.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div id="path-steps" className="space-y-4">
              {pathwayData.map((step, index) => (
                <div 
                  key={step.level}
                  className={`path-step cursor-pointer p-4 rounded-lg transition-all ${
                    activeStep === index 
                      ? 'bg-white shadow-md border-l-4 border-[#C5A47E]' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center">
                    <div className={`step-circle w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      activeStep === index 
                        ? 'bg-[#C5A47E] text-white' 
                        : 'border-2 border-gray-300 text-gray-500'
                    }`}>
                      {step.level}
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-semibold text-lg transition-all ${
                        activeStep === index ? 'text-[#C5A47E]' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500">{step.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <div id="path-details" className="bg-white p-8 rounded-xl shadow-lg min-h-[300px]">
              <h3 className="text-2xl font-bold text-[#C5A47E] mb-2">
                {activeData.level}. {activeData.title}
              </h3>
              <p className="text-md text-gray-500 mb-4">{activeData.duration}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Compensation:</h4>
                  <p className="text-gray-600">{activeData.salary}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Key Benefits & Growth:</h4>
                  <p className="text-gray-600">{activeData.benefits}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
