function Point(x,y){
    this.x = x;
    this.y = y;
    console.log("cokolwiek");
    
}

var p1 = new Point(2,4);

var p2 = new Point(1,6);

console.log(p1.constructor.name);
console.log(p2);

