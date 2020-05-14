function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getCoordinates = function() {
        console.log("X: " + this.x + ", Y: " + this.y);
 }

Point.prototype.getX = function() {
    console.log("X: " + this.x);
}

function Point3D(x,y,z){
    Point.call(this,x,y);
    this.z = z;
}

Point3D.prototype = Object.create(Point.prototype); 
Point3D.prototype.constructor = Point3D;

Point3D.prototype.getZ = function(){
    console.log("Z: "+this.z);
    
}

var p3d = new Point3D(3,4,6);

p3d.getX();
console.log(p3d);
p3d.getZ();

console.log(Point3D.prototype.constructor);
