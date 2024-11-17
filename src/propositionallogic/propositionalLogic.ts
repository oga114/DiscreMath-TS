// 命題論理の基本演算

// サンプルを実行
// npx ts-node src/propositionallogic/propositionalLogic.ts


// AND演算: 両方がtrueの場合にのみtrueを返す
function and(a: boolean, b: boolean): boolean {
  return a && b;
}

// OR演算: 少なくとも片方がtrueならtrueを返す
function or(a: boolean, b: boolean): boolean {
  return a || b;
}

// NOT演算: 入力がtrueならfalseを、falseならtrueを返す
function not(a: boolean): boolean {
  return !a;
}

// XOR演算（排他的論理和）: 異なる場合にtrueを返す
function xor(a: boolean, b: boolean): boolean {
  return a !== b;
}

// 含意演算 (A → B): AがtrueでBがfalseの場合にのみfalseを返す
function implies(a: boolean, b: boolean): boolean {
  return !a || b;
}

// サンプルの論理値
// AとBの値を変更して試してみましょう
const A = true;
const B = false;

// 論理式の例: (AかつB)または¬A
const result = or(and(A, B), not(A));

// 各演算の出力
console.log("AND (A, B):", and(A, B));
console.log("OR (A, B):", or(A, B));
console.log("NOT A:", not(A));
console.log("XOR (A, B):", xor(A, B));
console.log("A implies B:", implies(A, B));
console.log("(AかつB)または¬A:", result);

// ここまで終了したら以下の課題に進んでください。
// src/exercises/propositionallogicExercises.ts
