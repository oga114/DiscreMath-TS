// 述語論理（Predicate Logic）
// サンプルを実行
// npx ts-node src/predicateLogic/predicateLogic.ts


// 型定義
type Person = {
  name: string;
  isStudent: boolean;
};

// 述語
function isStudent(person: Person): boolean {
  return person.isStudent;
}

// サンプルデータ
const people: Person[] = [
  { name: "Alice", isStudent: true },
  { name: "Bob", isStudent: true },
  { name: "Charlie", isStudent: false }
];

// 「全ての人が学生か」を判定
const allAreStudents = people.every(isStudent);
console.log("All are students:", allAreStudents); // false


// 全称量化子 (For all)
function forAll<T>(array: T[], predicate: (item: T) => boolean): boolean {
  return array.every(predicate);
}

// 存在量化子 (There exists)
function exists<T>(array: T[], predicate: (item: T) => boolean): boolean {
  return array.some(predicate);
}

// 使用例
const allStudents = forAll(people, isStudent);
const someStudents = exists(people, isStudent);

console.log("For all are students:", allStudents); // false
console.log("There exists a student:", someStudents); // true
