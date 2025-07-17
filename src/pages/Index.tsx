import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LearningSection } from "@/components/LearningSection";
import { CodeCard } from "@/components/CodeCard";

const Index = () => {
  const learningData = [
    {
      title: "HTML 기초",
      description: "웹 페이지의 구조를 만드는 마크업 언어를 배워보세요",
      icon: "html" as const,
      topics: [
        "HTML 태그와 요소 이해하기",
        "문서 구조와 시맨틱 마크업",
        "폼과 입력 요소 다루기",
        "멀티미디어 콘텐츠 삽입하기"
      ],
      level: "beginner" as const,
      progress: 0
    },
    {
      title: "CSS 스타일링",
      description: "웹 페이지의 디자인과 레이아웃을 담당하는 스타일시트를 학습하세요",
      icon: "css" as const,
      topics: [
        "CSS 선택자와 속성 이해하기",
        "박스 모델과 레이아웃",
        "플렉스박스와 그리드 시스템",
        "반응형 디자인과 미디어 쿼리"
      ],
      level: "beginner" as const,
      progress: 0
    },
    {
      title: "JavaScript 프로그래밍",
      description: "웹 페이지에 동적 기능을 추가하는 프로그래밍 언어를 익혀보세요",
      icon: "js" as const,
      topics: [
        "변수, 함수, 조건문 기초",
        "DOM 조작과 이벤트 처리",
        "비동기 프로그래밍과 API",
        "모던 JavaScript ES6+ 문법"
      ],
      level: "intermediate" as const,
      progress: 0
    }
  ];

  const codeExamples = [
    {
      title: "첫 번째 HTML 페이지",
      description: "기본적인 HTML 문서 구조를 만들어보세요",
      language: "html" as const,
      level: "beginner" as const,
      code: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>내 첫 웹페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>첫 번째 웹페이지입니다.</p>
</body>
</html>`,
      result: `<h1 style="margin: 0; color: #f97316;">안녕하세요!</h1><p style="margin: 8px 0 0 0;">첫 번째 웹페이지입니다.</p>`
    },
    {
      title: "HTML 리스트 만들기",
      description: "순서가 있는 리스트와 없는 리스트를 만들어보세요",
      language: "html" as const,
      level: "beginner" as const,
      code: `<h3>좋아하는 음식</h3>
<ul>
    <li>피자</li>
    <li>치킨</li>
    <li>햄버거</li>
</ul>

<h3>학습 순서</h3>
<ol>
    <li>HTML 기초</li>
    <li>CSS 스타일링</li>
    <li>JavaScript 프로그래밍</li>
</ol>`,
      result: `<h3 style="margin: 0 0 8px 0; color: #f97316;">좋아하는 음식</h3><ul style="margin: 0 0 16px 0; padding-left: 20px;"><li>피자</li><li>치킨</li><li>햄버거</li></ul><h3 style="margin: 0 0 8px 0; color: #f97316;">학습 순서</h3><ol style="margin: 0; padding-left: 20px;"><li>HTML 기초</li><li>CSS 스타일링</li><li>JavaScript 프로그래밍</li></ol>`
    },
    {
      title: "HTML 테이블 만들기",
      description: "데이터를 정리해서 보여주는 테이블을 만들어보세요",
      language: "html" as const,
      level: "beginner" as const,
      code: `<table border="1">
    <thead>
        <tr>
            <th>이름</th>
            <th>나이</th>
            <th>직업</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>김철수</td>
            <td>25</td>
            <td>개발자</td>
        </tr>
        <tr>
            <td>이영희</td>
            <td>30</td>
            <td>디자이너</td>
        </tr>
    </tbody>
</table>`,
      result: `<table style="border-collapse: collapse; width: 100%;"><thead><tr style="background: #f3f4f6;"><th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">이름</th><th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">나이</th><th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">직업</th></tr></thead><tbody><tr><td style="border: 1px solid #d1d5db; padding: 8px;">김철수</td><td style="border: 1px solid #d1d5db; padding: 8px;">25</td><td style="border: 1px solid #d1d5db; padding: 8px;">개발자</td></tr><tr style="background: #f9fafb;"><td style="border: 1px solid #d1d5db; padding: 8px;">이영희</td><td style="border: 1px solid #d1d5db; padding: 8px;">30</td><td style="border: 1px solid #d1d5db; padding: 8px;">디자이너</td></tr></tbody></table>`
    },
    {
      title: "HTML 폼 요소들",
      description: "사용자 입력을 받는 다양한 폼 요소들을 만들어보세요",
      language: "html" as const,
      level: "beginner" as const,
      code: `<form>
    <label for="name">이름:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">이메일:</label>
    <input type="email" id="email" name="email">
    
    <label for="message">메시지:</label>
    <textarea id="message" name="message"></textarea>
    
    <button type="submit">전송</button>
</form>`,
      result: `<form style="display: flex; flex-direction: column; gap: 8px; max-width: 300px;"><label style="font-weight: bold;">이름:</label><input type="text" style="padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;"><label style="font-weight: bold;">이메일:</label><input type="email" style="padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;"><label style="font-weight: bold;">메시지:</label><textarea style="padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; min-height: 60px;"></textarea><button type="submit" style="padding: 8px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">전송</button></form>`
    },
    {
      title: "이미지와 링크",
      description: "이미지를 삽입하고 다른 페이지로 연결하는 링크를 만들어보세요",
      language: "html" as const,
      level: "beginner" as const,
      code: `<h2>웹 개발 리소스</h2>

<img src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=HTML" 
     alt="HTML 로고" 
     width="200">

<p>
    <a href="https://developer.mozilla.org/ko/" target="_blank">
        MDN 웹 문서
    </a>에서 더 많은 정보를 확인하세요!
</p>

<a href="mailto:example@email.com">이메일 보내기</a>`,
      result: `<h2 style="margin: 0 0 12px 0; color: #f97316;">웹 개발 리소스</h2><img src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=HTML" alt="HTML 로고" width="200" style="display: block; margin: 12px 0; border-radius: 8px;"><p style="margin: 12px 0;"><a href="https://developer.mozilla.org/ko/" target="_blank" style="color: #3b82f6; text-decoration: underline;">MDN 웹 문서</a>에서 더 많은 정보를 확인하세요!</p><a href="mailto:example@email.com" style="color: #3b82f6; text-decoration: underline;">이메일 보내기</a>`
    },
    {
      title: "버튼 스타일링",
      description: "CSS로 멋진 버튼을 만들어보세요",
      language: "css" as const,
      level: "beginner" as const,
      code: `.button {
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}`,
      result: `<button style="background: #3b82f6; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;">Click Me!</button>`
    },
    {
      title: "간단한 계산기",
      description: "JavaScript로 기본 계산 기능을 구현해보세요",
      language: "js" as const,
      level: "intermediate" as const,
      code: `function calculate(a, b, operation) {
  switch(operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return 'Invalid operation';
  }
}

// 사용 예시
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '*')); // 50`,
      result: `<div style="font-family: monospace; background: #1f2937; color: #10b981; padding: 12px; border-radius: 6px;">calculate(10, 5, '+') → 15<br>calculate(10, 5, '*') → 50</div>`
    }
  ];

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

        {/* Code Examples */}
        <section id="examples" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                실습 예제
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                실제 코드를 작성하고 결과를 확인하며 배운 내용을 실습해보세요
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <CodeCard key={index} {...example} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
