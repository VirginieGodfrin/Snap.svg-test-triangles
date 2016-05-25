
var s = Snap("#triangle");

var test2 = triangle.create(10,10,10,300,100,250,'green');
var test2 = triangle.group(test2);

var test3 = triangle.create(10,400,10,800,300,550,'red');
var test3 = triangle.group(test3);


$(window).scroll(function(){
    if($(window).scrollTop() > 50){
    	console.log(" premier triangle scroll ok ");
    	triangle.moove(test2);
	}else{
			console.log("scroll not ok")
		}

	if($(window).scrollTop() > 200){
    	console.log(" 2° traingle scroll ok ");
    	triangle.moove2(test3);
	}else{
		console.log("scroll not ok")
	}
});	