'use client';

import Link from 'next/link';

export default function ApplySection() {
  return (
    <section id="apply" className="py-20 bg-[#3A3A3A] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Ready to Start Your Journey?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 p-8 rounded-lg text-left backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-3">Internship Applications</h3>
            <p className="mb-6 text-gray-200">
              Start your career with our 3-month, project-based internship program. Exceptional performers receive guaranteed consideration for full-time Trainee roles.
            </p>
            <a 
              href="https://forms.gle/MbG3wAJvJRMGv26r6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A47E] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#b5946e] transition-colors"
            >
              Apply for Internship
            </a>
          </div>
          
          <div className="bg-white/10 p-8 rounded-lg text-left backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-3">Experienced Professionals</h3>
            <p className="mb-6 text-gray-200">
              Join us at the Associate level or above based on your industry experience. Benefit from immediate integration into high-impact projects.
            </p>
            <a 
              href="https://forms.gle/bHxCRrtxVYRxoYaG7" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A47E] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#b5946e] transition-colors"
            >
              Apply as Professional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
