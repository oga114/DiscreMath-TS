// グラフ理論

// サンプルを実行
// npx ts-node src/graphTheory.ts

class Graph {
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1); // 無向グラフの場合
  }

  displayGraph(): void {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}

// 使用例
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.displayGraph();
