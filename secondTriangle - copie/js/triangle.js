
function Triangle (x1 , y1, x2, y2, x3, y3, rayon){
//les coordonées du triangle
	this.x1 = x1, 
	this.y1 = y1,
	this.x2 = x2,
	this.y2 = y2,
	this.x3 = x3,
	this.y3 = y3,

//les coordonées du centre du triangle
	this.xg = (x1 + x2 + x3)/3, 
	this.yg = (y1 + y2 + y3)/3,
	this.rayon = rayon;

//le dégradé et ses coordonées
	this.z = this.gradient(),
	this.triangle = this.create(),
	this.group = this.group();

}

Triangle.prototype.gradient = function(){
	return s.gradient("R("+this.xg+","+this.yg+","+this.rayon+")rgba(245,5,49,0.8)-rgba(138,1,1,1)");
}

Triangle.prototype.create = function(){
	return s.polygon(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3 ).attr({fill:this.z});
}

Triangle.prototype.group = function(){
	return s.group(this.triangle);
}

Triangle.prototype.move = function(vitesse, mina){
	var g = this.group;
	var vitesse = typeof vitesse != 'undefined' ? vitesse : this.vitesse;
	var mina = typeof mina != 'undefined' ? mina : this.mina;
	g.animate({transform: 'r25,10,10'}, vitesse, mina, 
		function(){
			console.log('callback called');
			g.animate({transform:'r-25, 10, 10'}, vitesse, mina)
		}
	);
	console.log(this.vitesse, this.mina);
}


