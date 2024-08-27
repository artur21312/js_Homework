'use strict';



const namber=prompt('ведіть число');
const text =prompt('ведіть тект');
const sem =prompt('ведить символ');
const bul =prompt('ведіть буліан');
let sum = "";


const per=function (){
    if (typeof text !== 'string') {
        return 'Error: string is missing or not a string';
    }
    if (typeof namber !== 'number') {
        return 'Error: length is missing or not a number';
    }
    if (typeof sem !== 'string' || sem.length !== 1) {
        return 'Error: char is missing or not a single character';
    }
    if (typeof bul !== 'boolean') {
        return 'Error: left is missing or not a boolean';
    }
}

const lopi =function (){
if (namber<text.length||bul===false){
    for (let i=namber; i<text.length; i++){
        sum += sem;
    }
    sum+=text;
    console.log(sum);
} else{
    let lop='';
    for (let i=text.length; i<namber; i++){
        lop += sem;

    }
    sum +=text+lop;
    console.log(sum );

}}
console.log(per());
console.log(lopi());
