
var s = Snap("#triangle");

var tri1 = new Triangle(10, 10, 10, 300, 100, 200, 150);
tri1.create;
tri1.gradient;
tri1.move;

/*
//le dégradé
var rgba= "rgba(245,5,49,0.8)-rgba(138,1,1,1)";
//la position du dégradé + le dégardé
var grad1 = "R(40, 200, 150)"+rgba;
var z = triangle.gradient(grad1);
var tri1 = triangle.group(triangle.create(10,10,10,300,100,200).attr({ fill: z }));

var grad2 = "R(70, 350, 150)"+rgba;
var z = triangle.gradient(grad2);
var tri2 = triangle.group(triangle.create(10,200,10,500,150,350).attr({ fill: z }));

var grad3 = "R(50, 800, 400)"+rgba;
var z = triangle.gradient(grad3);
var tri3 = triangle.group(triangle.create(10,300,10,900,100,800).attr({ fill: z }));

var grad4 = "R(100, 950, 400)"+rgba;
var z = triangle.gradient(grad4);
var tri4 = triangle.group(triangle.create(10,850,10,1500,150,950).attr({ fill: z }));

var grad5 = "R(20, 1320, 30)"+rgba;
var z = triangle.gradient(grad5);
var tri5 = triangle.group(triangle.create(10,1300,10,1400,40,1320).attr({ fill: z }));



$(window).scroll(function(){
    if($(window).scrollTop() > 20){
        var coord1 = 'r-2,40,125';
        var coord2 = 'r2,40,125';
        var coord3 = 'r0,40,125';
        triangle.moove2(tri1, coord1, coord2, coord3);
    }
    if($(window).scrollTop() > 70){
        var coord1 = 'r2, 70, 350';
        var coord2 = 'r-2, 70, 350';
        var coord3 = 'r0, 70, 350';
        triangle.moove2(tri2, coord1, coord2, coord3);
    }
    if($(window).scrollTop() > 100){
        var coord1 = 'r2, 70, 600';
        var coord2 = 'r-2, 70, 600';
        var coord3 = 'r0, 70, 600';
        triangle.moove2(tri3, coord1, coord2, coord3);
    }
    if($(window).scrollTop() > 400){
        var coord1 = 'r2, 70, 1275';
        var coord2 = 'r-2, 70, 1275';
        var coord3 = 'r0, 70, 1275';
        triangle.moove2(tri4, coord1, coord2, coord3);
    }
    if($(window).scrollTop() > 700){
        var coord1 = 'r10, 20, 1350';
        var coord2 = 'r-10, 20, 1350';
        var coord3 = 'rO, 20, 1350';
        triangle.moove2(tri5, coord1, coord2, coord3);
    }

}); */
