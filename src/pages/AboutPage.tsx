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
                  <div className="space-y-6 text-left">
                    <p className="mb-6">
                      This site has been developed by -
                    </p>
                    <div className="flex flex-col space-y-6">
                      <div>
                        <span className="font-extrabold text-2xl text-medical-dark-blue">Harshita Singh</span><br />
                        <span className="text-base">Student of Vellore Institute Of Technology Amaravati</span><br />
                        <a href="https://github.com/manno198" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 text-medical-blue hover:text-medical-dark-blue">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"></path></svg>
                          GitHub
                        </a>
                      </div>
                      <div>
                        <span className="font-extrabold text-2xl text-medical-dark-blue">Manisha Chunduri</span><br />
                        <span className="text-base">Student of Vellore Institute Of Technology Amaravati</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <p>For contributing visit the GitHub account and make a pull request.</p>
                    </div>
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
