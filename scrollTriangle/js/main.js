
var s = Snap("#triangle");

var y1 = [10,200,300,850, 1300];
var y2 = [300, 500, 900, 1500, 1400];

var tri1 = new Triangle(0, y1[0], 0, y2[0], 100, 200, 150);
var tri2 = new Triangle(0, y1[1], 0, y2[1], 150, 350, 150);
var tri3 = new Triangle(0, y1[2], 0, y2[2], 100, 800, 400);
var tri4 = new Triangle(0, y1[3], 0, y2[3], 150, 950, 400);
var tri5 = new Triangle(0, y1[4], 0, y2[4], 40, 1320, 50);

var triangles= [ tri1, tri2, tri3, tri3, tri4, tri5]; 


$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    for(var i = 0; i < y2.length; i++){
        if (scroll >= y1[i] || scroll <= y2[i]){
            triangles[i].move(2, 300, mina.bounce);
        }
    }
});
