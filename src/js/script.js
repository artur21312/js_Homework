'use strict';

const mas= [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const minimum = Math.min(...mas);
console.log(minimum);

const max = Math.max(...mas);
console.log(max);

const negative = mas.filter((namber) =>{
    return namber<0;
})
console.log(negative.length);

const pozitive_noparne = mas.filter((namber) =>{
    return namber>0&&namber%2===1;
})
console.log(pozitive_noparne.length);

const pozitive_parne = mas.filter((namber) =>{
    return namber>0&&namber%2===0;
})
console.log(pozitive_parne.length);

const sum=(mas)=>{
    let suma=0;
    for(let i=0;i<mas.length;i++){
        suma+=mas[i];
    }
    return suma;
}

console.log(sum(pozitive_parne));

console.log(sum(pozitive_noparne));


const pozitive = mas.filter((namber) =>{
    return namber>0;
})

const dobut=(mas)=>{
    let suma=mas[0];
    for(let i=1;i<mas.length;i++){
        suma*=mas[i];
    }
    return suma;
}
console.log(dobut(pozitive));

const mas_max=(mas)=>{
    const max=Math.max(...mas);
    for(let i=0;i<mas.length;i++){
        if(mas[i]!==max){
            mas[i]=0;
        }
    }
    console.log(mas);
}
console.log(mas_max(mas));


