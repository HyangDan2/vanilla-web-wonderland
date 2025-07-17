import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LearningSection } from "@/components/LearningSection";
import { htmlData, cssData, jsData } from "@/data/learningData";

const Index = () => {
  const learningData = [htmlData, cssData, jsData];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Learning Sections */}
        <section id="learning" className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                단계별 학습 과정
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                HTML, CSS, JavaScript를 차례로 학습하며 웹 개발의 기초를 탄탄히 다져보세요
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningData.map((section, index) => (
                <LearningSection key={index} {...section} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Index;
