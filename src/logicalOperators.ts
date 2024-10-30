// 論理演算の基本
function and(a: boolean, b: boolean): boolean {
  return a && b;
}

function or(a: boolean, b: boolean): boolean {
  return a || b;
}

function not(a: boolean): boolean {
  return !a;
}

// サンプルの実行
console.log("AND (true, false):", and(true, false)); // false
console.log("OR (true, false):", or(true, false));  // true
console.log("NOT (true):", not(true));               // false
