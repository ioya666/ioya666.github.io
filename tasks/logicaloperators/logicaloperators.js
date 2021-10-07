//variables
var canvasX = 800
var canvasY = 400
var speedX = 2
var speedY = 3
var fr = 60
//horizontal
var lineaX1 = canvasY
var lineaX2 = 0
var lineH = lineaX1 && lineaX2
//vertical
var linebY1 = canvasY
var linebY2 = 0
var lineY = linebY1 && linebY2



//start of preload
function preload() {
    img = loadImage('../../images/logicalbackground.jpg')
}
//end of preload

//start of responsiveness
function windowResized() {
    canvasX
    canvasY 
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('logicalDiv');
}
//end of responsiveness

// start of setup
function setup() {
    frameRate(fr)
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('logicalDiv');
}
// end of setup

//start of draw 
function draw() {
    background(img)

    strokeWeight(8)
    stroke(255,255,255)
    line(canvasX,lineH,0,lineH) // horizontal line
    line(lineY,canvasX,lineY,0) // vertical line

    
    lineH = lineH + speedX;
    lineY = lineY + speedY
    
    //vertical line
    if(canvasX < lineY){
        lineY = canvasX;
        speedY = -speedY;
    }
    if(0 > lineY){
        lineY = 0;
        speedY = -speedY;
    }
    //horizontal line
    if(canvasY < lineH){
        lineH = canvasY;
        speedX = -speedX;
    }
    if(0> lineH){
        lineH = 0;
        speedX = -speedX;
    }
    if(mouseX && mouseY > lineH){
        strokeWeight(1)
        fill(255,255,0)
        stroke(0,0,0)
        square(mouseX-20,mouseY-20,40)
    } else {
        strokeWeight(1)
        fill(255,0,255)
        stroke(0,0,0)
        circle(mouseX,mouseY,40)
    }
    if(mouseX && mouseY > lineY){
        strokeWeight(1)
        fill(255,255,0)
        stroke(0,0,0)
        square(mouseX-20,mouseY-20,40)
    } else {
        strokeWeight(1)
        fill(255,0,255)
        stroke(0,0,0)
        circle(mouseX,mouseY,40)
    }

// end of draw
}