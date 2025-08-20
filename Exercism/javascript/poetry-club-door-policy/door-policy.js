/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  let result = line[0]
return result
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  let detachFirstLetter = word.slice(0,1)
  let restOfWord = word.slice(1, word.length)
  let result = detachFirstLetter.toUpperCase() + restOfWord.toLowerCase();
  return result
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  let removeWhiteSpace = line.trim()
  let result = removeWhiteSpace[removeWhiteSpace.length-1]
  return result
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  let detachFirstLetter = word.slice(0,1)
  let restOfWord = word.trim().slice(1, word.length)
  let completeWord = detachFirstLetter.toUpperCase() + restOfWord.toLowerCase()
  let result = completeWord + ', please'
  return result
}