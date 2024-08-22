'use strict';



const namber=4//prompt('ведіть число');
const text ='gdffd'//prompt('ведіть тект');
const sem ='*'//prompt('ведить символ');
const bul =prompt('ведіть буліан');
//const concol=namber !== null&& !!namber.trim && !isNaN(namber);
let sum = "";




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

console.log(lopi());