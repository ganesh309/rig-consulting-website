'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">RIG Global Solutions</h3>
            <p className="text-sm">Empowering Solutions—Strategically, Sustainably, Globally.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#openings" className="hover:text-white transition-colors">Current Openings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Application Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Company Policies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:talent@rigfinancialservices.com" className="hover:text-white transition-colors">talent@rigfinancialservices.com</a></li>
              <li>Phone: <a href="tel:+918617715655" className="hover:text-white transition-colors">+91 86177 15655</a></li>
              <li>Website: <a href="http://www.rigfinancialservices.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.rigfinancialservices.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/rig-global-solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <span aria-hidden="true">in</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>Equal Opportunity Employer | Data Privacy Policy | Terms & Conditions</p>
          <p>&copy; {new Date().getFullYear()} RIG Global Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
