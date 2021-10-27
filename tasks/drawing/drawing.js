var startpos = ["",""];
var endpos = ["",""];

var startBool = false;
var endBool = false;

//start of responsiveness
function windowResized() {
    canvasX = innerWidth / 2
    canvasY = innerHeight / 2.5
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('drawingDiv');
}
//end of responsiveness

// start of setup
function setup() {
    canvasX = innerWidth / 2
    canvasY = innerHeight / 2.5
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('drawingDiv');
}
// end of setup

//start of draw 
function draw(){
    background(0)
    stroke(0,255,0)
    strokeWeight(5)
    line(startpos[0], startpos[1], endpos[0],endpos[1])

    if(mouseIsPressed){
        if(endBool === false){
            endpos[0] = mouseX;
            endpos[1] = mouseY;            
        }
        if(startBool === false){
            startpos[0] = mouseX;
            startpos[1] = mouseY;
            line(startpos[0],startpos[1],endpos[0],endpos[1])
            startBool = true;
        }
    }  
}
//end of draw
function mouseReleased(){
    if(endBool === false){
        endpos[0] = mouseX;
        endpos[1] = mouseY;
        endBool = true;
    }
    startBool = false;
    endBool = false;
}
