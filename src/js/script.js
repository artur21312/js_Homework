'use strict';



const textInput = document.createElement('input');
textInput.type = 'text';

const sideDiv = document.createElement('div');
sideDiv.style.display = 'none';

document.body.appendChild(textInput);
document.body.appendChild(sideDiv);

textInput.addEventListener('focus', () => {
    sideDiv.style.display = 'block';
});

textInput.addEventListener('blur', () => {
    sideDiv.style.display = 'none';
});
