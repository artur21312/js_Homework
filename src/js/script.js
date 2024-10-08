'use strict';


const listItems = document.querySelectorAll('ul li');
listItems.forEach((item) => {
    console.log(item.textContent);
});

const ulElement = document.getElementById('ulId');
const attributeAr=(ulElement)=>{
const attributesArray = [];
for (const attr of ulElement.attributes) {
    attributesArray.push(attr.value);
}
console.log(attributesArray);
}
attributeAr(ulElement);
const attributeNamesAr=()=>{
const attributeNamesArray = [];
for (const attr of ulElement.attributes) {
    attributeNamesArray.push(attr.name);
}
console.log(attributeNamesArray);
}
attributeNamesAr();

listItems[listItems.length - 1].textContent = "Привіт, мене звуть Артур";

listItems[0].setAttribute('data-my-name', 'Артур');

ulElement.removeAttribute('data-dog-tail');

