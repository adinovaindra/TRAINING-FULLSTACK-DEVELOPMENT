/*Soal Nomer 1
Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/
var lgth = 5;
var wdth = 3;
var area = lgth * wdth;
console.log("1. ".concat(area, " sqm"));
/* Soal Nomer 2
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/
var perimeter = 2 * (lgth + wdth);
console.log("2. ".concat(perimeter, " meter"));
/*
Soal Nomer 3
Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
var radius = 5;
var phi = 3.14;
var diameter = 2 * radius;
var circumference = 2 * phi * radius;
var circlearea = phi * radius * radius;
console.log("3. diameter ".concat(diameter, ", circumference ").concat(circumference, ", area of circle ").concat(circlearea));
/*
Soal Nomer 4
Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/
var a = 80;
var b = 65;
var c = 180 - (a + b);
console.log("4. ".concat(c));
/*
Soal Nomer 5
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/
var totaldays = 400;
var year = Math.round(totaldays / 365);
var dayleft = totaldays % 365;
var month = Math.round(dayleft / 30);
var day = dayleft % 30;
console.log("5. ".concat(year, " year, ").concat(month, " month, ").concat(day, " days"));
/*Soal Nomer 6
Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2
*/
var date1 = new Date("2022/1/20");
var date2 = new Date("2022/3/22");
var rootdate = new Date("2022/1/1");
console.log("6. ".concat(date2.getDate() - date1.getDate()));
