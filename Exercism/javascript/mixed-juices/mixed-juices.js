/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let processTime = 0;

  switch (name) {
    case "Pure Strawberry Joy":
      processTime = 0.5;
      break;

    case "Energizer":
    case "Green Garden":
      processTime = 1.5;
      break;

    case "Tropical Island":
      processTime = 3;
      break;

    case "All or Nothing":
      processTime = 5;
      break;

    default:
      processTime = 2.5;
  }
  return processTime;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalWedgesLimHave = 0;
  let i = 0;
  let firstLimeLengths = limes.length;
  if (wedgesNeeded != 0) {
    while (totalWedgesLimHave <= wedgesNeeded) {
      switch (limes[i]) {
        case "small":
          limes[i] = 6;
          break;

        case "medium":
          limes[i] = 8;
          break;

        case "large":
          limes[i] = 10;
          break;
      }
      totalWedgesLimHave += limes[i];
      limes.shift();
    }
    return firstLimeLengths - limes.length;
  } else {
    return 0
  }
  
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  
  while (timeLeft > 0) {
    
    switch (orders[i]) {
      case "Pure Strawberry Joy":
        orders[i] = 0.5;
        break;
      case "Energizer" || "Green Garden":
        orders[i] = 1.5;
        break;

      case "Tropical Island":
        orders[i] = 3;
        break;

      case "All or Nothing":
        orders[i] = 5;
        break;

      default:
        orders[i] = 2.5;
        break;
    }
    timeLeft -= orders[i];
    orders.shift();
  }
  return orders;
}
