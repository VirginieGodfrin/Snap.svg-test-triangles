
var s = Snap("#triangle");

//les fonctions
/*	
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
*/
	/*
	var test1 = createTriangle(0,0,0,300,100,200,'grey');
	var test1 = groupTriangle(test1);
	moveTriangle(test1);
	*/


//l'objet triangle
	var triangle = {
		create: function(x1, y1, x2, y2, x3, y3, color){
			var forme = s.polygon(x1, y1, x2, y2, x3, y3). attr({ fill: color });
			return forme;
		},
		group: function (tri){
			var group = s.group(tri);
			return group;
		},
		moove: function (g){
				g.animate(
					{transform: 'r-2,40,100'},
					600, 
					mina.easeinout,
					function(){
						g.animate({transform: 'r2,40,100'},1000,mina.easeinout, 
							function(){
								g.animate({transform: 'r0,40,100'},1000,mina.bounce)
								}
							)
					}
				);
		},

		moove2: function (xx){
				xx.animate(
					{transform:'r2,70,600'},
					600, 
					mina.easeinout,
					function(){
						xx.animate({transform: 'r-2,70,600'},1000,mina.easeinout,
							function(){
								xx.animate({transform: 'r0,70,600'},1000,mina.bounce)
								}
							)
					}
				);
		}


	}




