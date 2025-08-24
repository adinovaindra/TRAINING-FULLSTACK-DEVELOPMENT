// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numberArray1 = Number((array1).join(''))
  let numberArray2 = Number((array2).join(''))

  return numberArray1 + numberArray2
}

console.log(twoSum([1, 2, 3], [0, 7]));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let secondForm = Number(value.toString().split('').reverse().join(''))
  
  return value == secondForm ? true : false
}

console.log(luckyNumber(1441))

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined|number} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let result = ''
  if (String(input) === '' || input == null || input == undefined) {
   result = 'Required field'
  } else if (!Number(input)) {
    result  = 'Must be a number besides 0' 
  } else if (input == String(input)) {
    result
  } 
  return result
}

console.log(errorMessage('%'))