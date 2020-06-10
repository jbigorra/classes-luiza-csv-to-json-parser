/** This is a summary of all topics tackled during classes - explained in a nutshell
 List of contents:
 1. Find elements in array
a) sum of elements, sum of numbers in array with mixed types of data
b) biggest element
c) smallest element
d) last element
e) change array to string and vice versa
f) accumulators/concatination - which type for thich data type
g) indexOf

2. More complex loops
a) nested loops (matrix, stairs, left rotation)

 */

// 1. a) find the sum of elements in array
const firstTaskElements = [1, 4, 5, 7, 2, 22, 1000];
let sumValue = 0;

for (let i = 0; i < firstTaskElements.length; i++) {
  sumValue += firstTaskElements[i];
}
console.log(sumValue);

// array with mixed types of data, find the sum of numbers

const mixedData = ['hello', 5, 10, 15, 'luiza', 20, 100];
let sumfromMixed = 0;

for (let i = 0; i < mixedData.length; i++) {
  if (typeof mixedData[i] === 'number') {
    sumfromMixed += mixedData[i];
  }
}
console.log(sumfromMixed);

// find only numbers from mixedData and push them into an array

const arrayOfNumbers = [];
for (let i = 0; i < mixedData.length; i++) {
  if (typeof mixedData[i] === 'number') {
    arrayOfNumbers.push(mixedData[i]);
  }
}
console.log(arrayOfNumbers);

// find only strings and push them into an array, how many elements are there?

const arrayofStrings = [];
let sumofStrings = 0;
for (let i = 0; i < mixedData.length; i++) {
  if (typeof mixedData[i] === 'string') {
    arrayofStrings.push(mixedData[i]);
    sumofStrings++;
  }
}
console.log(arrayofStrings);
console.log(sumofStrings);

// 1b) find the biggest element

const arrayWithManyNumbers = [3, 2, 5, 8, 1, 150, 50, 76, 80];

let maxNumber = 0;
for (let i = 0; i < arrayWithManyNumbers.length; i++) {
  if (arrayWithManyNumbers[i] > maxNumber) {
    maxNumber = arrayWithManyNumbers[i];
  }
} console.log(maxNumber);

// 1c) find the smallest element and its index
let minNumber = maxNumber;
let indexminNumber = 0;
for (let i = 0; i < arrayWithManyNumbers.length; i++) {
  if (arrayWithManyNumbers[i] <= minNumber) {
    minNumber = arrayWithManyNumbers[i];
    indexminNumber = i;
  }
} console.log(indexminNumber);

// 1d) find last element

const randomArray = [15, 16, 'sometext', 39458, 1, 'hellodog'];
const lastElementofArray = randomArray[randomArray - 1];
console.log(randomArray.slice(-1));

console.log(lastElementofArray);
// how to find the biggest index in the array?

// 1 e) change array to string and vice versa
const firstArray = ['blablabla', 4, 2, 'hehe', 85];
const firstString = 'lalala 123';

const arraytoString = firstArray.join();
console.log(arraytoString);
const stringtoArray = firstString.split();
console.log(stringtoArray);
