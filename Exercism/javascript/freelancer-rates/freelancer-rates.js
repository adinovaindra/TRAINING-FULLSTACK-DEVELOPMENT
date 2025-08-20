export function dayRate(ratePerHour) {
  return ratePerHour * workHoursPerDay;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let dayRemaining = numDays % 22;
  let totalDayDiscounted = numDays - dayRemaining;

  if (numDays > 22) {
    return Math.ceil(
      (dayRemaining * dayRate(ratePerHour))) + Math.ceil
        (totalDayDiscounted * dayRate(ratePerHour) * (1 - discount));
  } else {
    return ratePerHour * numDays;
  }
}

let workHoursPerDay = 8;

console.log(priceWithMonthlyDiscount(89,230,0.42))

let numDays = 230

let dayRemaining = numDays % 22

console.log(dayRemaining)

let totalDayDiscounted = numDays -dayRemaining

console.log(totalDayDiscounted)



