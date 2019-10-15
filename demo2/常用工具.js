let util = require('util')

function Base(){
    this.name = 'base'
    this.base = 1991
    this.sayHello = function(){
        console.log('Hello' + this.name);
    }
}

Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'Sub'
}

util.inherits(Sub, Base)

let objBase = new Base()

objBase.showName()

objBase.sayHello()

console.log(objBase);

let objSub = new Sub()

objSub.showName()

console.log(objSub);