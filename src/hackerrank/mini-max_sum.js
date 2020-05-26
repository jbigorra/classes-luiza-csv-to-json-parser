/**
 * Given five positive integers, find the minimum and maximum values that can be calculated
 * by summing exactly four of the five integers. Then print the respective minimum and maximum
 * values as a single line of two space-separated long integers.
 *
 * For example, arr = [1,3,5,7,9].
 * Our minimum sum is:  1 + 3 + 5 + 7 = 16
 *
 * and
 *
 * our maximum sum is: 3 + 5 + 7 + 9 = 24
 *
 * We would print: console.log("16 24");
 *
 *
 */

// Maxvalue: check in the array for the smallest value and exclude
// it while adding the rest of the numbers


// Minvalue: check in the array for the biggest value
// exclude it while adding the rest of the numbers
// print the result of minvalue and maxvalue

// Finding max value:
/**
 *
 *
 * maxValue = 1;
 * foreach number in Array
 *
 *    if number > maxValue
 *      maxValue = number
 *    endif
 *
 * endloop
 *
 * minValue = maxValue;
 * foreach number in Array
 *
 *  if number < minValue
 *    minValue = number;
 *  endif
 *
 * endloop
 *
 *
 *  maxAccumulator = 1;
 *  minAccumulator = 1;
 *
 *  foreach number in Array
 *      maxAccumulator += number
 *  if (maxValue === number)
 *
 *
 *  endif
 *      mixAccumulator += number
 *  if (minValue === number)
 *
 * endif;
 *
 * */


function miniMaxSum(arr) {

  let maxValue = 1;
  let maxValueIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] > maxValue) {
      maxValue = arr[i];
      maxValueIndex = i;
    }
  }

  let minValue = maxValue;
  let minValueIndex = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < minValue) {
      minValue = arr[i];
      minValueIndex = i;
    }
  }

  let maxAccumulator = 0;
  let minAccumulator = 0;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (i !== minValueIndex) {
      maxAccumulator += number;
    }
    if (i !== maxValueIndex) {
      minAccumulator += number;
    }

  }

  console.log(minAccumulator + ' ' + maxAccumulator);
}

// maxValue = 5
// minValue = 5

// [5,5,5,5,5]
//  0,1,2,3,4

// [1,2,5,5,4]
// [3,4,1,1,5]

// maxValueIndex = 0
// minValueIndex = 0

console.log(miniMaxSum([2,1,5,5,4]));
