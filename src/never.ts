export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test')
  console.log({ result })
} catch(error) {
  console.log({ error })
}

// void, never: 呼び元に返ってくるかどうか

let foo: void = undefined;
// let bar: never = undefined;
let bar: never = error('only me!');
