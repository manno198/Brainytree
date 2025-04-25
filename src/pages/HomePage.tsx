
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CtaSection from '@/components/home/CtaSection';
import { useTheme } from '@/providers/ThemeProvider';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureSection />
      <TestimonialSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
