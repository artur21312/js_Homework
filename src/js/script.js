'use strict';
const createNestedElement=(tag, text='', children = [])=> {
    const element = document.createElement(tag);
    element.textContent = text;

    children.forEach(child => {
        element.appendChild(child);
    });
    return element;
}

const nestedStructure = createNestedElement('table', '', [
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
    createNestedElement('tr', '0', [
        createNestedElement('td', '1'),
        createNestedElement('td', '2'),
        createNestedElement('td', '3'),
        createNestedElement('td', '4'),
        createNestedElement('td', '5'),
        createNestedElement('td', '6'),
        createNestedElement('td', '7'),
        createNestedElement('td', '8'),
        createNestedElement('td', '9'),
    ]),
]);
document.body.appendChild(nestedStructure);
