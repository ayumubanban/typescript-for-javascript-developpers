export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3]; // こっちの配列の型の当て方は非推奨らしい
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['Typescript', 'Javascript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

let Hairetsu: (string | number | boolean)[] = [1, false, "Japan"];
