
function Triangle (x1 , y1, x2, y2, x3, y3, rayon){
//les coordonées du triangle
	this.x1 = x1, 
	this.y1 = y1,
	this.x2 = x2,
	this.y2 = y2,
	this.x3 = x3,
	this.y3 = y3;

	var xg = (x1 + x2 + x3)/3; 
	var yg = (y1 + y2 + y3)/3;
	var rayon = rayon;

// fonction pour le dégardé
	this.gradient = function() {
		return s.gradient("R("+xg+","+yg+","+rayon+")rgba(245,5,49,0.8)-rgba(138,1,1,1)");
	};
// fonction pour la création du triangle 
	this.create = function(){
		var z = this.gradient();
		return  s.group(s.polygon(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3).attr({fill: z }));
	};
// fonction pour l'annimation sur le triangle
	var g = this.create();

	this.move = function(angle, vitesse, mina){
		var vitesse = typeof vitesse != 'undefined' ? vitesse : this.vitesse;
		var mina = typeof mina != 'undefined' ? mina : this.mina;
		var angle = typeof angle != 'undefined' ? angle : this.angle;
/*
		var vitesse = vitesse;
		var mina = mina;
		var angle = angle;
*/
		g.animate({transform: 'r-'+angle+','+xg+' , '+yg+''}, vitesse, mina, 
			function(){
				console.log('callback called');
				g.animate({transform: 'r0,'+xg+' , '+yg+''}, vitesse, mina)
			}
		);
	}
}
