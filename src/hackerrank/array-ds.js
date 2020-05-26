// Complete the reverseArray function below.
// A[i]
function reverseArray(a) {
  let reversed = [];
  const n = a.length - 1;
  for (let i = n; i >= 0; i--) {
    // i will start from 8,
    reversed.push(a[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 15, 6, 17, 8, 19]));


// Without backwards forloop
// we get the last index meaning the index of the last element within the length of the array
// the last index is the starting point

function reverseArray2(a) {
  let reversed = [];
  const k = a.length - 1;
  for (let i = 0; i < a.length; i++) {
    reversed.push(a[k - i]);
  }
  return reversed;
}

console.log(reverseArray2([1, 2, 3, 4, 15, 6, 17, 8, 19]));// k = 8, index = k - 1;


function reverseArray3(arr = []) {
  return arr.reverse();
}

console.log(reverseArray3([1, 2, 3, 4, 15, 6, 17, 8, 19]));
