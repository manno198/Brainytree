
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden brain-pattern dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-medical-dark-blue dark:text-white">
              AI-Powered Brain Tumor Detection
            </h1>
            <p className="text-lg text-medical-gray dark:text-gray-300">
              BrainyTree uses advanced deep learning technology to help medical professionals 
              detect brain tumors from MRI scans with high accuracy and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-medical-blue hover:bg-medical-dark-blue dark:bg-medical-light-blue dark:hover:bg-medical-blue">
                <Link to="/analyze">Upload MRI Scan</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="dark:border-gray-700 dark:text-gray-300">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:h-96 animate-fade-in">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/brain-scan-hero.png" 
                alt="AI brain scanning visualization" 
                className="object-contain w-full h-full rounded-lg shadow-lg animate-pulse-subtle"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent dark:from-gray-900 dark:to-transparent"></div>
    </div>
  );
};

export default Hero;

