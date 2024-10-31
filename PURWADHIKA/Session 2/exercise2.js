//EXERCISE
/**
 SOAL NOMER 1
 Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
 */
var number = 28;
if (number % 2 == 1) {
    console.log("1. Odd number");
}
else {
    console.log("1. Even number");
}
/*
SOAL NOMER 2
Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
*/
/*
SOAL NOMER 3
 Write a code to ﬁnd the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
 */
var res2 = 0;
for (var i = 1; i <= 5; i++) {
    res2 = res2 + i;
}
console.log("2. ".concat(res2));
/*
SOAL NOMER 4
*/
/*
SOAL NOMER 5
Write a code to print the first N fibonacci numbers
*/
var prev_number = 0;
var current_number = 1;
console.log("5. \" i = \", 1, \"current_number = \", current_number");
for (var i = 2; i <= 15; i++) {
    var temp = prev_number;
    prev_number = current_number;
    current_number = current_number + temp;
    console.log(" 1 =", i, "current_number = ", current_number);
}
