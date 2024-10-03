'use strict';


const IMG_FOLDER='./images/';
const IMG_EXT='.png';
const appentHTMLelement=(parentElement=null,elementToAppend=null)=>{
    if(!parentElement || !elementToAppend)return;
    parentElement.append(elementToAppend);
}


const getRandomNumber = () =>{
    const num =Math.floor(Math.random()*10);
    if(num===0) return 1;
    return num;
}


const generateImg =(imgName)=>{
    const img=document.createElement('img');

    img.src = `${IMG_FOLDER}${imgName + IMG_EXT}`;
    img.alt = `${IMG_FOLDER}${imgName + IMG_EXT}`;
    img.title = `${IMG_FOLDER}${imgName + IMG_EXT}`;

    return img;
}

const imgToAppend=generateImg(getRandomNumber());

appentHTMLelement(document.body,imgToAppend);