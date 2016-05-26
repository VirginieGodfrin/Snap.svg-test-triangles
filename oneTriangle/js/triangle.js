
function Triangle (x1 , y1, x2, y2, x3, y3, rayon){
//les coordonées du triangle
	this.x1 = x1; 
	this.y1 = y1;
	this.x2 = x2; 
	this.y2 = y2;
	this.x3 = x3; 
	this.y3 = y3;
//les coordonées du centre du triangle
	this.xg = (x1 + x2 + x3)/3; 
	this.yg = (y1 + y2 + y3)/3;
	this.rayon = rayon;
//le dégradé et ses coordonées
	this.z = this.gradient();
	this.triangle = this.create();
	this.group = this.group(); 
	this.move();
}

Triangle.prototype.gradient = function(){
	console.log (this.xg);
	console.log (this.yg);
	console.log (this.rayon)
	return s.gradient("R("+this.xg+","+this.yg+","+this.rayon+")rgba(245,5,49,0.8)-rgba(138,1,1,1)");
}


Triangle.prototype.create = function(){
	var forme = s.polygon(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3 ).attr({fill:this.z});
	return forme;
}

Triangle.prototype.group = function(){
	var g = s.group(this.triangle);
	return g;
}

Triangle.prototype.move = function(){
	var g = this.group;
	console.log(g);
	g.animate({transform:'r-2,40,125'}, 600, mina.bounce,
		function(){
			g.animate({transform:'r0,40,125'}, 600, mina.bounce)
		}
	);
}



/*var triangle = {
		//creation du gradient 
		gradient: function(don){
			var grad = s.gradient(don);
			return grad; 
		},
		//creation d'un triangle
		create: function(x1, y1, x2, y2, x3, y3, color){
			var forme = s.polygon(x1, y1, x2, y2, x3, y3). attr({ fill: color });
			return forme;
		},
		//création du groupe
		group: function (tri){
			var group = s.group(tri);
			return group;
		},
		//fonctions du mouvement de bascule
		moove2: function (g, coord1, coord2, coord3){
			g.animate(
				{transform:coord1},
				600, 
				mina.easeinout,
				function(){
					g.animate({transform: coord2},1000,mina.easeinout,
						function(){
							g.animate({transform: coord3},1000,mina.bounce)
							}
						)
					}
			);
		}
	}

*/