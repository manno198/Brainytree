
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface AnalysisResultProps {
  imageUrl: string;
  onReset: () => void;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ imageUrl, onReset }) => {
  // Mock AI result data for demonstration
  const resultData = {
    prediction: "Tumor Detected",
    confidence: 89,
    tumorType: "Meningioma",
    location: "Right frontal lobe",
    size: "2.3 cm",
    additionalNotes: "The tumor appears to be well-defined with minimal surrounding edema. Consider further diagnostic tests.",
    recommendedActions: [
      "Follow-up MRI with contrast",
      "Neurosurgical consultation",
      "Consider biopsy for histological confirmation"
    ]
  };
  
  return (
    <div className="space-y-6">
      <Card className="w-full border-medical-blue">
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <CardTitle className="text-2xl text-medical-dark-blue">Analysis Results</CardTitle>
              <CardDescription>AI-powered detection results for your MRI scan</CardDescription>
            </div>
            <Badge variant={resultData.confidence > 80 ? "destructive" : "outline"} className="text-sm">
              {resultData.prediction}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="bg-black p-1 rounded-md mb-4">
                <div className="relative">
                  <img 
                    src={imageUrl} 
                    alt="MRI Scan" 
                    className="w-full object-contain max-h-80"
                  />
                  {/* Simulated AI-detected regions */}
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">AI Confidence</span>
                  <span className="text-sm font-medium">{resultData.confidence}%</span>
                </div>
                <Progress className="h-2 mt-1" value={resultData.confidence} />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-medical-dark-blue">Diagnostic Information</h3>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-medical-gray">Tumor Type</p>
                  <p className="font-medium">{resultData.tumorType}</p>
                </div>
                <div>
                  <p className="text-medical-gray">Location</p>
                  <p className="font-medium">{resultData.location}</p>
                </div>
                <div>
                  <p className="text-medical-gray">Approx. Size</p>
                  <p className="font-medium">{resultData.size}</p>
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-medical-gray text-sm">Notes</p>
                <p className="text-sm">{resultData.additionalNotes}</p>
              </div>
              
              <div className="pt-2">
                <p className="text-medical-gray text-sm mb-2">Recommended Actions</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {resultData.recommendedActions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-between gap-4">
            <div className="flex items-center text-sm text-medical-gray">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12z"></path>
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 9v2"></path>
              </svg>
              Results are for demonstration purposes. Always consult with a healthcare professional.
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="text-medical-blue">Download Report</Button>
              <Button onClick={onReset}>Analyze Another Scan</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisResult;
