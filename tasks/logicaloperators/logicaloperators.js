//variables
var canvasX = innerWidth / 2;
var canvasY = innerHeight / 2.5;

//start of preload
function preload() {
    img = loadImage('../../images/logicalbackground.jpg')
}
//end of preload

//start of responsiveness
function windowResized() {
    canvasX = innerWidth / 2;
    canvasY = innerHeight / 2.5;
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('logicalDiv');
}
//end of responsiveness

// start of setup
function setup() {
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('logicalDiv');
}
// end of setup

//start of draw 
function draw() {
    background(img)

    circle(50,50,50)

// end of draw
}