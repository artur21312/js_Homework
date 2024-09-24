'use strict';

const createAccumulator = () => {
    let total = 0;
    return function add(num) {
        total += num;
        return total;
    }
}

const sum = createAccumulator();
console.log(sum(6));
console.log(sum(5));
