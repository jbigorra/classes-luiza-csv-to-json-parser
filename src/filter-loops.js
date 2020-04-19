const mixedArray = ['asdfdsaf', 4, 8, 9, 8, 'john', 'house', 'number', 8];

// Filter string values using a for loop
// 1. create let result
// 2. make a conditional (loop) if it is a string then get the value of it and push into result variable
// if not a string, ignore (return nothing)
const stringResult = [];

for (let i = 0; i < mixedArray.length; i++) {
  const element = mixedArray[i];
  if (typeof element === 'string') {
    stringResult.push(element);
  }
};

console.log(stringResult);

// Filter number values using a while loop

const numberResult = [];
let i = 0;
while (i < mixedArray.length) {
  const numberElement = mixedArray[i];
  if (typeof numberElement === 'number') {
    numberResult.push(numberElement);
  }
  i++;
};
console.log(numberResult);

// Get indexes fo number 8 numberResult array. With a for loop.
// indexesOfRepeatedNumbers = [1,3,4]

const indexesOfRepeatedNumbers = [];

for (let i = 0; i < numberResult.length; i++) {
  console.log(i);
  if (numberResult[i] === 8) {
    indexesOfRepeatedNumbers.push(i);
  }
}

console.log(indexesOfRepeatedNumbers);

// Sum each element of the array indexesOfRepeatedNumbers and get the total amount. With a while loop
// totalAmount = 8

// add each element

let a = 0;
let accumulator = 0;
while (a < indexesOfRepeatedNumbers.length) {
  accumulator += indexesOfRepeatedNumbers[a];
  a++;
};

//
//
//
console.log(accumulator);

// const mixedArray = ['asdfdsaf', 4, 8, 9, 8, 'john', 'house', 'number', 8];
// iterate over each element and to each string element in the array concatenate a number 20
// and also to each number element in the array add the index of that current element.
// result = ['asdfdsaf20', 5, 10, 12, 12, 'john20', 'house20', 'number20', 16]
// DO THIS WITH A FOR LOOP

// iterate/traverse mixedArray
// access each element
// create a variable with only strings and a variable with only numbers
// for each string element concatenate 20 at the end
// for each number add the index of the current element to its value;
const transformedArray = [];

for (let b = 0; b < mixedArray.length; b++) {
  const eachElement = mixedArray[b];
  if (typeof eachElement === 'string') {
    const concatinatedStringWith20 = eachElement + 20;
    // add 20 at the end of the string
    // push into the transformedArray
    transformedArray.push(concatinatedStringWith20);
  }
  if (typeof eachElement === 'number') {
    const numbersWithTheirIndexes = eachElement + b;
    // we need to get the index of each and add it to the value
    // push into the transformedArrayt
    transformedArray.push(numbersWithTheirIndexes);
  }
};

console.log(transformedArray);
// ['asdfdsaf20', 5, 10, 12, 12, 'john20', 'house20', 'number20', 16]

// --------------

// Homework 1:
// For array1, access the first value which is 100 and put it in an accumulator variable.
// Then substract the rest of the elements left to the accumulator.
// Make sure that you use a FOR LOOP.

// result = 18
// console.log the result

const array1 = [100, 4, 10, 27, 40, 1];
let accumulatorTotal = array1[0];
for (let c = 1; c < array1.length; c++) {
  accumulatorTotal -= array1[c];
}

console.log(accumulatorTotal);

// DONE, RESULT 18

// Homework2:
// Given an array of words, concatenate each element to create the result below.
// Make sure to use a WHILE LOOP.

// result = "Almost before we knew it, we had left the ground."
// console.log the result

// 1. iterate over each element

const arrayOfWords = ['Almost', 'before', 'we', 'knew', 'it', 'we', 'had', 'left', 'the', 'ground'];
let fullSentence = '';
let d = 0;
while (d < arrayOfWords.length) {
  if (arrayOfWords[d] === 'it') {
    fullSentence += arrayOfWords[d] + ', ';
  } else if (arrayOfWords[d] === 'ground') {
    fullSentence += arrayOfWords[d] + '.';
  } else {
    fullSentence += arrayOfWords[d] + ' ';
  }
  d++;
};
console.log(fullSentence);
// console.log(arrayOfWords);

// Homework3:
// Given a sentence string iterate over each character and concatenate them
// and everytime you encounter a comma (,) save the piece of string before the comma and push it into
// the result array.
// Constrains: YOU CANNOT USE SPLIT and YOU MUST USE A FOR LOOP
// hint: you can iterate over a string just like over an array

// result = ['Almost', 'before', 'we', 'knew', 'it', 'we', 'had', 'left', 'the', 'ground'];
// console.log the result

// steps:
// 1) We need the empty result array - done
// 2) iterate over each character of the string and concatenate - done
// 3) if a comma is found then we save the part before the comma in emptyResult by pushing

const sentence = 'Almost, before, we, knew, it, we, had, left, the, ground';
const result = [];
let wordAccumulator = '';

console.log(sentence.length);

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === ',') {
    result.push(wordAccumulator);
    wordAccumulator = '';
  } else if (sentence[i] === ' ') {
    continue;
  } else {
    wordAccumulator += sentence[i];
    if (i === sentence.length - 1) {
      result.push(wordAccumulator);
    }// ground
  }
  console.log(wordAccumulator);
}

console.log(result);

// https://www.hackerrank.com/
// Quokka.js

// Saturday 11am
//
