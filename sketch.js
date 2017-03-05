var sponge = [];
var spin = 10;
var mousePressCount = 0;
var limitMousePressTo = 3;

function setup() {
	createCanvas(400, 400, WEBGL);

	sponge[0] = new SBox(0, 0, 0, 200);
	createElement('p','Coding train challenge 2. Learned of 3d shapes in p5.js. Note: I limited mousepresses to 3 otherwise it about crashes. ');
	createElement('p','oddest thing. when testing this a fly landed on the screen and walked over to the rotating cube and just sat on it... so weird.')
}

function mousePressed(){
	if(mousePressCount < limitMousePressTo ){
		var tempSponge =[];
		for (var i = 0; i < sponge.length; i++) {
			var nL = sponge[i].division();
			tempSponge = tempSponge.concat(nL);
		};
		sponge = tempSponge;
		console.log(sponge.length)
		mousePressCount++
	}
}


function draw() {
	
	background(255);

  	rotateX(spin);
  	rotateY(spin);
  	rotateZ(spin);

  	for (var i = 0; i < sponge.length; i++) {
		sponge[i].show();
	};
  	
	spin += 0.01;
  	
}