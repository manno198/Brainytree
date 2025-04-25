
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface ResearchItem {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  abstract: string;
  tags: string[];
  url: string;
}

interface ResearchCardProps {
  research: ResearchItem;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg text-medical-dark-blue line-clamp-2">{research.title}</CardTitle>
        <CardDescription>{research.authors} • {research.journal} ({research.year})</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-medical-gray line-clamp-4 mb-4">{research.abstract}</p>
        <div className="flex flex-wrap gap-2">
          {research.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <Button asChild variant="outline" className="w-full">
          <a href={research.url} target="_blank" rel="noopener noreferrer">
            Read Paper
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResearchCard;
