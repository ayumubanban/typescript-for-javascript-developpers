export {};

// このbmi自体にも型をつけてあげる。height: number, weight: numberを引数に持ち、numberを返す関数としてね。
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
