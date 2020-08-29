export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    // privateなメソッド（メンバ変数）はクラス内だとアクセスできる
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    // ageはprivateなので、Personクラスの中だけで参照できる
    // protectedなnationalityは、Personクラスを継承しているクラスでも参照できる
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile()); //=> name: Taro, age: 30
// publicだと、インスタンスに対してメソッド（メンバ変数）を参照できるよね
console.log(taro.name); //=> Taro
// console.log(taro.age);
