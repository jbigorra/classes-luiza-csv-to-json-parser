// exercises with multiple loops:
// 1. Diagonal Difference (hackerrank)
// 2. custom practice based on Diagonal Difference
// 3. mini-max-sum (Hackerrank)

// 1. Diagonal Difference

function diagonalDifference (matrix) {
  let lefttoright = 0;
  let righttoleft = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let k = 0; k < row.length; k++) {
      const elementofRow = row[k];

      if (i === k) {
        lefttoright += elementofRow;
      }
      const lastIndexofElement = row.length - 1;

      if (k === (lastIndexofElement - i)) {
        righttoleft += elementofRow;
      }
    }
  }
  return Math.abs(righttoleft - lefttoright);
}

const matrix = [
  [1, 2, 5], // 0 0 0
  [8, 1, 6], // 1 1 1
  [5, 7, 9] // 2 2 2
];

console.log(diagonalDifference(matrix));
