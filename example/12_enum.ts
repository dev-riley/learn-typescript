// 숫자형 이넘
// 한 속성에 특정 숫자를 지정했을 때, 다음 속성부터 하나씩 증가한다. 
enum Shoes1 {
  Nike = 10,
  Adidas
}

var myShoes = Shoes1.Nike;
console.log(myShoes); // 0

// 문자형 이넘
enum Shoes2 {
  Nike = '나이키',
  Adidas = '아디다스'
}

var yourShoes = Shoes2.Nike;
console.log(yourShoes); // '나이키'

// 이넘 활용 사례
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}
// askQuestion이라는 함수에서는 parameter answer의 타입을 이넘 Answer라고 지정해줬기 때문에
// 이넘에서 제공되는 값만 넘길 수 있다.
askQuestion(Answer.Yes);
// askQuestion('예스');