'use strict';

const div = document.createElement('div');
div.style.display = 'flex';

const textInput = document.createElement('input');
textInput.type = 'text';

const sideDiv = document.createElement('div');
sideDiv.style.display = 'none';
sideDiv.innerHTML = 'lorem007';

div.appendChild(textInput);
div.appendChild(sideDiv);

document.body.appendChild(div);

const addElement = (parent, childEl) => {
    parent.appendChild(childEl);
};

addElement(div, textInput);
addElement(div, sideDiv);

textInput.addEventListener('focus', () => {
    sideDiv.style.display = 'block';
});

textInput.addEventListener('blur', () => {
    sideDiv.style.display = 'none';
});
