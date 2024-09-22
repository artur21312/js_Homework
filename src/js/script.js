'use strict';


    const user = {
        name:'alex',
        age:25,
    }

    const getFullName = function () {
        return `${this.name} ${this.age}`
    }

    const apply = function (func, context, ...args) {
        let result = null;
        context.func = func;
        result = context.func(...args);
        delete context.func;

        return result;
    }

    const bind = (func= null, context = undefined, args = []) => {
        if(!func) return undefined;

        return function() {
            return apply(func, context, ...args)
        }
    }

    const bindedGetFullName = bind(getFullName, user);
    console.log(bindedGetFullName);


