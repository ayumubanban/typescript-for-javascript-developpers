export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January); //=> 0 -> 1
console.log(Months.February); //=> 1 -> 2
console.log(Months.December); //=> 11 -> 12

// const MonthsJs = {
//   January: 0,
//   February: 1
// }
// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({green}) //=> { green: '#008000' }

// COLORSを定義した後で追加
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

console.log(COLORS.YELLOW); //=> #FFFF00
