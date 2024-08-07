'use strict';

const name= prompt('What is your name');
const age= prompt('How old are you');
const likesProgramming=confirm ('Do you like the program');
console.log(name,age,likesProgramming);
console.log(typeof(name));
console.log(typeof(likesProgramming));
console.log(typeof(age));
const greeting = (`привіт  ${name}`);
alert(greeting);
const numericage= Number(age);
let nextAge = 1 + numericage;
console.log(nextAge);
const isAdult = 18 <=age;
console.log(isAdult);