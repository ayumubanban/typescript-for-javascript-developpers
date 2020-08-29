export {};

let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham']; // 型の順序性にも制約を持たせる。
// んで、このタプル型では型推論は出ないので、自ら明示的に定義してやらんとあかん
