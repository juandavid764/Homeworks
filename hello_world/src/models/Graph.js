export class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1); // No dirigido
  }

  searchNode(node) {
    if (!this.nodes.length) return;
    return this.nodes.find((n) => n === node);
  }

  printAdjacency(node) {
    if (this.searchNode(node)) {
      console.log(this.adjList[node]);
    }
  }

  printGraph() {
    console.log(this.adjList);
  }

  getPeopleInCity(city) {
    if (!this.searchNode(city)) return [];
    return this.adjList[city].filter((node) => isNaN(node)); 
  }
}
