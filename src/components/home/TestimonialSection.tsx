
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "BrainyTree has revolutionized how we approach MRI analysis in our research. The AI model's accuracy is impressive, and the interface is intuitive for clinical settings.",
    author: "Dr. Sarah Johnson",
    position: "Neurosurgeon, Metro Medical Center"
  },
  {
    quote: "As a researcher, I appreciate the rigor behind BrainyTree's AI models and the transparency about their development. The Research Hub is an invaluable resource.",
    author: "Dr. Michael Chen",
    position: "Neuroimaging Researcher, University Medical School"
  },
  {
    quote: "The platform's privacy-first approach makes it suitable for handling sensitive medical data. The absence of data storage gives us confidence when using it with patient scans.",
    author: "Dr. Alisha Patel",
    position: "Clinical Director, Neuro Institute"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-medical-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-medical-dark-blue mb-4">Trusted by Medical Professionals</h2>
          <p className="text-lg text-medical-gray max-w-2xl mx-auto">
            Hear what healthcare experts say about BrainyTree's impact on their clinical and research workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md card-hover">
              <CardContent className="pt-6">
                <div className="text-medical-blue mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="opacity-30">
                    <path d="M11.64 5.23a1 1 0 0 1 1.41.13l3.76 4.48a1.5 1.5 0 0 1 0 1.8l-3.76 4.48a1 1 0 0 1-1.41.13 1 1 0 0 1-.13-1.41L15.2 11l-3.7-3.84a1 1 0 0 1 .13-1.41zM7.23 5.23a1 1 0 0 1 1.41.13L12.4 9.84a1.5 1.5 0 0 1 0 1.8l-3.76 4.48a1 1 0 0 1-1.41.13 1 1 0 0 1-.13-1.41L10.8 11 7.1 7.16a1 1 0 0 1 .13-1.41z"></path>
                  </svg>
                </div>
                <p className="text-medical-gray mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-medical-dark-blue">{testimonial.author}</p>
                  <p className="text-sm text-medical-gray">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
