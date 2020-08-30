export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

/**
 * Construct a type with the properties of T except for those in type K.
 */
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
