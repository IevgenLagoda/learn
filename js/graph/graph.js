class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Set();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.add(v, []);
    }
  }

  addEdge(v, w) {
    if (!this.adjList.has(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.has(w)) {
      this.addVertex(w);
    }
    const a = this.adjList[v];
    a.push[w];
    if (!this.isDirected) {
      const a = this.adjList[w];
      a.push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for(const v of this.vertices){
      s += `${v} ->`;
      for(const n of this.adjList[v]) {
        s += `${n} `;
      }
      s += '\n';
    }
    return s;
  }
}

const grpah = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E'];
for(const v of myVertices) {
  grpah.addVertex(v);
}

grpah.addEdge('A', 'B');
grpah.addEdge('A', 'C');
grpah.addEdge('A', 'D');
grpah.addEdge('C', 'D');
grpah.addEdge('C', 'E');
console.log(grpah);