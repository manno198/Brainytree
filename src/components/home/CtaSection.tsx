
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-medical-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to elevate your diagnostic capabilities?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join medical professionals worldwide who are using BrainyTree to enhance
          brain tumor detection with advanced AI analysis.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="bg-white text-medical-blue hover:bg-white/90 border-white">
            <Link to="/analyze">Try BrainyTree Now</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white hover:bg-medical-blue/30 border border-white">
            <Link to="/research">Explore Research</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
