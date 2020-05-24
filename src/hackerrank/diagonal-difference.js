function diagonalDifference (matrix) {
  let diagonalLeftoRight = 0;
  let diagonalRighttoLeft = 0;

  for (let i = 0; i < matrix.length; i++) { // i => 0 to 3
    const row = matrix[i];

    for (let k = 0; k < row.length; k++) { // k = 0 to 3
      const element = row[k];

      if (i === k) {
        diagonalLeftoRight += element;
        // console.log(diagonalLeftoRight);
      }

      const lastIndexOfElement = row.length - 1;

      if (k === (lastIndexOfElement - i)) { // i = 0 ;
        diagonalRighttoLeft += element;
        // console.log(diagonalRighttoLeft);
      }
    }
  }

  console.log(Math.abs(diagonalRighttoLeft - diagonalLeftoRight));
}

const matrix = [
  [1, 2, 3], // 0 0 0
  [4, 5, 6], // 1 1 1
  [9, 8, 9] // 2 2 2
];

const matrixOfData = [
  ['Juan', 'Luiza', 'Nacho'],
  ['32', '25', '34'],
  ['Address 1', 'Address 2', 'Address 3']
];

const obj = {
  names: '',
  ages: '',
  addreses: ''
};

for (let i = 0; i < matrixOfData.length; i++) {
  const data = matrixOfData[i];

  for (let k = 0; k < data.length; k++) {
    const element = data[k];
    if (i === 0) {
      obj.names += element + ',';
    }
    if (i === 1) {
      obj.ages += element + ',';
    }
  }
}

console.log(obj);

// left to right:
// each iteration we move +1
// right to left:
// each iteration we move -1

// console.log(matrix[0]);
// console.log(matrix[1]);
// console.log(matrix[2]);

console.log(diagonalDifference(matrix));

const diagonal1 = 1 + 5 + 9; // 15
const diagonal2 = 9 + 5 + 3; // 17

const result = Math.abs(diagonal1 - diagonal2);

console.log(result);

// if (i === 0 && k === row.length - 1) { // 2
//   diagonalRighttoLeft += element;
//   console.log(diagonalRighttoLeft);
// }
// if (i === 1 && k === row.length - 2) { // 2
//   diagonalRighttoLeft += element;
//   console.log(diagonalRighttoLeft);
// }
// if (i === 2 && k === row.length - 3) { // 3
//   diagonalRighttoLeft += element;
//   console.log(diagonalRighttoLeft);
// }
// if (i === 3 && k === row.length - 4) { // 4
//   diagonalRighttoLeft += element;
//   console.log(diagonalRighttoLeft);
// }
