
var s = Snap("#triangle");

var tri1 = new Triangle(10, 10, 10, 300, 100, 200, 150);
tri1.create;

function runTriangle() {
    tri1.move(5000, mina.bounce);
}

function createTriangle(){
	var tri2 = new Triangle(160, 20, 160, 200, 450, 150, 10);
	tri2.create;

}

function moveTriangle(){
	var tri3 = new Triangle(460, 20, 460, 200, 550, 200, 50);
	tri3.create;
	tri3.move(1000, mina.bounce);
}
