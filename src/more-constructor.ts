export {};

class Person {
  // public name: string;
  // protected age: number;

  // コンストラクタの引数のメソッド（メンバ変数）にアクセス修飾子をつけてあげると、自動的にそのメソッド（メンバ変数）の初期化処理までやってくれるようになる
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('ハムさん', 43);
console.log(me); //=> Person { name: 'ハムさん', age: 43 }
