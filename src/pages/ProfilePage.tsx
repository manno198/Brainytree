
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-medical-dark-blue dark:text-white mb-8">User Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <div className="bg-medical-blue dark:bg-medical-dark-blue text-white p-8 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold dark:text-white">Dr. Sarah Johnson</CardTitle>
                    <p className="text-medical-gray dark:text-gray-300">Neurologist</p>
                  </div>
                </CardHeader>
              </Card>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-medical-dark-blue dark:text-white">Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span>sarah.johnson@hospital.org</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Specialty:</span>
                      <span>Neurological Surgery</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Institution:</span>
                      <span>Central Medical Hospital</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">License #:</span>
                      <span>MD-12345678</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-medical-dark-blue dark:text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900 dark:text-blue-200 text-blue-500 p-2 rounded-full">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Analyzed MRI scan</p>
                        <p className="text-xs text-medical-gray dark:text-gray-400">2 hours ago</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-green-100 dark:bg-green-900 dark:text-green-200 text-green-500 p-2 rounded-full">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Commented on research paper</p>
                        <p className="text-xs text-medical-gray dark:text-gray-400">1 day ago</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900 dark:text-purple-200 text-purple-500 p-2 rounded-full">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Shared case study</p>
                        <p className="text-xs text-medical-gray dark:text-gray-400">3 days ago</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
