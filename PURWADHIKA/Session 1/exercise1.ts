/*Soal Nomer 1
Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/

let lgth = 5
let wdth = 3
let area = lgth * wdth
console.log(`1. ${area} sqm`)

/* Soal Nomer 2
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/

let perimeter = 2*(lgth + wdth)
console.log(`2. ${perimeter} meter`)

/* 
Soal Nomer 3
Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/

let radius = 5
const phi = 3.14
let diameter = 2*radius
let circumference = 2*phi*radius
let circlearea = phi*radius*radius
console.log(`3. diameter ${diameter}, circumference ${circumference}, area of circle ${circlearea}`)

/*
Soal Nomer 4
Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/

let a = 80
let b = 65
let c = 180 - (a+b)
console.log(`4. ${c}`)


/*
Soal Nomer 5
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/

let totaldays = 400
let year = Math.round(totaldays / 365)

let dayleft = totaldays % 365
let month = Math.round(dayleft/30)

let day = dayleft % 30

console.log(`5. ${year} year, ${month} month, ${day} days`)

/*Soal Nomer 6
Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2
*/

let date1 = new Date("2022/1/20")
let date2 = new Date("2022/3/22")
let rootdate = new Date ("2022/1/1")

console.log(`6. ${date2.getDate() - date1.getDate()}`)