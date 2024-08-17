console.log(3 
    +
     3) // code readability should be high

console.log("saad")


let name = "saad"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object




/*

DETAIL DATA TYPES 

*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100

const scoreValue = 100.3

const loggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ironman", "flash", "wonderwoman"];

let myObj = {
    name: "Saad",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// https://262.ecma-international.org/5.1/#sec-11.4.3
