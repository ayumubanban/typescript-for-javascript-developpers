export {};

class Mahotsukai {}
class Souryo {}

// TSは単一継承ができる。多重継承はできない
// が、複数のインターフェースを継承するような（実装する）ことは許可されている
class Taro extends Mahotsukai {}

interface Kenja {
  // 処理の実態がわからないようなメソッドの宣言を、シグネチャというらしいが…
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void{
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
