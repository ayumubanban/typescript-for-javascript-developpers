export {};

let name: any = 'Ham';

// let length: number = name.length;
// 型アサーション
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length; //JSXと記法がにているので、これは推奨されてないらしい。asで型アサーションする方が良いっぽい

// length = 'foo';
