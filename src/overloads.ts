export {};

// signature シグネチャー ??? 調べたら インデックス シグネチャー しか出てこんのやけども…
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    // signatureで定義してるので、これはstring型しか返されないよね
    return value + value;
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
