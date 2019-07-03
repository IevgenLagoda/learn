const matrix = [
  [1,0,1,1],
  [1,0,0,1],
  [1,0,0,1],
  [1,0,1,0],
];

const getIslandsCount = (matrix) => {
  let currentIsland = 1;

  const mark = (rowIdx, colIdx) => {
    matrix[rowIdx][colIdx] = currentIsland;
  };

  const check = (rowIdx, colIdx) => {
    if (rowIdx < matrix.length && rowIdx >= 0 && matrix[rowIdx][colIdx] == 1) {
      mark(rowIdx, colIdx);
      check(rowIdx - 1, colIdx);
      check(rowIdx + 1, colIdx);
      for(let i = colIdx - 1; i >= 0 && matrix[rowIdx][i] == 1; i--) {
        mark(rowIdx, i);
        check(rowIdx - 1, i);
        check(rowIdx + 1, i);
      }
      for(let i = colIdx + 1; i < matrix[rowIdx].length && matrix[rowIdx][i] == 1; i++) {
        mark(rowIdx, i);
        check(rowIdx - 1, i);
        check(rowIdx + 1, i);
      }
    }
  };

  for(let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for(let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      let current = matrix[rowIdx][colIdx];
      if (current == 1) {
        currentIsland++;
        check(rowIdx, colIdx);
      }
    }
  }

  return currentIsland - 1;
};

console.log(`Number of islands: ${getIslandsCount(matrix)}`);
console.log(matrix);