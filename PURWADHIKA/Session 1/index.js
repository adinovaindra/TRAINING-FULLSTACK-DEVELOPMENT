let myName : string = "Adinova Indra Permana"
console.log(myName)

let age : number = 17

console.log(myName, age)

const hobbies : Array<string> = ["GTA V","Cs 1.6", "FIFA 19"]
console.log(hobbies)

interface IPerson {
    name:string
    title:string
    age:number
}
const person : IPerson = {
    name:"Dino",
    title:"Web Development",
    age:25
}

console.log(person)

console.log(myName.split(""))
console.log(myName.split(" "))
console.log(myName.split("a"))
console.log(myName.split("d"))

console.log(`Adinova
Indra
Permana
${myName}
    `)

console.log(typeof age)
console.log(typeof person)

let myNumber = - 12.34

console.log(myNumber.toFixed())
console.log(parseFloat("123"))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)

console.log(Number.NEGATIVE_INFINITY < -732968623959)
console.log(person.name)
console.log(Number)

console.log(String(34.5))
console.log(typeof String(true))

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(123)) //true
console.log(Boolean("")) //false
console.log(Boolean(" ")) //true
console.log(Boolean("abc")) //true
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false

console.log(myNumber + 90)
console.log(90 + "abc")
console.log("abc" + 90)

let myDate : Date = new Date()

console.log(myDate.getUTCHours())
console.log(new Date(365*24*60*1000))
console.log(new Date("2024/10/29"))
console.log(new Date("2024/10/29 13:52:35"))

console.log(myDate.getDay())
console.log(myDate)

console.log(myNumber * 2)