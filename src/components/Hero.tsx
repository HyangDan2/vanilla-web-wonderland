import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-3 w-3 mr-1" />
                웹 개발 기초 학습
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Web Development</span>
                <br />
                <span className="bg-gradient-code bg-clip-text text-transparent">
                  첫 걸음
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                HTML, CSS, JavaScript의 핵심 개념을 단계별로 학습하고 
                실습을 통해 웹 개발의 기초를 탄탄히 다져보세요.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 group">
                <Code className="h-5 w-5 mr-2" />
                학습 시작하기
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 hover:bg-muted"
              >
                예제 둘러보기
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-code-html">HTML</div>
                <div className="text-sm text-muted-foreground">구조 만들기</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-code-css">CSS</div>
                <div className="text-sm text-muted-foreground">스타일링</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-code-js">JS</div>
                <div className="text-sm text-muted-foreground">동적 기능</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-code">
              <img 
                src={heroImage} 
                alt="Coding workspace with HTML, CSS, JavaScript" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 p-3 bg-card rounded-lg shadow-card border border-border">
              <Badge variant="html" className="text-xs">HTML5</Badge>
            </div>
            <div className="absolute top-1/4 -right-4 p-3 bg-card rounded-lg shadow-card border border-border">
              <Badge variant="css" className="text-xs">CSS3</Badge>
            </div>
            <div className="absolute -bottom-4 left-1/4 p-3 bg-card rounded-lg shadow-card border border-border">
              <Badge variant="js" className="text-xs">ES6+</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}