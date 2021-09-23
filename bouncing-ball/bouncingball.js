//variables
var canvasX = innerWidth;
var canvasY = innerHeight;
var diameter = 50;
var ballX = 980;
var ballY = 540;
var xspeed = 2;
var yspeed= 2;
var pastRightEdge = canvasX < ballX + diameter;
var pastLeftEdge = 0 > ballX - diameter;
var belowBottom = canvasY < ballY + diameter;
var aboveTop = 0 > ballY + diameter;

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
    Canvas.parent('bouncingballDiv');
} 
// end of setup

//start of draw 
function draw() {
    ballX = ballX + xspeed
    ballY = ballY + yspeed
    if(pastLeftEdge || pastRightEdge){
    xspeed = -xspeed
   }
    if(aboveTop || belowBottom){
    yspeed = -yspeed
   }

    if(keyIsDown(81) || keyIsDown(81)){
        diameter -= 2;
    }
    if(keyIsDown(69) || keyIsDown(69)){
        diameter += 2;
    }
    
    pop()
    clear()
    fill(255,0,0)
    circle(ballX,ballY,diameter)
    push()
    
}
//end of draw