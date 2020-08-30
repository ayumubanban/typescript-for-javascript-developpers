export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
}

debugProfile('Ham', 43);

// tuple 型
type Profile = Parameters<typeof debugProfile>;
console.log(typeof debugProfile); // function

/**
 * Obtain the parameters of a function type in a tuple
 */
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);
console.log({profile});
