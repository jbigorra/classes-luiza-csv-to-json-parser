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
// if for each iteration we add i + 1, all numbers are going to move to the right
// for the last element in the array, we assign index value 0

function shift (arr, d) {
  const output = [];
  for (let i = 0; i < d; i++) {
    for (let j = 1; j < arr.length; j++) {
      output[j - 1] = arr[j]; // [2, 3, 4, 15]

      //    console.log(j);
    }
    output[arr.length - 1] = arr[0];
    // output.push(arr[0]);
    // console.log(i);
  }

  return output;
}

// console.log(shift([1, 2, 3, 4, 15], 2));

// // first iteration
// 0,1,2,3,4
// [1, 2, 3, 4, 15]

// [2, 3, 4, 15, 1]

// [2, 3, 4, 15, 1]

// // arr.push(element)
// //

function moveToLeft (arr, d) {
  const output = [];
  for (let i = 0; i < d; i++) {
    output[i] = arr[i + d];
    console.log(i);
  }

  return output;
}

console.log(moveToLeft([444, 101, 234, 55, 14], 3));

// https://www.javatpoint.com/program-to-left-rotate-the-elements-of-an-array

function arrayRotation (arr, d) {
  const finaloutput = [];
  // original array:
  for (let i = 0; i < d; i++) {
    finaloutput[i] = arr[i];
  }
  // rotation
  for (let i = 0; i < arr.length; i++) {
    const firstElement = arr[0];
    console.log(finaloutput);

    for (j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
      arr[j] = firstElement;

      console.log(j);
    }
  }

  // for (let i = 0; i < d; i++) {
  //   const lastElement = arr[i];
  //   arr[i] = arr[i + 1];
  //   finaloutput.push(lastElement);
  //   console.log(finaloutput);
  // }
}
console.log(arrayRotation([444, 101, 234, 55, 14], 3));

// https://stackoverflow.com/questions/1985260/rotate-the-elements-in-an-array-in-javascript

// first loop: d = 0,1,2,3; without the LAST item in the array
function rotationAgain (arr, d) {
  const len = arr.length;
  for (let i = 0; i < d; i++) {
    const temp = arr[0];
    console.log(temp);
    for (let i = 0; i < len; i++) {
      arr[i] = arr[i + 1];
    }
    arr[len - 1] = temp;
  }
  return arr;
}

console.log(rotationAgain([444, 101, 234, 55, 14], 4));
