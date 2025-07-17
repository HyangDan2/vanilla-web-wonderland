import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { LearningSection } from "@/components/LearningSection";
import { CodeCard } from "@/components/CodeCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { htmlData } from "@/data/learningData";

const HtmlLearning = () => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const currentExample = htmlData.examples[currentExampleIndex];

  const goToPrevious = () => {
    setCurrentExampleIndex((prev) => 
      prev > 0 ? prev - 1 : htmlData.examples.length - 1
    );
  };

  const goToNext = () => {
    setCurrentExampleIndex((prev) => 
      prev < htmlData.examples.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {htmlData.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {htmlData.description}
            </p>
            <Link to="/">
              <Button variant="outline">
                <Home className="mr-2 h-4 w-4" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>

          {/* Learning Section */}
          <section className="mb-20">
            <div className="max-w-2xl mx-auto">
              <LearningSection {...htmlData} />
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">HTML 실습 예제</h2>
              <p className="text-lg text-muted-foreground">
                단계별로 HTML 코드를 작성하고 결과를 확인해보세요
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="text-center mb-8">
              <div className="text-sm text-muted-foreground mb-2">
                {currentExampleIndex + 1} / {htmlData.examples.length}
              </div>
              <div className="w-full bg-muted rounded-full h-2 max-w-md mx-auto">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((currentExampleIndex + 1) / htmlData.examples.length) * 100}%` 
                  }}
                />
              </div>
            </div>

            {/* Current Example */}
            <div className="max-w-4xl mx-auto mb-8">
              <CodeCard {...currentExample} />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <Button 
                onClick={goToPrevious}
                variant="outline"
                size="lg"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                이전 예제
              </Button>

              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  {currentExample.title}
                </div>
              </div>

              <Button 
                onClick={goToNext}
                size="lg"
              >
                다음 예제
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HtmlLearning;