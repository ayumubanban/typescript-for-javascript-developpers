export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };

// 上のコメントされてるtypeと全く同じ型が生成されるようになる
// Partialで、定義されてるプロパティは全部optionalとなる
type PartialType = Partial<Profile>;
// Requiredで、定義されてるプロパティは全部必須となる
type RequiredType = Required<Profile>;
