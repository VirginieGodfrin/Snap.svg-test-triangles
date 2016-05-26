
	var triangle = {
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




