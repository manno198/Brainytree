
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import FileUpload from '@/components/analyze/FileUpload';
import ImagePreview from '@/components/analyze/ImagePreview';
import AnalysisResult from '@/components/analyze/AnalysisResult';
import { toast } from 'sonner';

const AnalyzePage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
    setAnalysisComplete(false);
  };
  
  const handleAnalyze = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    // Simulating API call to backend for analysis
    toast.info('Analyzing MRI scan...');
    
    // Simulate processing time
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast.success('Analysis complete');
    }, 3000);
  };
  
  const handleReset = () => {
    setSelectedFile(null);
    setAnalysisComplete(false);
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
      setImageUrl(null);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-medical-dark-blue mb-4">Analyze MRI Scan</h1>
            <p className="text-medical-gray">
              Upload your MRI scan and let our AI model analyze it for potential brain tumors.
              Results are generated in real-time with high accuracy.
            </p>
          </div>
          
          {!selectedFile && !analysisComplete && (
            <FileUpload onFileSelected={handleFileSelected} />
          )}
          
          {selectedFile && !analysisComplete && (
            <ImagePreview 
              file={selectedFile}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
            />
          )}
          
          {analysisComplete && imageUrl && (
            <AnalysisResult 
              imageUrl={imageUrl}
              onReset={handleReset}
            />
          )}
          
          <div className="mt-12 bg-medical-light p-4 rounded-lg text-sm">
            <h3 className="font-medium text-medical-dark-blue mb-2">Important Privacy Information</h3>
            <p className="text-medical-gray">
              Your privacy is our priority. All uploaded MRI scans are processed in memory only and are not stored 
              on our servers. No personal data is retained after analysis is complete.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnalyzePage;
