
var s = Snap("#triangle");

function createTriangle (x1, y1, x2, y2, x3, y3, color){
	var triangle = s.polygon(x1, y1, x2, y2, x3, y3). attr({ fill: color });
	return triangle;
}

function groupTriangle(triangle){
	var group = s.group(triangle);
	return group;
}


function moveTriangle(groupTriangle){

			groupTriangle.animate(
				{transform: 'r10,50,150'},
				2000, 
				mina.bounce,
				function(){
					groupTriangle.animate({transform: 'r0,50,150'},2000,mina.bounce)
				}
			);
}

var triangle = createTriangle(0,0,0,300,100,200,'grey');
var group = groupTriangle(triangle);
moveTriangle(group);


