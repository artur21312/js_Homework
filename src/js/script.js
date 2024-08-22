'use strict';

for (let namber=20 ;namber<=30;namber+=0.5){
 console.log(namber);
}

for (let namber=10 ;namber<=100;namber+=10){
    let grivna=namber*27;

    console.log(namber+' доларив '+grivna+' гривень ');
}


const name= prompt('ведитьчисло n')
for (let namber=1 ;namber<=100;namber++){
    if (namber>=name){
        break;
    }
    console.log(namber);
}

let post=0 ;
if (name<=1){
    post=0;
}else if(name===2 || name<=3){
    post=1;
}else if(name%2===0||name%3===0){
    post=0;
}   else {
    post=1;
}
for (let i = 5; i * i <= name; i += 6) {
    if (name % i === 0 || name % (i + 2) === 0)  post=0;
}

if (post===1) {
    console.log(name + " є простим числом.");
} else {
    console.log(name + " не є простим числом.");
}



const n = prompt('ведить число');
if (n <= 0) {
    console.log(false);
} else {

    let current = 1;

    while (current < n) {
        current *= 3;
    }

    if (current === n) {
        console.log(true);
    } else {
        console.log(false);
    }
}


