// d is how many times we rotate
// each rotation we move the first item in arr to the last position
// we take the item with index 0 and move it to the place of item arr length -1
// we repeat it d times
// we move ALL elements one position to the left

// First idea

/**
 * Second for loop that iterates the array
 * we have some aux variables where we save the value of the element that's going to be replace
 * we move all elements to the left and the one in aux we move to the end
 *
 *
 */

// Second

/**
 * Second for loop that iterates the array from the second element to the end
 * we return a new array with elements shifted
 *
 *
 *
 */


function shift(arr, d) {

  let output = [];
  for (let i = 0; i < d; i++) {
    for (let j = 1; j < arr.length; j++) {
      output[j - 1] = arr[j]; // [2, 3, 4, 15]

      console.log(j);
    }
    output[arr.length - 1] = arr[0];
    //output.push(arr[0]);
    console.log(i);
  }

  return output;
}

console.log(shift([1, 2, 3, 4, 15], 2));

// // first iteration
// 0,1,2,3,4
// [1, 2, 3, 4, 15]

// [2, 3, 4, 15, 1]

// [2, 3, 4, 15, 1]

// // arr.push(element)
// //
