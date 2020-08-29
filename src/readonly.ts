export {};

class VisaCard {
  // 読み取り専用
  // readonly owner: string;

  // publicは省略してreadonlyのみ書いてもこれはpublicとなる
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard('ハムさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
