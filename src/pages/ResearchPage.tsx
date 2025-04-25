
import React from 'react';
import Layout from '@/components/layout/Layout';
import ResearchCard from '@/components/research/ResearchCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Toggle, toggleVariants } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// Define mock research data that matches the ResearchCard interface
const featuredResearch = [
  {
    id: "1",
    title: "Novel AI Algorithm for Tumor Detection",
    authors: "Dr. Jane Smith",
    journal: "Journal of Medical AI",
    year: 2023,
    abstract: "A groundbreaking AI algorithm that significantly improves the accuracy of brain tumor detection in MRI scans.",
    tags: ["AI", "Neural Networks", "Tumor Detection"],
    url: "#"
  },
  {
    id: "2",
    title: "Impact of Early Diagnosis on Treatment Outcomes",
    authors: "Dr. Michael Brown",
    journal: "Clinical Neurology Review",
    year: 2023,
    abstract: "An analysis of how early diagnosis of brain tumors affects the success rates of various treatment methods.",
    tags: ["Early Diagnosis", "Treatment Outcomes", "Clinical Study"],
    url: "#"
  },
  {
    id: "3",
    title: "Advancements in Non-Invasive Imaging Techniques",
    authors: "Dr. Emily White",
    journal: "Imaging Technology Today",
    year: 2023,
    abstract: "A review of the latest non-invasive imaging technologies for brain tumor diagnosis and monitoring.",
    tags: ["Imaging", "Non-Invasive", "Technology"],
    url: "#"
  }
];

const popularResearch = [
  {
    id: "4",
    title: "The Role of Genetics in Brain Tumor Development",
    authors: "Dr. David Green",
    journal: "Genetics & Oncology",
    year: 2023,
    abstract: "An exploration of the genetic factors that contribute to the development and progression of brain tumors.",
    tags: ["Genetics", "Oncology", "Research"],
    url: "#"
  },
  {
    id: "5",
    title: "New Chemotherapy Regimens for Aggressive Tumors",
    authors: "Dr. Sarah Johnson",
    journal: "Oncology Treatment Review",
    year: 2023,
    abstract: "An evaluation of new chemotherapy regimens and their effectiveness in treating aggressive brain tumors.",
    tags: ["Chemotherapy", "Clinical Trials", "Treatment"],
    url: "#"
  },
  {
    id: "6",
    title: "Rehabilitation Strategies for Post-Surgery Patients",
    authors: "Dr. Robert Lee",
    journal: "Rehabilitation Medicine",
    year: 2023,
    abstract: "Effective rehabilitation strategies for patients recovering from brain tumor surgery.",
    tags: ["Rehabilitation", "Post-Surgery", "Patient Care"],
    url: "#"
  }
];

const recentResearch = [
  {
    id: "7",
    title: "Machine Learning Approaches to Glioma Classification",
    authors: "Dr. Maria Garcia",
    journal: "Computational Medicine",
    year: 2023,
    abstract: "Using machine learning to improve the classification accuracy of glioma subtypes from MRI data.",
    tags: ["Machine Learning", "Glioma", "Classification"],
    url: "#"
  },
  {
    id: "8",
    title: "Immunotherapy Trials for Recurrent Brain Tumors",
    authors: "Dr. Kevin Rodriguez",
    journal: "Immunology & Cancer",
    year: 2023,
    abstract: "A summary of recent immunotherapy trials and their outcomes for patients with recurrent brain tumors.",
    tags: ["Immunotherapy", "Clinical Trials", "Recurrent Tumors"],
    url: "#"
  },
  {
    id: "9",
    title: "Palliative Care in Advanced Brain Tumor Cases",
    authors: "Dr. Linda Perez",
    journal: "Palliative Care Journal",
    year: 2023,
    abstract: "Best practices for palliative care in advanced brain tumor cases to improve patient quality of life.",
    tags: ["Palliative Care", "Quality of Life", "Advanced Cases"],
    url: "#"
  }
];

const ResearchPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-medical-dark-blue dark:text-white mb-6">
            Research Hub
          </h1>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredResearch.map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularResearch.map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="recent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentResearch.map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-medical-dark-blue dark:text-white mb-4">
              Additional Resources
            </h2>
            <ul className="list-disc list-inside text-medical-gray dark:text-gray-300">
              <li><a href="#" className="hover:text-medical-blue dark:hover:text-medical-light-blue transition-colors">Brain Tumor Foundation</a></li>
              <li><a href="#" className="hover:text-medical-blue dark:hover:text-medical-light-blue transition-colors">National Brain Tumor Society</a></li>
              <li><a href="#" className="hover:text-medical-blue dark:hover:text-medical-light-blue transition-colors">American Brain Tumor Association</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResearchPage;
