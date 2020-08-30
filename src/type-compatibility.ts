export {};

let fooCompatible: any;
let barCompatible: string = 'Typescript';

console.log(typeof fooCompatible); //=> undefined

// any型はstring型と互換性がある
fooCompatible = barCompatible;

// fooCompatibleはstring型になる
console.log(typeof fooCompatible); //=> string

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animai {
  // age: number;
  name: string;
}

class Person {
  // constructor(public age: number) {}
  constructor(public age: number, public name: string) {}
}

// これに関連するのが構造的部分型と呼ばれるものらしい
let me: Animai;
// 代入する側が、される側で定義されている型・変数を持っている必要がある
// me = new Person(43);
me = new Person(43, 'HamSan');
