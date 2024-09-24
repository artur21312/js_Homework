'use strict';
const insertWordInto = (initialString) => {
    const words = initialString.split(' ');
    let currentPosition = 0;
    return (newWord) => {
        if (words.length === 0 || initialString.trim() === '') {
            return newWord;
        }
        let result = [...words];
        if (currentPosition === 0) {
            result.unshift(newWord);
        } else if (currentPosition === words.length) {
            result.push(newWord);
        } else {
            result.splice(currentPosition, 0, newWord);
        }
        currentPosition++;
        if (currentPosition > words.length) {
            currentPosition = 0;
        }
        return result.join(' ');
    };
};
const insert = insertWordInto('hello world');
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
