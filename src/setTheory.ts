// 集合の操作
// 実行
// npx ts-node src/setTheory.ts

// 集合の定義
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// 和集合
function union<T>(set1: Set<T>, set2: Set<T>): Set<T> {
  return new Set([...set1, ...set2]);
}

// 積集合
function intersection<T>(set1: Set<T>, set2: Set<T>): Set<T> {
  return new Set([...set1].filter(x => set2.has(x)));
}

// 差集合
function difference<T>(set1: Set<T>, set2: Set<T>): Set<T> {
  return new Set([...set1].filter(x => !set2.has(x)));
}

// サンプルの実行
console.log("Union:", union(setA, setB));              // {1, 2, 3, 4}
console.log("Intersection:", intersection(setA, setB)); // {2, 3}
console.log("Difference:", difference(setA, setB));     // {1}
