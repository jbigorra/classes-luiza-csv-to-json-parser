// Create a function called Join which will receive an array as first parameter and separator character as a second parameter.
/**
 * Goal results:
 *
 * 1) result1:
 *    Given this array input: ['Almost', 'before', 'we'];
 *    When we execute the function and Join the input array with a comma as a separator character
 *    Then the items in the array are joined into a string using the separator character
 *      Result = "Almost,before,we";
 *
 * 2) result2:
 *    Given this array input: ['Almost', 'before', 'we'];
 *    When we execute the function and Join the input array with a space as a separator character
 *    Then the items in the array are joined into a string using the separator character
 *      Result = "Almost before we";
 *
 */

// 1. create a function, 1st parameter is an arrayOfWords, 2nd parameter is a separator
// 2. we iterate over each element of the array
// 3. separate by comma
// 4. return the result

const arrayOfWords = ['Almost', 'before', 'we', 'knew', 'it', 'we', 'had', 'left', 'the'];
console.log(arrayOfWords);

function JoinArrayItems (arrayOfWords, separator) {
  if (typeof separator !== 'string' || !Array.isArray(arrayOfWords)) {
    throw new Error('Wrong type of input');
  }

  let stringWithCommas = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    const IsTheLastStepOfTheIteration = arrayOfWords.length - 1 === i; // true or false

    if (IsTheLastStepOfTheIteration) {
      stringWithCommas += arrayOfWords[i];
    } else {
      stringWithCommas += arrayOfWords[i] + separator;
    }
  }

  return stringWithCommas;
}

const result1 = JoinArrayItems(arrayOfWords, ',');
console.log(result1);

const result2 = JoinArrayItems(arrayOfWords, '!');
console.log(result2);

const arrayOfMixedValues = ['asrf', 1287, 'blablabla', true, 12, false];

const result3 = JoinArrayItems(arrayOfMixedValues, '?');
console.log(result3);

const result4 = JoinArrayItems([], ',');
console.log(result4);

// Throwing error

try {
  const result5 = JoinArrayItems(['item1', 'item2', 'item3'], 1);
  console.log(result5);
} catch (error) {
  console.log(error.message);
}

// Throwing error

try {
  const result6 = JoinArrayItems('123', ',');
  console.log(result6);
} catch (error) {
  console.log(error.message);
}

/// --------------------------------------------------------------

/**
 * Create a function called SplitStringIntoArray which receives two parameters.
 * parameter1 is: a string
 *
 * parameter2 is the splitting character: a string
 *
 * Goal results:
 *
 * 1) result1:
 *    Given this string input: "Almost,before,we,knew"
 *    When we execute the function and Split the input string with splitting character of a comma
 *    Then the string splitted by commas and in return we get an array with elements
 *      Result = ["Almost","before","we","knew"];
 *
 * 1) result2:
 *    Given this string input: "Almostbefore"
 *    When we execute the function and Split the input string with splitting character of a comma
 *    Then the string splitted by commas and in return we get an array with elements
 *      Result = ["Almostbefore"];
 *
 *
 *  */

// create a function SplitStringIntoArray with 2 parameters;
// pass the variable with string values
// pass the splitting character
// how to split a string: iterate over each element of the string and whevener you get to the comma
// then accumulate the characters and push, then we  move forward until we get to the next coma, and again repeat the accumulate process;
// check when the last accumualted string of characters doesn't have a comma;
// to return as an array, i need an array variable to which I push the values of the splitted string
// return as an array

const stringWithWords = 'Almost,before,we,knew';

function SplitStringIntoArray (stringWithWords, splittingCharacter) {
  let words = '';
  const arrayOutOfString = [];
  for (let i = 0; i < stringWithWords.length; i++) {
    if (stringWithWords[i] === ',') {
      arrayOutOfString.push(words);
      words = '';
    } else {
      words += stringWithWords[i];
      if (i === stringWithWords.length - 1) {
        arrayOutOfString.push(words);
      }
    }
    console.log(arrayOutOfString);
  }
  return arrayOutOfString;
}

console.log(SplitStringIntoArray('Almost,before,we,knew', ','));
