// task 1
// iterate over each element and to each string element in the array concatenate a number 20
// and also to each number element in the array add the index of that current element.
// result = ['asdfdsaf20', 5, 10, 12, 12, 'john20', 'house20', 'number20', 16]
// DO THIS WITH A FOR LOOP

// iterate/traverse mixedArray
// access each element
// create a variable with only strings and a variable with only numbers
// for each string element concatenate 20 at the end
// for each number add the index of the current element to its value;

const mixedArray = ['asdfdsaf', 4, 8, 9, 8, 'john', 'house', 'number', 8];

const transformedmixedArray = [];
for (let i = 0; i < mixedArray.length; i++) {
  const eachElement = mixedArray[i];
  if (typeof eachElement === 'string') {
    const concatinatedString = eachElement + 20;
    transformedmixedArray.push(concatinatedString);
  }
  if (typeof eachElement === 'number') {
    const numbersWithIndex = eachElement + i;
    transformedmixedArray.push(numbersWithIndex);
  }
}
console.log(transformedmixedArray);

// while loop

const newResultArray = [];
let i = 0;
while (i < mixedArray.length) {
  const eachArrayElement = mixedArray[i];
  if (typeof eachArrayElement === 'string') {
    const stringwith20 = eachArrayElement + 20;
    newResultArray.push(stringwith20);
  }
  if (typeof eachArrayElement === 'number') {
    const sumofnumberandindex = eachArrayElement + i;
    newResultArray.push(sumofnumberandindex);
  }
  i++;
}
console.log(newResultArray);

// task 2:
// For array1, access the first value which is 100 and put it in an accumulator variable.
// Then substract the rest of the elements left to the accumulator.
// Make sure that you use a FOR LOOP.

// result = 18
// console.log the result

const array1 = [100, 4, 10, 27, 40, 1];
let accumulator = array1[0];
for (let i = 1; i < array1.length; i++) {
  accumulator -= array1[i];
}
console.log(accumulator);

// while loop

const array2 = [100, 4, 10, 27, 40, 1];
let accumulator2 = array2[0];
let a = 1;
while (a < array2.length) {
  accumulator2 -= array2[a];
  a++;
}
console.log(accumulator2);

// Homework2:
// Given an array of words, concatenate each element to create the result below.
// Make sure to use a WHILE LOOP.

// result = "Almost before we knew it, we had left the ground."
// console.log the result

const arrayOfWords = ['Almost', 'before', 'we', 'knew', 'it', 'we', 'had', 'left', 'the', 'ground'];
let properSentence = [];

let b = 0;
while (b < arrayOfWords.length) {
  if (arrayOfWords[b] === 'it') {
    properSentence += arrayOfWords[b] + ', ';
  } else if (arrayOfWords[b] === 'ground') {
    properSentence += arrayOfWords[b] + '.';
  } else {
    properSentence += arrayOfWords[b] + ' ';
  }
  b++;
}
console.log(properSentence);

// Homework3:
// Given a sentence string iterate over each character and concatenate them
// and everytime you encounter a comma (,) save the piece of string before the comma and push it into
// the result array.
// Constrains: YOU CANNOT USE SPLIT and YOU MUST USE A FOR LOOP
// hint: you can iterate over a string just like over an array

// result = ['Almost', 'before', 'we', 'knew', 'it', 'we', 'had', 'left', 'the', 'ground'];
// console.log the result

const sentence = 'Almost, before, we, knew, it, we, had, left, the, ground';
let words = '';
const finalSentence = [];

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === ',') {
    finalSentence.push(words);
    words = ''; // why we put this empty string here?
  } else if (sentence[i] === '') {
    continue;
  } else {
    words += sentence[i];
    if (i === sentence.length - 1) {
      finalSentence.push(words);
    }
  }
}
console.log(finalSentence);
