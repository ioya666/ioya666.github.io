var canvasX = 800
var canvasY = 400
var lineX = canvasX / 2; 
var lineY = canvasY / 2;
var speedX = 2;
var speedY = 2;


//start of preload
function preload() {
    img = loadImage('../../images/logicalbackground.jpg')
}
//end of preload

//start of responsiveness
function windowResized() {
    var canvasX = 800
    var canvasY = 400
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('logicalDiv');
}
//end of responsiveness

// start of setup
function setup() {
    var canvasX = 800
    var canvasY = 400
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('logicalDiv');
}
// end of setup

//start of draw 
function draw(){
    background(img)
    strokeWeight(8)
    
    line(0,lineY,canvasX,lineY) // horizontal line
    line(lineX,0,lineX,canvasY) // vertical line   
    lineX = lineX + speedX;
    lineY = lineY + speedY;
    
    // (statement) ?=if  what if should do if statement == true  :=else what else should do
    lineX > canvasX ? (lineX = canvasX, speedX = -speedX):
    lineX < 0 ? (lineX = 0, speedX = -speedX): 0;
    lineY > canvasY ? (lineY = canvasY, speedY = -speedY):
    lineY < 0 ? (lineY = 0, speedY = -speedY):
    // && = and
    mouseX < lineX && mouseY > lineY ? (square(mouseX - 20, mouseY -20, 40), fill(46,26,71),stroke(46,26,71)):
    mouseX > lineX && mouseY > lineY ? (triangle(mouseX,mouseY-15,mouseX-15,mouseY+15,mouseX+15,mouseY+15),fill(173,216,230),stroke(173,216,230)):
    mouseX < lineX && mouseY < lineY ? (circle(mouseX,mouseY,40),fill(197,180,227),stroke(197,180,227)):
    mouseX > lineX && mouseY < lineY ? (line(mouseX-15,mouseY+15,mouseX+15,mouseY-15),line(mouseX-15,mouseY-15,mouseX+15,mouseY+15),fill(25, 25, 112),stroke(25, 25, 112)): 0; 
    // optimized code that only checks a statement if it needs it // help from Fl3xy
    if (keyIsDown(69) && speedX >= 0) {
        speedX += 1
    } else if (keyIsDown(69) && speedX <= 0) {
        speedX -= 1
    }
    if (keyIsDown(69) && speedY >= 0) {
        speedY += 1
    } else if (keyIsDown(69) && speedY <= 0) {
        speedY -= 1
    }
    if (keyIsDown(81) && speedX >= 0) {
        speedX -= 1
    } else if (keyIsDown(81) && speedX <= 0) {
        speedX += 1
    }
    if (keyIsDown(81) && speedY >= 0) {
        speedY -= 1
    } else if (keyIsDown(81) && speedY <= 0) {
        speedY += 1
    }
    // end of draw
}