"use strict";
class Complex {
    constructor(rel, im) {
        this.rel = rel;
        this.im = im;
    }
    add(obj) {
        return new Complex(this.rel + obj.rel, this.im + obj.im);
    }
    subtract(obj) {
        return new Complex(this.rel - obj.rel, this.im - obj.im);
    }
    module(obj) {
        return Math.abs(Math.sqrt((Math.pow(this.rel, 2) + Math.pow(this.im, 2))));
    }
    toString() {
        return this.rel + "+" + this.im + "i";
    }
}
let com = new Complex(3, 4);
let com2 = new Complex(3, 4);
let resultAdd = com.add(com2);
let resultSubtract = com.subtract(com2);
let resultModule = com.module(com);
console.log("Add: ");
console.log(resultAdd);
console.log("Subtract: ");
console.log(resultSubtract);
console.log("Subtract: ");
console.log(resultModule);
console.log(com.toString());
