export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// }

// <T> これで、抽象的な型となるジェネリクスを宣言している。慣習としてTがよく用いられているらしい。このTは型引数と呼ばれるものらしい
const echo = <T>(arg: T): T => {
  return arg;
};

// Tにnumberという具体的な型、argに100を指定
console.log(echo<number>(100)); //=> 100
console.log(echo<string>('Hello!')); //=> Hello!
console.log(echo<boolean>(true)); //=> true

// class Mirror {
//   constructor(public value: number) {}

//   echo(): number {
//     return this.value;
//   }
// }

// console.log(new Mirror(123).echo());

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());
