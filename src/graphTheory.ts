// グラフの定義
type GraphNode = string;
type Graph = Record<GraphNode, GraphNode[]>;

// グラフの例
const graph: Graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"]
};

// 隣接ノードを取得
function getNeighbors(graph: Graph, node: GraphNode): GraphNode[] {
  return graph[node];
}

// サンプルの実行
console.log("Neighbors of A:", getNeighbors(graph, "A")); // ['B', 'C']
console.log("Neighbors of D:", getNeighbors(graph, "D")); // ['B', 'C']
