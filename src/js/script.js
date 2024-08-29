'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];
const nam =prompt('ведите число')-1;

const minus=function (lopi,namber){
    for (let i=0;i<=lopi.length;i++){
        if (namber===i){
            continue;
        }
        console.log(array[i])
    }

}

console.log(minus(array,nam));