'use client';

export default function MissionSection() {
  const missionItems = [
    {
      title: 'Youth-First Hiring',
      description: 'We are committed to identifying and nurturing emerging talent, offering full-time job confirmation for early starters.'
    },
    {
      title: 'High-Impact Training',
      description: 'Our model is built on providing free, hands-on training and mentorship to build a future-ready workforce.'
    },
    {
      title: 'Guaranteed Pathways',
      description: 'We offer a clear, predictable, and accelerated career ladder for dedicated individuals.'
    },
    {
      title: 'Executive Progression',
      description: 'Our structured pathway ensures high-performers can advance to Associate level in just 18 months.'
    }
  ];

  return (
    <section id="mission" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Empowering Solutions – Strategically, Sustainably, Globally
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            Our mission is to deliver strategic consultancy, outsourcing, and business intelligence solutions while empowering youth through free training and guaranteed career pathways—shaping a workforce ready to drive innovation, national development, and global competitiveness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
