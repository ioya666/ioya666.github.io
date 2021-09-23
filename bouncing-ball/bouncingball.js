//variables
var canvasX = innerWidth / 2;
var canvasY = innerHeight / 2.5;
var radius = 25
var ballX = canvasX / 2;
var ballY = canvasY / 2;
var xSpeed = 10;
var ySpeed = 10;
var resizeSpeed = 5/2
var multiSpeed
var pastRightBorder = canvasX < ballX - radius;
var pastLeftBorder = 0 > ballX + radius;
//start of preload
function preload() {
    img = loadImage('./images/bouncingballbackground.jpg')
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
        if (radius > 5) {
            radius -= resizeSpeed;
        }
    }

    if (keyIsDown(69)) {
        if (radius < 100) {
            radius += resizeSpeed;
        }
    }

    ballX = ballX + xSpeed;
    ballY = ballY + ySpeed;

    fill(255, 0, 0);
    circle(ballX, ballY, radius*2);

    if (canvasX < ballX + radius) {
        ballX = canvasX - radius;
        xSpeed = -xSpeed;
    }
    if (0 > ballX - radius) {
        ballX = 0 + radius;
        xSpeed = -xSpeed;
    }

    if (canvasY < ballY + radius) {
        ballY = canvasY - radius;
        ySpeed = -ySpeed;
    }
    if (0 > ballY - radius) {
        ballY = 0 + radius;
        ySpeed = -ySpeed;
    }
    
}

//end of draw