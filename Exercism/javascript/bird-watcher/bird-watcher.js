/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let result = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    result += birdsPerDay[i]
  }
  return result
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    if (week === 1) { 
      let startCount = 0
      let result = 0
      for (let i = startCount; i < startCount + 7; i++) {
      result += birdsPerDay[i]
      }
      return result
  } else {
      let startCount = (week - 1) * 7
      let result = 0
      for (let i = startCount; i < startCount + 7; i++) {
      result += birdsPerDay[i]
    }
    return result
  }
}

let birdsPerDay = [3, 0, 3, 3, 2, 1, 0]

console.log(birdsInWeek(birdsPerDay,1))



/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 0) {
      birdsPerDay[i] += 1
    }
  }
  return birdsPerDay
}