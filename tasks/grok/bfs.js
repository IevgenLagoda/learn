var nodes = [
  {
    children: [1],
    isValid: false,
    visited: false,
  }, {
    children: [0, 2],
    isValid: true,
    visited: false,
  },
  {
    children: [],
    isValid: false,
    visited: false,
  },
];

function bfs(start, callback) {
  let res = null;
  let listToExplore = [start];
  nodes[start].visited = true;

  while (listToExplore.length > 0) {
    let nodeIndex = listToExplore.shift();
    if (callback) {
      if (callback(nodes[nodeIndex])) {
        res = nodes[nodeIndex];
        return res;
      }
    }
    nodes[nodeIndex].children.forEach(childIndex => {
      if (nodes[childIndex] && !nodes[childIndex].visited) {
        if (callback) {
          if (callback(nodes[childIndex])) {
            listToExplore = [];
            res = nodes[childIndex];
            return true;
          }
        }
        nodes[childIndex].visited = true;
        listToExplore.push(childIndex);
      }
    });
  }
  return res;
};

const isValid = (node) => node.isValid;

res = bfs(0, isValid);
//console.log(nodes);
console.log(res);