function Point(x, y) {
    this.x = x;
    this.y = y;
}

var p1 = new Point(2, 4);
var p2 = new Point(1, 6);

Point.prototype.getCoordinates = function (){
    console.log("X: " + this.x + " T: "+ this.y);
    
}

Point.prototype.getX = function (){
    console.log("X: " + this.x);
    
}

console.log(Point.prototype);
console.log(p1.getCoordinates()); //niepotrzebne bo w funkcji juz jest console log

p2.getCoordinates();
p2.getX();

