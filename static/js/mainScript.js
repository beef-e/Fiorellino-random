let x;
let y;
let diameter;

function drawFlower(centerX, centerY, diametro) {
	let raggio = diametro / 2;
	fill(random(256), random(256), random(256), random(256));
	circle(centerX + raggio, centerY - raggio, diametro);
	circle(centerX - raggio, centerY - raggio, diametro);
	circle(centerX + raggio, centerY + raggio, diametro);
	circle(centerX - raggio, centerY + raggio, diametro);

	fill(random(256), random(256), random(256), random(256));
	circle(centerX, centerY, diametro); //mainCircle
}

function setup() {
	createCanvas(400, 600);
	background(random(256), random(256), random(256), 0);
}

function draw() {
	x = random(256);
	y = random(256);
	diameter = random(30, 91);

	drawFlower(x, y, diameter);
	if (frameCount === 1000) {
		clear();
		frameCount = 0;
	}
}
