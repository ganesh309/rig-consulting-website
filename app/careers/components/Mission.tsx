'use client';

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-[#C5A47E] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            At RIG Global Solutions, we're on a mission to empower businesses and individuals through innovative consulting solutions. We believe in creating value that extends beyond profits, focusing on sustainable growth, ethical practices, and meaningful impact in every project we undertake.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <MissionCard 
            title="Empowerment"
            description="We empower our team members to take ownership of their work and make a real impact."
            icon={
              <svg className="w-12 h-12 text-[#C5A47E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            }
          />
          <MissionCard 
            title="Innovation"
            description="We foster a culture of continuous learning and creative problem-solving."
            icon={
              <svg className="w-12 h-12 text-[#C5A47E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            }
          />
          <MissionCard 
            title="Excellence"
            description="We strive for excellence in everything we do, setting high standards for ourselves and our work."
            icon={
              <svg className="w-12 h-12 text-[#C5A47E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function MissionCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-[#F8F5F1] rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
