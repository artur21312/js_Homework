'use strict';


let lop ='';
for (let sap=10; sap<=20; sap++){
lop+= sap+',';
}
console.log(lop);

for (let sap=10; sap<=20; sap++){
    let box=sap*sap;
    console.log(box);
}

for (let nam =1 ;nam<=10;nam++){
    const seven=7;
    let multiplication=nam*seven;
    console.log(nam+'*'+seven+'='+multiplication);
}

let samer=0;
for (let name =1 ;name<=15;name++){
    samer += name;
}
console.log(samer);

let dobutok=15;
for (let name =16 ;name<=35;name++){
dobutok*=name;
}
console.log(dobutok);

let soda=0
for (let name =1 ;name<=500;name++){
    soda+=name;
}
soda=soda/500;
console.log(soda);

let botl=0;
for (let name =30 ;name<=80;name++){
    if (name %2 ===0){
        botl+=name;
    }
}
console.log(botl);

for (let name =100 ;name<=200;name++){
    if (name %3 ===0) {
        console.log(name);
    }
}

const mom = prompt('ведите число');
let solid = 0;
let asist=0;
for (let name =1 ;name<=mom;name++) {
    if (name % 2 === 0) {
    solid++;
    asist+= name;
    }
}
console.log('количество чисел '+solid);
console.log('сума чисел '+asist);


for (let name =1 ;name<=10;name++) {
for (let nam =1 ;nam<=10;nam++){
    let multiplication=nam*name;
    console.log(nam+'*'+name+'='+multiplication);
}
}