
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-8 mt-auto dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BrainyTree</h3>
            <p className="text-sm text-gray-300">
              Advanced AI-driven platform for brain tumor detection using MRI scan analysis.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/analyze" className="text-sm text-gray-300 hover:text-white transition-colors">Analyze MRI</Link></li>
              <li><Link to="/research" className="text-sm text-gray-300 hover:text-white transition-colors">Research Hub</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/profile" className="text-sm text-gray-300 hover:text-white transition-colors">Profile</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Note</h3>
            <p className="text-sm text-gray-300">
              BrainyTree is designed to assist medical professionals and researchers. 
              It is not intended to replace professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} BrainyTree. All rights reserved. Privacy-focused MRI analysis.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
