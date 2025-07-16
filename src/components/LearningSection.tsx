import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Book, Code2, Palette, Zap } from "lucide-react";

interface LearningSectionProps {
  title: string;
  description: string;
  icon: "html" | "css" | "js";
  topics: string[];
  level: "beginner" | "intermediate" | "advanced";
  progress?: number;
}

const iconMap = {
  html: <Book className="h-8 w-8" />,
  css: <Palette className="h-8 w-8" />,
  js: <Zap className="h-8 w-8" />
};

const colorMap = {
  html: "html",
  css: "css", 
  js: "js"
} as const;

export function LearningSection({ title, description, icon, topics, level, progress }: LearningSectionProps) {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 transform hover:scale-105 bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${
            icon === 'html' ? 'bg-code-html/10 text-code-html' :
            icon === 'css' ? 'bg-code-css/10 text-code-css' :
            'bg-code-js/10 text-code-js'
          }`}>
            {iconMap[icon]}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              <Badge variant={colorMap[icon]} className="uppercase text-xs">
                {icon}
              </Badge>
            </div>
            <CardDescription className="text-muted-foreground">{description}</CardDescription>
          </div>
        </div>
        
        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  icon === 'html' ? 'bg-code-html' :
                  icon === 'css' ? 'bg-code-css' :
                  'bg-code-js'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">What you'll learn:</h4>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant={colorMap[icon]} 
          className="w-full font-medium group-hover:scale-105 transition-transform"
        >
          <Code2 className="h-4 w-4 mr-2" />
          Start Learning
        </Button>
      </CardContent>
    </Card>
  );
}