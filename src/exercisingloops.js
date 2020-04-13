const diverseArray = [14, 'hello', false, 30, 'yup'];

// console.log('that would be a full array');
// console.log(diverseArray);

// with for loop
console.log('this is the for loop')
for (let i = 0; i < diverseArray.length; i++) {
    console.log(diverseArray[i]);
};

// while loop 
console.log('while loop');
let index = 0;
while (index < diverseArray.length){
    console.log(diverseArray[index]);
index++
};

// do while
console.log('and this is do while')
let index2 = 0;
do {

    console.log(diverseArray[index2])
    index2++
} while (index2 < diverseArray.length);