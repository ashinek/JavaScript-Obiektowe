function Point(x, y) {
    this.x = x;
    this.y = y;
}

var p1 = new Point(2, 4);
var p2 = new Point(1, 6);

Point.prototype.getCoordinates = function() {
    console.log("X: " + this.x + ", Y: " + this.y);
}

Point.prototype.getX = function() {
    console.log("X: " + this.x);
}

console.log(Object.getPrototypeOf(p1));

Object.setPrototypeOf(p1,{});

//p1.__proto__ = {};
//console.log(p1.__proto__);

p1.getX; //nie zabangla :<