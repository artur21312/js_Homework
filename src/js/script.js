'use strict';


const mainFunction=function (callback) {
    let nam1 = +prompt();
    let nam2 = +prompt();

    callback (nam1, nam2);
}
const exponentiation =function(nam1,nam2) {
    let answer=nam1;
    for(let i=1;i<nam2;i++){
    answer*=answer;
    }

    return alert(answer);

}

const multiplay=function(num1,num2){
    let answer=num1*num2;
    return answer;
}

const division=function(num1,num2){
    let answer=num1/num2;
    return answer;
}

const modulo=function(num1,num2){
    let answer=num1%num2;
    return answer;
}

console.log(mainFunction(exponentiation));
console.log(mainFunction(multiplay));
console.log(mainFunction(division));
console.log(mainFunction(modulo));