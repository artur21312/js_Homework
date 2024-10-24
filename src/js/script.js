'use strict';

let product={
    quantity: 10,
} ;

Object.defineProperty(product,"name",{

    get nameProduct() {
        return this._name;
    },

    set nameProduct(value){
        if (typeof value !== 'string' || value.trim() === '') {
    console.error('Reminder: It’s my fault to keep the row unemptied.');
}else {
            this._name = value;
        }
    },
enumerable:true,
configurable:true,
});

Object.defineProperty(product,"price ", {
    get priceProduct() {
        return this._price;
    },

    set priceProduct(value){
        if (typeof value !== 'number' || value <= 0) {
            console.error('Pardon: The price is to blame if the number is greater than 0');
        }else {
            this._price = value;
        }
    },

    enumerable: true,
    configurable: true,
});


Object.defineProperty(product, 'totalValue', {
    get() {
        return this.price * this.quantity;
    },
    enumerable: true,
    configurable: false
});
