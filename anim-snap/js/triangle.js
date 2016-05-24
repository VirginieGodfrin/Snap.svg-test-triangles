var s = Snap("#triangle");

var triangle2 = s.polygon(0,0,0,300,100,200).attr({ fill: 'grey' });
var g2 = s.group(triangle2);

g2.animate(
	{transform: 'r10,50,150'},
	2000, 
	mina.bounce,
	function(){
		g2.animate({transform: 'r0,50,150'},2000,mina.bounce)
		
	}
);

var triangle = s.polygon(10,400,10,600,200,500).attr({ fill: 'green' });
var g = s.group(triangle);

var myFrames= [ 
	{ animation: { transform: 'r5,1,30' }, dur : 1000, easy: mina.linear},
	{ animation: { transform: 'r-5,1,150' }, dur : 1000, easy: mina.easeout},
	{ animation: { transform: 'r5,1,300' }, dur : 1000, easy: mina.easeinout},
	{ animation: { transform: 'r-5,1,150' }, dur : 1000, easy: mina.backout},
	{ animation: { transform: 'r0,1,150' }, dur : 1000, easy: mina.bounce}
]

// function  parametres : element, trableauframe, wichframe
function nextFrame ( el, frameArray,  whichFrame ) {
	//si whichframe est plus grand ou égale au nombre d'éléménts de framearray, je continue
        if( whichFrame >= frameArray.length ) { 
        	console.log (frameArray.length);
        	return 
        }
        el.animate( 
        	frameArray[ whichFrame ].animation, //attribut
        	frameArray[ whichFrame ].dur, //duration
        	frameArray [ whichFrame ].easy, //easing
        	nextFrame.bind( null, el, frameArray, whichFrame + 1 ) //callback
        );
}

nextFrame( g, myFrames, 0 );





