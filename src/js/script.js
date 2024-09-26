'use strict';


const createNestedElement = (tag, text = '', children = []) => {
    const element = document.createElement(tag);
    element.textContent = text;

    children.forEach(child => {
        element.appendChild(child);
    });
    return element;
}
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = createCounter(); // Создаём один счётчик

const createTDElement=()=> {
    const value = counter();
    return createNestedElement('td', value);
}

const generateMultipleElements=() =>{
    const elements = [];
    for (let i = 0; i < 10; i++) {
        elements.push(createTDElement());
    }
    return createNestedElement('tr', '', elements);
}


const nestedStructure = createNestedElement('table', '', [
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements(),
    generateMultipleElements()
]);
document.body.appendChild(nestedStructure);
