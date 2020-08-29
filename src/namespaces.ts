export {};

namespace Japanese {
  export namespace Tokyo {
    // exportで外の空間からアクセスできるようにする
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public middleName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('ハムさん');
console.log(me.name); //=> ハムさん
const meOsaka = new Japanese.Osaka.Person('ハムやん');
console.log(meOsaka.name); //=> ハムやん

const micheal = new English.Person('Michael', 'Joseph', 'Jackson' )
console.log(micheal);
// => Person {
//   firstName: 'Michael',
//   lastName: 'Joseph',
//   middleName: 'Jackson'
// }
