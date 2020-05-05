// Create a function called Join which will receive an array as first parameter and separator character as a second parameter.
/**
 * Goal results:
 *
 * 1) result1:
 *    Given this array input: ['Almost', 'before', 'we'];
 *    When we execute the function and Join the input array with a comma as a separator character
 *    Then the items in the array are joined into a string using the separator character
 *      Result = "Almost,before,we";
 */
const arrayOfWords = ['Almost', 'before', 'we', 'knew', 'it', 'we', 'had', 'left', 'the'];

function JoinArrayIntoString (arrayOfWords, separator) {
  let stringWithCommas = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    stringWithCommas += arrayOfWords[i] + separator;
  }
  return stringWithCommas;
}
const result1 = JoinArrayIntoString(arrayOfWords, ',');
console.log(result1);
