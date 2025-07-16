import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Play, Eye } from "lucide-react";

interface CodeCardProps {
  title: string;
  description: string;
  language: "html" | "css" | "js";
  code: string;
  result?: string;
  level: "beginner" | "intermediate" | "advanced";
}

const languageColors = {
  html: "html",
  css: "css", 
  js: "js"
} as const;

const levelColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800", 
  advanced: "bg-red-100 text-red-800"
} as const;

export function CodeCard({ title, description, language, code, result, level }: CodeCardProps) {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 transform hover:scale-105 bg-card border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
          <Badge className={levelColors[level]}>{level}</Badge>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-muted rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between mb-2">
            <Badge variant={languageColors[language]} className="uppercase text-xs font-mono">
              {language}
            </Badge>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                <Eye className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                <Play className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <pre className="font-mono text-sm text-foreground overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
        
        {result && (
          <div className="bg-background border border-border rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-2 font-medium">RESULT:</div>
            <div 
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: result }}
            />
          </div>
        )}
        
        <Button 
          variant={languageColors[language]} 
          className="w-full font-medium"
        >
          Try It Yourself
        </Button>
      </CardContent>
    </Card>
  );
}