//variables
var canvasX = innerWidth / 2;
var canvasY = innerHeight / 2.5;
var diameter = 50;
var ballX = 400;
var ballY = 200;
var speed = 2;

//start of preload
function preload() {
    img = loadImage('../images/bouncingballbackground.jpg')
}
//end of preload

//start of responsiveness
function windowResized() {
    canvasX = innerWidth / 2;
    canvasY = innerHeight / 2.5;
    var Canvas = createCanvas(canvasX, canvasY);
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
    if(keyIsDown(81) || keyIsDown(81)){
        diameter -= 1;
    }
    if(keyIsDown(69) || keyIsDown(69)){
        diameter += 1;
    }
    pop()
    clear()
    fill(255,0,0)
    circle(ballX,ballY,diameter,diameter)
    push()
    
}
//end of draw