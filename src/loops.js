const arrayWithNumbers = [14, 16, 22, 15, 5];

// Logs the full array
console.log('Full array:');
console.log(arrayWithNumbers);
console.log('\n');

// Log manually each item of the array
console.log('Each item manually:');
console.log(arrayWithNumbers[0]);
console.log(arrayWithNumbers[1]);
console.log(arrayWithNumbers[2]);
console.log(arrayWithNumbers[3]);
console.log(arrayWithNumbers[4]);
console.log('\n');

// Log each item of the array dynamically with a for loop
console.log('Each item with for loop: array length is: ' + arrayWithNumbers.length + '\n');
for (let i = 0; i < arrayWithNumbers.length; i++) {
  // Accessing each element of arrayWithNumbers.
  // Explanation: On each iteration variable "i" is increasing its value by 1.
  // which means, we can use the "i" to access each element of the array dynamically.
  console.log(`i = ${i} and arrayWithNumbers[${i}]: ${arrayWithNumbers[i]}`);
  console.log(arrayWithNumbers[i]);
}

console.log('\n');

// when I use const instead of var/let; I am declaring a variable with value that can't be changed
// meaning I can't reasign a new object/string etc.
// when I declare const within a scope of for loop/function etc it exists only inside of the for loop;
// whenever I put a condition with for loop, it has to be > or < , eventually <= never === !!!!!!!!!!!

// Log each item of the array dynamically with a while loop
// when using a while loop the index declaration has to be outside of while loop
// and the increasing of the index has to be done inside of the while loop
console.log("Each item with 'while' loop: array length is: " + arrayWithNumbers.length + '\n');

let index = 0;
while (index < arrayWithNumbers.length) {
  // Accessing each element of arrayWithNumbers.
  // Explanation: On each iteration variable "i" is increasing its value by 1.
  // which means, we can use the "i" to access each element of the array dynamically.
  console.log(`i = ${index} and arrayWithNumbers[${index}]: ${arrayWithNumbers[index]}`);
  console.log(arrayWithNumbers[index]);
  index++;
  // index = index + 1;
  // index += 1;
}

// do-while loops will run the first iteration no matter what and then evualuate the condition
// to go to the next iteration.

console.log("\nEach item with 'do - while' loop: array length is: " + arrayWithNumbers.length + '\n');

let index2 = 0;
do {
  // Accessing each element of arrayWithNumbers.
  // Explanation: On each iteration variable "i" is increasing its value by 1.
  // which means, we can use the "i" to access each element of the array dynamically.
  console.log(`i = ${index2} and arrayWithNumbers[${index2}]: ${arrayWithNumbers[index2]}`);
  console.log(arrayWithNumbers[index2]);
  index2++;
} while (index2 < arrayWithNumbers.length);

// More complex exercise would be something like:

// function User (name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
// }

// const user1 = new User('juan', ' bigorra');
// const user2 = new User('pablo', 'perez');

// const array = [user1, user2];
// const array2 = [];
// array2.push(user1, user2);

// console.log(array);
// console.log(array2);
