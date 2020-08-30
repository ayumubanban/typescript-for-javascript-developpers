export {};

/**
 * Exclude from T those types that are assignable to U
 */
// type Exclude<T, U> = T extends U ? never : T;
// type MyExclude<T> = T extends string | number ? never : T;
// ref: https://www.typescriptlang.org/docs/handbook/advanced-types.html#distributive-conditional-types
type MyExclude =
  | (string extends string | number ? never : string) //never
  | (number extends string | number ? never : number) // never
  | (DebugType extends string | number ? never : DebugType); // DebugType

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
