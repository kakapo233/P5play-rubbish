let ball, recta;
let speedY=10;
let speedX=10;
let speed2Y=10;
let speed2X=10;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');

	ball = new Sprite();
	ball.diameter = 50;

	recta = new Sprite();
	recta.w = 50;
	recta.h = 50;
	recta.x = 251;
	recta.y = 250;

}

function draw() {
	background('skyblue');
	

	if (ball.y> 500) {
		speedY = -10;
	} 
	
	if (ball.y < 0) {
		speedY = 10;
	}
	ball.y += speedY;

	if (ball.x > 500) {
		speedX = -10;
	} 
	
	if (ball.x < 0) {
		speedX = 10;
	}
	ball.x += speedX;

	
}
