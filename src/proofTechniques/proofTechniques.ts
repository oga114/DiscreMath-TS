// 証明技術

// サンプルを実行
// npx ts-node src/proofTechniques/proofTechniques.ts

// 直接証明
function isEven(n: number): boolean {
  return n % 2 === 0;
}

function isSquareEven(n: number): boolean {
  // 偶数である場合、その2乗も偶数であることを確認
  if (isEven(n)) {
    return isEven(n * n);
  }
  return false;
}

// 使用例
const num = 4;
console.log(`Number ${num} is even: ${isEven(num)}`); // true
console.log(`Square of ${num} is even: ${isSquareEven(num)}`); // true

// 間接証明（背理法）
function doesNotContain<T>(array: T[], element: T): boolean {
  return !array.includes(element);
}

function proofByContradiction<T>(array: T[], element: T): boolean {
  if (doesNotContain(array, element)) {
    // 矛盾を導く
    console.log(`Array does not contain element ${element}.`);
    return true;
  } else {
    console.log(`Contradiction: Array contains element ${element}.`);
    return false;
  }
}

// 使用例
const arr = [1, 2, 3];
const elementToCheck = 4;
console.log(proofByContradiction(arr, elementToCheck)); // true


// 帰納法
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 帰納的にフィボナッチ数列のn番目の数を計算
const n = 5;
console.log(`Fibonacci(${n}) = ${fibonacci(n)}`); // Fibonacci(5) = 5


// 型システムを使った証明の一部の代用

type PositiveNumber = number & { __positive: true };

function createPositiveNumber(n: number): PositiveNumber | null {
  if (n > 0) {
    return n as PositiveNumber;
  }
  return null;
}

function squarePositiveNumber(n: PositiveNumber): PositiveNumber {
  return (n * n) as PositiveNumber;
}

// 使用例
const positiveNum = createPositiveNumber(5);
if (positiveNum) {
  console.log(`Square of ${positiveNum} is ${squarePositiveNumber(positiveNum)}`);
} else {
  console.log("Provided number is not positive.");
}
