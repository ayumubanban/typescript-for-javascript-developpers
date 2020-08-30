export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1,2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

/**
 * Obtain the return type of a function type
 */
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
