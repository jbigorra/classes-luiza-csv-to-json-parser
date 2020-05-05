const array  = [1,2,3];

let arrayTurnedString = [];

arrayTurnedString += array[0]; // when you are concatenating to the variable turns it into
arrayTurnedString += array[1]; // a string. Basically you need to avoid doing this kind of
arrayTurnedString += array[2]; // operation because it is very misleading.

console.log(arrayTurnedString);
console.log(typeof arrayTurnedString);


/**
 *
 * If you know you need to sum/add numbers in an accumulator,
 * then you know that the type of data of the accumulator needs to be a number.
 *
 * If for some reason you need to have that accumulator within an array
 * then remember you could access and accumulate the added numbers in the first
 * element in it, BUT always giving an initial value to that element (zero in this case)
 *
 * Check the next example:
 *
 */


 const array2 = [1,2,3];

 const arrayAccumulator = [0];

 arrayAccumulator[0] += array2[0];
 arrayAccumulator[0] += array2[1];
 arrayAccumulator[0] += array2[2];

 console.log(arrayAccumulator);
