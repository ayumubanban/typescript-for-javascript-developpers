export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  // console.log(values);
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
//=> { accumulator: 1, currentValue: 2 }
//=> { accumulator: 3, currentValue: 3 }
//=> { accumulator: 6, currentValue: 4 }
//=> { accumulator: 10, currentValue: 5 }
//=> 15

// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// [1, 2, 3, 4].reduce(reducer);
