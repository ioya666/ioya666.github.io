//variables
var canvasX = innerWidth;
var canvasY = innerHeight;
var diameter = 50;
var ballX = 980;
var ballY = 540;
var speed = 2;

//start of preload
function preload() {
    img = loadImage('../images/bouncingballbackground.jpg')
}
//end of preload

//start of responsiveness
function windowResized() {
    canvasX = innerWidth;
    canvasY = innerHeight;
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('bouncingballDiv');
}
//end of responsiveness

// start of setup
function setup() {
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('bouncingballDiv');ß
}
// end of setup

//start of draw 
function draw() {
    var pastRightEdge = canvasX < ballX + diameter;
    var pastLeftEdge = 0 > ballX + diameter;
    var belowBottom = canvasY < ballY + diameter;
    var aboveTop = 0 > ballY - diameter;

    ballX = ballX + speed

    if (pastRightEdge || pastLeftEdge) {
        speed = -speed
    }
    if (aboveTop || belowBottom) {
        speed = -speed
    }
    clear()
    fill(255, 0, 0)
    circle(ballX, ballY, diameter)
    pop()
    if (keyIsDown(81) || keyIsDown(81)) {
        diameter -= 2;
    }
    if (keyIsDown(69) || keyIsDown(69)) {
        diameter += 2;
    }
    push()
}

//end of draw