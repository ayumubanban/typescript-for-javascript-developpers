export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Atsushi";
  static lastName: string = "Ishida";

  static work() {
    // return `Hey, guys! ${Me.firstName}! Are you interested in Typescript? Let's dive into Typescript!`
    // Meに依存しないようにthisでそのクラスを参照する
    return `Hey, guys! ${this.firstName}! Are you interested in Typescript? Let's dive into Typescript!`
  }
}

// let me = new Me();
// これはじゃあ動的メンバというのか
// console.log(me.isProgrammer);
// 静的メンバは、いちいちnewしてインスタンス生成しなくても、そのメンバ変数を使えるというメリットがあるらしい
console.log(Me.isProgrammer);
console.log(Me.work());
