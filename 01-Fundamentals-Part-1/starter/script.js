/*let js = "amazing";
console.log("Jonas!");
console.log(23);
console.log(40 + 8 + 23 - 10);
let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let orlando_y_raquel = "OR";
let $function = 27;
let person = "Nahuel";
let PI = 3.1415;

let myFirstJob = "Coder"; //it's better to name variables with descriptive names
let myCurrentJob = "Programmer";

let job1 = "Coder";
let job2 = "Programmer";

console.log(myFirstJob);

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 35);
console.log(typeof "Orlando");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);
//en JS ... null es un object ... no tiene sentido pero se mantiene así por retrocompatibilidad.
console.log(typeof null);

//this is a block scope variable
let age = 30;
age = 31;

const birthYear = 1989;
//birthYear = 2005;
//const job;
//this is a function scope variable
var job = "programmer";
job = "teacher";

//this is a global property
lastName = "Vazquez";
console.log(lastName);

//Math Operators
const now = 2025;
const orlandoAge = now - 1989;
const rachelAge = now - 2020;
console.log(
  "Orlando has " +
    orlandoAge +
    " years, and Rachel has " +
    rachelAge +
    " years."
);

console.log(orlandoAge * 2, rachelAge / 10, 2 ** 3);
// 2 ** 3 significa dos a la potencia de 3 o sea 2*2*2
const nombre = "Orlando";
const apellido = "Vazquez";
console.log(nombre + " " + apellido);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x+1
x--; // x-1
x--;
console.log(x);

//Comparision Operators

console.log(orlandoAge > rachelAge); // <, >, >=, <=
console.log(rachelAge >= 18);

const isRachelFullAge = rachelAge >= 18;

const now = 2025;
const orlandoAge = now - 1989;
const rachelAge = now - 1990;
console.log(now - 1989 > now - 2020);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = orlandoAge + rachelAge / 2;
console.log(orlandoAge, rachelAge, averageAge);

const firstName = "Orlando";
const lastName = "Vazquez";
const job = "Fullstack Developer";
const birthYear = 1989;
const currentYear = 2025;

const orlando =
  "I'm " +
  firstName +
  " " +
  lastName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";

const orlandoNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(orlando);
console.log(orlandoNew);
console.log(`just a regular string...`);

console.log(
  "String with \n\
  multiple \n\
  lines"
);

console.log(`String
  also
  with 
  multiple 
  lines
  `);

const age = 15;
if (age >= 18) {
  console.log("Sarah is old enough to drive. 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, want another ${yearsLeft} years 😊`);
}

let birthYear = 2014;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

//type conversion
const inputYear = "1989";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log("I'm " + 35 + " years old.");
console.log("23" - "10" - 2);
console.log("30" / "2");

let n = "1" + 1; // 11
n = n - 1;
console.log(n);
