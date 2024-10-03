'use strict';

function createCounter(){
    let counter=0;
    return function (){
     counter++;
     return counter;
    }
}
const counter = createCounter();
const parentElement = document.body

const appentHTMLelement=(parentElement=null,elementToAppend=null)=>{
    if(!parentElement || !elementToAppend)return;
    parentElement.append(elementToAppend);
}

const genereteTable =()=>{
const tableSize=10

    const table=document.createElement('table');
table.className='table';
    const tbody=document.createElement('tbody');

    table.append(tbody);
    for(let i=1;i<=tableSize;i++){
        const tr=document.createElement("tr");
        for (let j=1;j<=tableSize;j++){
            const td=document.createElement("td");
            td.innerHTML=counter();
            tr.append(td);
        }
        tbody.append(tr);
    }
    return table;
}
appentHTMLelement(parentElement,genereteTable())