export {};

abstract class Animal {
  // 抽象メソッドは抽象クラス内でのみ使用できる
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  // 抽象クラスを継承しているクラスの中で、その抽象クラス内で定義されている抽象メソッドと同じ名前のメソッドを定義してやらんとエラーになる
  cry() {
    return "grrrr";
  }
}
