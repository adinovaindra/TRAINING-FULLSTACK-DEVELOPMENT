var grade = 75;
if (grade >= 80) {
    console.log("Congratulations! You are graduate!");
}
else {
    console.log("You only participant");
}
// type IColor = ("red" | "yellow" | "green")
var trafficLight = "green";
if (trafficLight == "red") {
    console.log("stop");
}
else if (trafficLight == "yellow") {
    console.log("be careful");
}
else if (trafficLight == "green") {
    console.log("go");
}
else {
    console.log("invalid color");
}
console.log(12 == 12);
console.log(12 === "12");
console.log(12 === "13");
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("be careful");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("invalid color");
        break;
}
var expr = "Durian";
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and Papayas are $2.79 a pound");
        break;
    default:
        console.log("Sorry, we are aout of ".concat(expr));
        break;
}
switch (true) {
    case grade >= 80:
        console.log("Congratulations you are Graduate!");
        break;
    default:
        console.log("You only participant");
        break;
}
//AND SECTION
console.log(true && true); //true
console.log(true && false); // false
console.log(false && false); // false
//OR SECITON
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log("result :", 65 >= 57 && ("a" == "A" || 54 == "54")); // true
//!= SECTION
console.log("b" != "B"); //true
console.log(!true); // false
console.log("aa" != "AA" && 677 <= 87); // false
//TERNARY
var str = "Typescript";
if (str == "Typescript") {
    if (56 == 45) {
        console.log("ngapain");
    }
    else {
        console.log(" gak ngapa2in");
    }
    console.log("This is Typescript");
}
else {
    console.log("This is no typescript");
}
var result3 = (str === "typescript" && 12 == "12") || (34 >= 0 && 445 != 90) ?
    56 == 45 ? "ngapain" : "gak ngapa2in"
    : "This is not typescript";
console.log(result3);
