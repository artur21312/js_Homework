'use strict';

let num=+prompt('ведіть число');
let degree=prompt('ведіть ступінь');
const getFaktariall=(number)=>{
    if(number===1){
        return 1;
    }
    return number*=getFaktariall(number-1);
}
num=getFaktariall(num);
console.log(`число ${num}`);
const pov=(num,degree)=> {
 if(degree===0) return 1;
    return num*pov(num,degree-1);
}
console.log(pov(num,degree));

let a=+prompt('ведить число а');
let b=+prompt('ведить число б');

const rek=(a,b)=>{
    if(b===0){
        return a;
    }
    a++;
    return  rek(a,b-1);
}
console.log(rek(a,b));