
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-medical-dark-blue mb-4">About BrainyTree</h1>
            <p className="text-medical-gray">
              Learn about our mission, technology, and the team behind BrainyTree
            </p>
          </div>
          
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-medical-dark-blue">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    BrainyTree was founded with a clear mission: to enhance brain tumor detection and analysis through 
                    the power of artificial intelligence, making advanced diagnostic tools accessible to medical 
                    professionals worldwide.
                  </p>
                  <p>
                    We believe that by combining cutting-edge AI research with intuitive tools designed specifically 
                    for clinical and research environments, we can significantly improve the speed, accuracy, and 
                    accessibility of brain tumor analysis.
                  </p>
                  <p>
                    Our platform bridges the gap between complex AI technology and practical medical applications, 
                    empowering healthcare professionals to make more informed decisions and ultimately improve 
                    patient outcomes.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium text-medical-dark-blue mb-2">Core Values</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Accuracy</strong>: Continuously improving our models to provide the highest possible diagnostic accuracy</li>
                      <li><strong>Accessibility</strong>: Making advanced AI tools available to medical professionals across different resource settings</li>
                      <li><strong>Privacy</strong>: Upholding the highest standards of patient data protection and privacy</li>
                      <li><strong>Collaboration</strong>: Fostering an open environment for researchers and clinicians to advance the field together</li>
                      <li><strong>Education</strong>: Promoting understanding of AI applications in medical imaging and neurology</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technology" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-medical-dark-blue">Our Technology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    BrainyTree leverages state-of-the-art deep learning models specifically trained for brain MRI analysis. 
                    Our platform integrates several key technologies:
                  </p>
                  
                  <div className="space-y-6 pt-2">
                    <div>
                      <h3 className="text-lg font-medium text-medical-dark-blue mb-2">AI Model Architecture</h3>
                      <p>
                        Our core AI system utilizes a custom-designed convolutional neural network architecture optimized 
                        for medical imaging. The model has been trained on thousands of carefully annotated MRI scans, 
                        enabling it to detect and segment various types of brain tumors with high accuracy.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-medical-dark-blue mb-2">Image Preprocessing</h3>
                      <p>
                        Before analysis, uploaded MRI scans undergo a series of preprocessing steps including 
                        intensity normalization, skull stripping, and registration. This ensures consistent input 
                        quality regardless of the source imaging equipment.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-medical-dark-blue mb-2">Technical Stack</h3>
                      <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        <div className="bg-medical-light p-4 rounded-md">
                          <h4 className="font-medium mb-2">Frontend</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>React with TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Vite for fast development</li>
                            <li>React Query for state management</li>
                          </ul>
                        </div>
                        <div className="bg-medical-light p-4 rounded-md">
                          <h4 className="font-medium mb-2">Backend</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>FastAPI for model serving</li>
                            <li>PyTorch for model inference</li>
                            <li>Python image processing libraries</li>
                            <li>HIPAA-compliant data handling</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-medical-dark-blue mb-2">Model Performance</h3>
                      <p>
                        Our AI models have achieved over 92% accuracy in tumor detection and 85% accuracy in tumor 
                        type classification when validated against expert-annotated datasets. We continuously 
                        refine our models with new data and research findings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-medical-dark-blue">Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    At BrainyTree, we prioritize the privacy and security of medical data above all else. Our platform 
                    is designed with a "privacy by design" approach, ensuring that sensitive medical images and patient 
                    information are handled with the utmost care.
                  </p>
                  
                  <div className="pt-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-medical-dark-blue mb-2">Data Handling Principles</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>No Data Storage</strong>: MRI scans uploaded to BrainyTree are processed in-memory only and are never stored on our servers.</li>
                        <li><strong>Metadata Removal</strong>: Any identifying metadata from DICOM files is automatically stripped before processing.</li>
                        <li><strong>Secure Processing</strong>: All data transmission uses end-to-end encryption, and processing occurs in secure, isolated environments.</li>
                        <li><strong>Local Processing Option</strong>: For highly sensitive cases, we offer deployment options that enable all processing to occur locally within your institution's network.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-medical-dark-blue mb-2">Compliance</h3>
                      <p>
                        BrainyTree's architecture and practices are designed to help medical institutions maintain compliance with:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 pt-2">
                        <li>HIPAA (Health Insurance Portability and Accountability Act)</li>
                        <li>GDPR (General Data Protection Regulation)</li>
                        <li>Local and regional healthcare data protection regulations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-medical-dark-blue mb-2">Transparency</h3>
                      <p>
                        We believe in complete transparency regarding how we handle medical data. Our team is always 
                        available to answer questions about our privacy practices and to provide detailed information 
                        about our technical safeguards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-medical-dark-blue">Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    BrainyTree brings together experts in neurology, medical imaging, artificial intelligence, 
                    and software development. Our interdisciplinary team is committed to creating tools that 
                    make a real difference in brain tumor detection and analysis.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 bg-medical-light rounded-full mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-medical-blue">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h3 className="font-medium text-lg text-medical-dark-blue">Dr. Emily Chen</h3>
                      <p className="text-medical-teal mb-2">Chief Medical Officer</p>
                      <p className="text-sm text-medical-gray">
                        Neurologist with 15+ years of experience in brain tumor diagnosis and treatment. 
                        Leads our medical validation team and clinical integration efforts.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 bg-medical-light rounded-full mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-medical-blue">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h3 className="font-medium text-lg text-medical-dark-blue">Dr. Michael Rodriguez</h3>
                      <p className="text-medical-teal mb-2">AI Research Director</p>
                      <p className="text-sm text-medical-gray">
                        AI researcher specializing in medical image analysis with numerous publications on deep learning 
                        applied to neurological imaging. Previously led AI teams at major research institutions.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 bg-medical-light rounded-full mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-medical-blue">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h3 className="font-medium text-lg text-medical-dark-blue">Sarah Jackson</h3>
                      <p className="text-medical-teal mb-2">Lead Software Engineer</p>
                      <p className="text-sm text-medical-gray">
                        Full-stack developer with expertise in medical software applications. Focuses on creating 
                        intuitive interfaces and robust backend systems for healthcare applications.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 bg-medical-light rounded-full mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-medical-blue">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h3 className="font-medium text-lg text-medical-dark-blue">Dr. James Wilson</h3>
                      <p className="text-medical-teal mb-2">Clinical Integration Specialist</p>
                      <p className="text-sm text-medical-gray">
                        Radiologist with a background in healthcare IT. Works closely with medical facilities to 
                        integrate BrainyTree into existing clinical workflows.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <h3 className="text-lg font-medium text-medical-dark-blue mb-4">Join Our Team</h3>
                    <p className="text-medical-gray mb-6">
                      We're always looking for talented individuals passionate about using technology to improve 
                      healthcare outcomes. Check out our current openings or reach out to discuss opportunities.
                    </p>
                    <button className="btn-secondary">View Career Opportunities</button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
