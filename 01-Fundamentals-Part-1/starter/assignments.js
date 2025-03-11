/*
let country = "Bolivia";
let continent = "América";
let population = "12.564.085";
console.log(
  "Mi país actual es " +
    country +
    " está en el continente de " +
    continent +
    " y tiene una población de " +
    population +
    " habitantes."
);

let country = "Bolivia";
let population = "12.564.085";
let language = "Spanish";
let isIsland = false;

console.log("country : " + country);
console.log(typeof country);
console.log("isIsland : " + isIsland);
console.log(typeof isIsland);
console.log("population : " + population);
console.log(typeof population);
console.log("language : " + language);
console.log(typeof language);

let, const and var
Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.



const country = "Bolivia";
const continent = "América";

let population = "12.564.085";
let language = "Spanish";
const isIsland = false;

//isIsland = True;

Basic Operators
If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/

const country = "Bolivia";
const continent = "América";
let language = "Spanish";
const isIsland = false;
let population = 12564085;
const halfPopulation = population / 2;
console.log(
  "Si dividieramos " +
    country +
    " por la mitad, vivirían " +
    halfPopulation +
    " personas en cada parte."
);

population++;
console.log(population);

let finlandPopulation = 6000000;
const isFinlandMorePopulated = finlandPopulation > population;
console.log(
  "Tiene " +
    country +
    " más población que Finlandia? : " +
    isFinlandMorePopulated
);
const averageCountryPopulation = 30000000;
const isConutryPopulationBellowAverage = population < averageCountryPopulation;
console.log(
  country +
    " is in " +
    continent +
    ", and its " +
    population / 1000000 +
    " million people speak " +
    language
);
