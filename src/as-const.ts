export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro'; // 型 '"Hamtaro"' を型 '"Ham"' に割り当てることはできません。
// letで定義されてる変数だが、実質const、定数だよね
nickname = 'Ham';

// このようにas constを使うことで、オブジェクトの全てのプロパティがreadonlyになる。ちなみにnestされてるプロパティも含めて、全部readonlyになるらしい。
let profile = {
  name: 'Atsushi',
  height: 178,
  hoge: {
    huga: 56,
    fuu: {
      haa: 'hii'
    }
  }
} as const;

// profile.name = 'Ham'; // 読み取り専用プロパティであるため、'height' に代入することはできません。
// profile.height = 180; // 読み取り専用プロパティであるため、'height' に代入することはできません。
