export {};

// tsconfig.jsonで "strictNullChecks": false としてもいけるが、全ての変数がnullableになっちゃうので、あまり健全ではない…

let profile: { name: string, age: number | null } = {
  name: 'Ham',
  age: null
}

// profile = null;
