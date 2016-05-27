
var s = Snap("#triangle1");
var tri1 = new Triangle(10, 10, 10, 300, 100, 200, 150);

function runTriangle() {
    tri1.move(2, 300, mina.bounce);
}


function createTriangle(){
    var tri2 = new Triangle(20, 20, 20, 200, 150, 200, 100);
}