'use strict';

const  mas=[32,'babl',43,12,false,53,'prit'];

const old=function (){
    let sum=0;
    let masn=0;
    for(let i=0;i<mas.length;i++){
        if(typeof mas[i]==='number'){
            masn++;
            sum+=mas[i];
        }
    }
    let masnn=sum/masn;

    console.log(masnn);
}
console.log(old());

const x=+prompt('введите число X');
const y=+prompt('введите число Y');
const znake=prompt('введите знак');
const doMath=function (x, znak, y){
    let sum=x;
    switch (znak) {
        case '+':
            sum += y;
            break;
        case '-':
            sum = x - y;
            break;
        case '*':
            sum = x * y;
            break;
        case '/':
            sum = x / y;
            break;
        case '%':
            sum = x % y;
            break;
        case '^':
            sum = x;
            for (let i = 1; i < y; i++) {
                sum *= sum;
            }
            break;
        default:
            console.log('Некорректный знак операции');
    }

    console.log(sum);
}
console.log(doMath(x,znake,y));


const fill2DArray=function () {

    const rows = parseInt(prompt("Введіть кількість рядків (довжина основного масиву):"), 10);


    const array = [];


    for (let i = 0; i < rows; i++) {

        const cols = parseInt(prompt(`Введіть кількість елементів у рядку ${i + 1}:`), 10);

        const innerArray = [];

        for (let j = 0; j < cols; j++) {
            const value = prompt(`Введіть значення для елементу [${i + 1}][${j + 1}]:`);
            innerArray.push(value);
        }

        array.push(innerArray);
    }

    return array;
}

console.log(fill2DArray());


const inputString = prompt("Введіть рядок:");
const chars = prompt("Введіть символи для видалення :").split('');

function removeCharacters(str, charsToRemove) {
    for (let char of charsToRemove) {
        str = str.split(char).join('');
    }
    return str;
}


const result = removeCharacters(inputString, chars);
console.log(result);