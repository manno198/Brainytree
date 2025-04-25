
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="bg-medical-blue text-white p-1 rounded-md mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.2 16.2c.2-.4.8-.6 1.2-.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.6 0-1.1-.3-1.4-.7"></path>
          <path d="M18 14v-3c0-1.4-.2-2-.6-2.5-.4-.5-1-.8-1.7-1-.5-.1-.8-.2-1.1-.4-.3-.3-.3-.8-.7-1.7-.4-1-1-1.4-1.9-1.4s-1.5.4-1.9 1.4c-.4.9-.4 1.4-.7 1.7-.3.2-.6.3-1.1.4-.7.2-1.3.5-1.7 1-.4.5-.6 1.1-.6 2.5v3"></path>
          <path d="M18 17.4c0 1-.1 1.6-.4 2.1-.3.5-.7.8-1.2 1-.5.2-1.1.2-2.4.2h-4c-1.3 0-1.9 0-2.4-.2-.5-.2-.9-.5-1.2-1-.3-.5-.4-1.1-.4-2.1"></path>
          <path d="M8 9h8"></path>
          <path d="M13 12h3"></path>
          <path d="M8 12h2"></path>
        </svg>
      </div>
      <span className="text-xl font-bold text-medical-dark-blue">BrainyTree</span>
    </Link>
  );
};

export default Logo;
