
const mixedArray = ['asdfdsaf', 4, 8, 9, 3, 'john', 'house', 'number', 8];
// task 1
// Filter string values using a for loop
// 1. create let result
// 2. make a conditional (loop) if it is a string then get the value of it and push into result variable
// if not a string, ignore (return nothing)

const result = [];
for (let i = 0; i < mixedArray.length; i++) {
  const stringElement = mixedArray[i];
  if (typeof stringElement === 'string') { result.push(stringElement); }
}
console.log(result);

// task 2
//  Filter number values using a while loop

const numbersFromArray = [];
let i = 0;
while (i < mixedArray.length) {
  const numberValue = mixedArray[i];
  if (typeof numberValue === 'number') {
    numbersFromArray.push(numberValue);
  }
  i++;
};
console.log(numbersFromArray);

// task 3
// Get indexes fo number 8 numberResult array. With a for loop.

const repeatedNumbereight = [];
for (let i = 0; i < numbersFromArray.length; i++) {
  if (numbersFromArray[i] === 8) {
    repeatedNumbereight.push(i);
  }
};
console.log(repeatedNumbereight);

// task 4
// Sum each element of the array repeatedNumbereight and get the total amount. With a while loop
// totalAmount = 5

// for loop

// repeatedNumbereight is from this array: 4, 8, 9, 3, 8;
// so the indexes: 1, 4
let accumulator = 0;
for (let i = 0; i < repeatedNumbereight.length; i++) {
  accumulator += repeatedNumbereight[i];
}
console.log(accumulator);
// RESULT: 14

// while loop
let a = 0;
let summary = 0;
while (a < repeatedNumbereight.length) {
  summary += repeatedNumbereight[a];
  a++;
};
console.log(summary);
