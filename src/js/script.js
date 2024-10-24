'use strict';

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3
            }
        }
    }
};

const deepFreeze = (obj) => {
    Object.freeze(obj);

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    });
    return obj;
};

deepFreeze(user);
