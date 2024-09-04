'use strict';

const masiv=(callback)=>{
    let mas=[];
    for(;true;){
            let primitiv=prompt('ведите значение ');
            if(primitiv===null||primitiv==='')break;
            mas.push(primitiv);
    }
    callback(mas);
}
const sort =(mas)=>{
console.log(mas);
mas.sort((a,b)=> a-b);
console.log(mas);
mas.splice(1,3);
console.log(mas);
}
masiv(sort);