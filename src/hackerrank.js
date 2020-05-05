// task 1
// https://www.hackerrank.com/challenges/simple-array-sum/problem
const array3 = [1, 2, 3, 4];
let sumofarray3 = 0;

for (let i = 0; i < array3.length; i++) {
  sumofarray3 += array3[i];
}
console.log(sumofarray3);

//
function simpleArraySum(ar) {

  let sumofarray = 0;

  for (let i = 0; i < ar.length; i++) {
    sumofarray += ar[i];
  }

  return sumofarray;
}

// https://www.khanacademy.org/


// Complete the plusMinus function below.
// arr is an array with numbers which could be -, 0, +;
// create a loop that will iterate over array and
// get separately - (to the accumulator)
// 0 - to the accumulator
// + - to the accumulator
// then we divide the length of the array tbc

function plusMinus(arr) {

  let negativeNumbers = 0;
  let neutral = 0;
  let positiveNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    if (arrElement < 0) {
      negativeNumbers = negativeNumbers + 1;
    } else if (arrElement === 0) {
      neutral = neutral + 1;
    } else {
      positiveNumbers = positiveNumbers + 1;
    }
  }

  const negativeRatio = (negativeNumbers / arr.length).toFixed(6);
  const zeroRatio = (neutral / arr.length).toFixed(6);
  const positiveRatio = (positiveNumbers / arr.length).toFixed(6);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}
const result = plusMinus([-4, 3, -9, 0, 4, 1]); // 2/6, 1/6, 3/6

const sum = (x, y) => x + y;
const substract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;


/**
 *
 * for each item in array
 *  if item is less than zero
 *    then increase negative count by one
 *
 *   if item is equal to zero
 *     then increase zero count by one
 *
 *   if item is greater than zero
 *      then increase positive count by one
 *
 * end loop
 *
 * negativeRatio is negativeNumbers divided by arr.length
 * neutralRatio is neutral divided by arr.length
 * positiveRatio is positiveNumbers divided by arr.length
 *
 * console.log each ratio
 *
 */



 /**
  *
  * The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .
  *
  * input: 6
  *
  * output:
  *
  *       #
         ##
        ###
       ####
      #####
     ######
  *
  * the length of the loop would be the input value
  * each iteration would add one more # to the hashtag accumulator
  * loop ends when it reaches the input value length
  * console.log the result
  *
  *  input is the length of the loop
  *  hashtagAccumulator = "";
  *
  *   for i = 0 to i < 6
  *    hashtagAccumulator += "#" + \n;
  *
  *
  *   add one hashtag instead of space
  *   the last iteration equals the length of the input and cannot have spaces
  *
  *
  */

  /**
   * im heeereeeee
   *
   *
   *
   *
   */



var stringWithEndOfLine = "";
// First iteratioon
stringWithEndOfLine += stringWithEndOfLine  + "#";  // 0
stringWithEndOfLine += "\n";
// save the first iteration and add end of line
// we go to the 2nd iteration with the result of the 1st and we add end of result

// Second iteration
stringWithEndOfLine += stringWithEndOfLine  + "#";  // 0
stringWithEndOfLine += "\n";

console.log(stringWithEndOfLine);
// heelloo0ooo

let steps = "";
let staircase = "";
for (let i = 0; i < 6; i++) {
  steps += "#";
  staircase += steps + "\n";
}

console.log(staircase);

for (let i = 5; i <= 0; i--) {

}
