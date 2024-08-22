'use strict';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const length=prompt('ведите число');
let sum ='';
const generateKey =  function () {
    for (let i = 1; i <= length; i++){
    sum  += characters[getRandomInt(0,characters.length)];
    }
    console.log(sum);
}
console.log(generateKey());
