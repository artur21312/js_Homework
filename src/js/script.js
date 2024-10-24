'use strict';

let user={
    _name:'artyr',

    get name() {
        return this._name;
    },

    set name (name){
        this._name = name;
    },

    _age:0,

    get  age(){
        return this._age;
    },

    set  age(value){
        if(value>0&&value<120) {
            this._age = value;
        }else {
        console.log('This age is impossible for a person');
        }
    }
}