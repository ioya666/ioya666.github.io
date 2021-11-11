var canvasX = innerWidth / 2;
var canvasY = innerHeight / 2.5;
var radius = 25
var ballX = canvasX / 2;
var ballY = canvasY / 2;
var xSpeed = 3;
var ySpeed = 3;
var resizeSpeed = 5 / 2
function preload() {
    img = loadImage('../../images/bouncingballbackground.jpg')
}
function windowResized() {
    canvasX = innerWidth / 2;
    canvasY = innerHeight / 2.5;
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('bouncingballDiv');
}
function setup() {
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('bouncingballDiv');
}
function draw() {
    background(img)
    if (keyIsDown(81)) {
        radius > 5 ? (radius -= resizeSpeed) : 0;
    }
    if (keyIsDown(69)) {
        radius < 100 ? (radius += resizeSpeed) : 0;
    }
    ballX = ballX + xSpeed;
    ballY = ballY + ySpeed;
    fill(255, 0, 0);
    circle(ballX, ballY, radius * 2);
    canvasX < ballX + radius ? (ballX = canvasX - radius, xSpeed = -xSpeed) : 0;
    0 > ballX - radius ? (ballX = 0 + radius, xSpeed = -xSpeed) : 0;
    canvasY < ballY + radius ? (ballY = canvasY - radius, ySpeed = -ySpeed) : 0;
    0 > ballY - radius ? (ballY = 0 + radius, ySpeed = -ySpeed) : 0;
}