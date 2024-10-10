'use strict';


const list = [1, 2, 3, [1.1, 1.2, 1.3], 4];
const generateList = (array) => {
    let ul = document.createElement('ul');
    array.forEach(item => {
        let li = document.createElement('li');
        if (Array.isArray(item)) {
            li.appendChild(generateList(item));
        } else {
            li.textContent = item;
        }
        ul.appendChild(li);
    });
    return ul;
}

document.body.appendChild(generateList(list));
