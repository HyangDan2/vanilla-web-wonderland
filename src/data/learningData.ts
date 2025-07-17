export const htmlData = {
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
  examples: [
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
    }
  ]
};

export const cssData = {
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
  examples: [
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
      title: "카드 디자인",
      description: "그림자와 테두리를 이용한 카드 컴포넌트를 만들어보세요",
      language: "css" as const,
      level: "beginner" as const,
      code: `.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}`,
      result: `<div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; transition: transform 0.3s; max-width: 300px;"><h3 style="margin: 0 0 8px 0; color: #1f2937;">카드 제목</h3><p style="margin: 0; color: #6b7280;">이것은 CSS로 만든 카드 컴포넌트입니다.</p></div>`
    },
    {
      title: "플렉스박스 레이아웃",
      description: "플렉스박스를 사용해 요소들을 정렬해보세요",
      language: "css" as const,
      level: "intermediate" as const,
      code: `.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #f3f4f6;
  border-radius: 8px;
}

.flex-item {
  background: #3b82f6;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  text-align: center;
}`,
      result: `<div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 20px; background: #f3f4f6; border-radius: 8px;"><div style="background: #3b82f6; color: white; padding: 12px 16px; border-radius: 6px; text-align: center;">Item 1</div><div style="background: #3b82f6; color: white; padding: 12px 16px; border-radius: 6px; text-align: center;">Item 2</div><div style="background: #3b82f6; color: white; padding: 12px 16px; border-radius: 6px; text-align: center;">Item 3</div></div>`
    }
  ]
};

export const jsData = {
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
  examples: [
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
    },
    {
      title: "배열 다루기",
      description: "JavaScript 배열의 기본 메서드들을 사용해보세요",
      language: "js" as const,
      level: "intermediate" as const,
      code: `const fruits = ['사과', '바나나', '오렌지'];

// 배열에 요소 추가
fruits.push('포도');

// 배열 필터링
const longNames = fruits.filter(fruit => fruit.length > 2);

// 배열 변환
const upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log('원본:', fruits);
console.log('긴 이름:', longNames);
console.log('대문자:', upperFruits);`,
      result: `<div style="font-family: monospace; background: #1f2937; color: #10b981; padding: 12px; border-radius: 6px;">원본: ['사과', '바나나', '오렌지', '포도']<br>긴 이름: ['바나나', '오렌지']<br>대문자: ['사과', '바나나', '오렌지', '포도']</div>`
    },
    {
      title: "DOM 조작",
      description: "JavaScript로 HTML 요소를 동적으로 변경해보세요",
      language: "js" as const,
      level: "intermediate" as const,
      code: `// 요소 선택
const button = document.getElementById('myButton');
const text = document.querySelector('.text');

// 이벤트 리스너 추가
button.addEventListener('click', function() {
  text.textContent = '버튼이 클릭되었습니다!';
  text.style.color = '#3b82f6';
  text.style.fontWeight = 'bold';
});

// 새로운 요소 생성
const newElement = document.createElement('p');
newElement.textContent = '동적으로 생성된 요소';
document.body.appendChild(newElement);`,
      result: `<div style="padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #f9fafb;"><button id="demo-btn" style="background: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 8px;">클릭해보세요</button><br><span id="demo-text" style="color: #374151;">여기에 텍스트가 변경됩니다</span></div>`
    }
  ]
};