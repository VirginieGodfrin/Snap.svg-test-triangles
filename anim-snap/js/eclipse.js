


var s = Snap("#eclipse"); 

    var circle_1 = s.circle(200, 200, 150); 
    var circle_2 = s.circle(150, 200, 150);

    var circles = s.group(circle_1, circle_2);

    var ellipse = s.ellipse(175, 220, 170, 90);

    circles.attr({
  		fill: 'coral',
  		fillOpacity: .6,
  		mask: ellipse
	});

    ellipse.attr({
    	fill:'#fff',
  		opacity: .4
	});

    function blink(){ // fonction qui modifie the vertical radius
  		ellipse.animate({ry:1}, 220, function(){
    	ellipse.animate({ry: 90}, 300);
  		});
	};
	 // setInterval appelle la méthode blink toute les 3secondes
	setInterval(blink, 3000);
  	
