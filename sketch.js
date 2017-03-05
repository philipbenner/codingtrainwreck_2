var sponge = [];

function setup() {
	createCanvas(400, 400, WEBGL);

	sponge[0] = new SBox(0, 0, 0, 200);

}

function draw() {
	/*
		// wireframes aren't in p5js webgl yet so these are useless
		noFill();
		stroke(2);
	*/  
	background(255);

  	rotateX(10);
  	rotateY(10);
  	
  	sponge[0].show();
	
  	
}