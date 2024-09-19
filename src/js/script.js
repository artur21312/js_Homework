'use strict';

const  user ={
    name:'alex',
        age:25,
    funk:function () {
        console.log('hello '+this.name );

    }
}

user.funk(user);