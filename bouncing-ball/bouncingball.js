//variables
var canvasX = innerWidth / 2;
var canvasY = innerHeight / 2.5;

//start of preload
function preload() {
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
}
//end of draw