const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log("is mark bigger that jhon ? " + markHigherBMI);
