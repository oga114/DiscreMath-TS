// 状態と遷移
type State = "q1" | "q2" | "q3";
type Input = "0" | "1";
type TransitionTable = Record<State, Record<Input, State>>;

const transitionTable: TransitionTable = {
  q1: { "0": "q1", "1": "q2" },
  q2: { "0": "q3", "1": "q2" },
  q3: { "0": "q2", "1": "q3" }
};

// オートマトン実行
function finiteAutomaton(inputString: string, initialState: State): State {
  let currentState = initialState;
  for (const char of inputString) {
    currentState = transitionTable[currentState][char as Input];
  }
  return currentState;
}

// サンプルの実行
console.log("Final State (input: '101'):", finiteAutomaton("101", "q1")); // q2
console.log("Final State (input: '110'):", finiteAutomaton("110", "q1")); // q3
