
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ImagePreviewProps {
  file: File | null;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ file, onAnalyze, isAnalyzing }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);
  
  if (!file || !imageUrl) {
    return null;
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-medical-dark-blue">MRI Scan Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="original" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="original">Original</TabsTrigger>
            <TabsTrigger value="enhanced">Enhanced</TabsTrigger>
          </TabsList>
          <TabsContent value="original" className="mt-0">
            <div className="bg-black p-1 rounded-md">
              <img 
                src={imageUrl} 
                alt="MRI Scan Preview" 
                className="w-full object-contain max-h-80"
              />
            </div>
          </TabsContent>
          <TabsContent value="enhanced" className="mt-0">
            <div className="bg-black p-1 rounded-md">
              <img 
                src={imageUrl} 
                alt="MRI Scan Enhanced" 
                className="w-full object-contain max-h-80 contrast-125 brightness-110"
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-medical-light rounded-md">
            <p className="font-medium text-medical-dark-blue">File Name</p>
            <p className="text-medical-gray truncate">{file.name}</p>
          </div>
          <div className="p-3 bg-medical-light rounded-md">
            <p className="font-medium text-medical-dark-blue">File Type</p>
            <p className="text-medical-gray">{file.type || 'Unknown'}</p>
          </div>
          <div className="p-3 bg-medical-light rounded-md">
            <p className="font-medium text-medical-dark-blue">File Size</p>
            <p className="text-medical-gray">{(file.size / 1024).toFixed(2)} KB</p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button 
            onClick={onAnalyze} 
            className="bg-medical-blue hover:bg-medical-dark-blue"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Scan'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImagePreview;
