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
  console.log(Math.abs(righttoleft - lefttoright));
}

const matrix = [
  [1, 2, 3], // 0 0 0
  [4, 5, 6], // 1 1 1
  [9, 8, 9] // 2 2 2
];

console.log('hejka');
