'use strict';

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13]
];


const flat = (arr, result = []) => {
    for(const item of arr) {
        if(Array.isArray(item)) flat(item, result);
        else result.push(item);
    }

    return result;
}

console.log(
    flat(complexArray, [0, 0, 0])
);
