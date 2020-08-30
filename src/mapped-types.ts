export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>; // Partial: Make all properties in T optional
// /**
//  * Make all properties in T optional
//  */
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
type PropertyTypes = keyof Profile; // type PropertyTypes = "name" | "age"

type Optional<T> = {
  // Mapped Types
  [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
