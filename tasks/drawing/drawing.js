var startBool = false;
var endBool = false;
var linesarr = [];
var lines;
function windowResized() {
    canvasX = innerWidth / 2
    canvasY = innerHeight / 2.5
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('drawingDiv')
}
function setup() {
    canvasX = innerWidth / 2
    canvasY = innerHeight / 2.5
    var Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('drawingDiv');
    lines = new Lines(-5,-5,-5,-5);
    linesarr.push(lines);
}
function reset(){
    linesarr = [];
    lines = new Lines(-5,-5,-5,-5);
    linesarr.push(lines);
}
function draw(){
    stroke(0,255,0)
    strokeWeight(5)
    background(0)
    keyIsDown(69)?(reset()):0;

    for(var i=0;i<linesarr.length;i++){
        linesarr[i].draw();
    }
    if(mouseIsPressed){
        startBool == false?(linesarr[linesarr.length-1].startpos1=mouseX,linesarr[linesarr.length-1].startpos2=mouseY,startBool=true):0;
        endBool == false?(linesarr[linesarr.length-1].endpos1=mouseX,linesarr[linesarr.length-1].endpos2=mouseY):0;
    }
    
}
function mouseReleased(){
    endBool = true;
    lines = new Lines(-5, -5, -5, -5);
    linesarr.push(lines);
    startBool = false;
    endBool = false;
}
class Lines {
    constructor(s1_,s2_,e1_,e2_){
    this.startpos1 = s1_;
    this.startpos2 = s2_;
    this.endpos1 = e1_;
    this.endpos2 = e2_;
    }
    draw(){
        line(this.startpos1,this.startpos2,this.endpos1,this.endpos2);
    }
}