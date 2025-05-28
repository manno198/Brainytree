import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'AI MRI Analysis',
    description: 'Upload MRI scans and receive AI-generated predictions about brain tumor presence with detailed visual markers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-medical-teal">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M8 12h8"></path>
      </svg>
    )
  },
  {
    title: 'Privacy by Design',
    description: 'Your data stays private. Uploaded images are processed in memory only with no personal data stored on our servers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-medical-teal">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    )
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-medical-dark-blue mb-4">Empowering Medical Professionals</h2>
          <p className="text-lg text-medical-gray max-w-2xl mx-auto">
            BrainyTree combines cutting-edge AI with intuitive design to enhance brain tumor detection capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border card-hover h-full">
              <CardHeader className="pb-2">
                <div className="mb-4 p-2 bg-medical-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-medical-dark-blue">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
