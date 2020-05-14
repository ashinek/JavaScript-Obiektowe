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

console.log(p1 instanceof Point);
console.log(p1 instanceof String);
console.log(p1 instanceof Object);
console.log(Point.prototype.isPrototypeOf(p1));

