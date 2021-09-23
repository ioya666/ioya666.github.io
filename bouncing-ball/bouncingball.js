//variables
var canvasX = innerWidth / 2;
var canvasY = innerHeight / 2.5;
var diameter = radius * 2;
var radius = 25
var ballX = canvasX / 2;
var ballY = canvasY / 2;
var xSpeed = 2;
var ySpeed = 2;
var resizeSpeed = 5
var multiSpeed
var pastRightBorder = canvasX < ballX - radius;
var pastLeftBorder = 0 > ballX + radius;
//start of preload
function preload() {
    img = loadImage('../images/bouncingballbackground.jpg')
}
//end of preload

//start of responsiveness
function windowResized() {
    canvasX = innerWidth / 2;
    canvasY = innerHeight / 2.5;
    Canvas.parent('bouncingballDiv');
}
//end of responsiveness

// start of setup
function setup() {
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('bouncingballDiv');
}
// end of setup

//start of draw 
function draw() {
background(img)
if (keyIsDown(81)) {
    diameter -= resizeSpeed;
}
if (keyIsDown(69)) {
    diameter += resizeSpeed;
}

    fill(255, 0, 0)
    circle(ballX, ballY, diameter)

ballX = ballX + xSpeed
ballY = ballY + ySpeed
    
    if (canvasX < ballX - radius || 0 > ballX + radius) {
        xSpeed = -xSpeed
    }
    if (0 > ballY - radius || canvasY < ballY + radius) {
        ySpeed = -ySpeed
    }
    
}

//end of draw