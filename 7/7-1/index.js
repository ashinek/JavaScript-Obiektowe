//Jest pusty, ale nie jest pusty bo jest Object.prototype
//mozna ponizszy zapis zamienic var options = new Object();
var options = {};

console.log(options.toString());
console.log(options.constructor);
console.log(options instanceof Object);
console.log(Object.prototype.isPrototypeOf(options));
console.log('toString' in options);
console.log('constructor' in options);
