function plus1(a, b) {
    return a + b;
}
plus(10, 20);
// ts 파일은 아직까지 브라우저가 바로 인식할 수 없다.
// 컴파일: tx 파일을 js파일로 변환하는 작업
// 터미널에서 tsc index.ts 입력하면 index.js라는 파일이 새로 생기고 이 파일로 브라우저에서 확인가능
// 매번 tsc 명령어로 확인하기는 번거로우니 webpack(알아두면 좋음)이라는 번들러 혹은 웹 자동화 도구들을 알고있으면 자동화 가능