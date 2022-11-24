// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

// #1
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
type Person1 = {
  name: string;
  age: number;
};

function getPerson(): void {
  // ...
}

// #3
type Hero = {
  skill: string;
}

const capt: Hero = { 
  skill: 'throwing a shield' 
}