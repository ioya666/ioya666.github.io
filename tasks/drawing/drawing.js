let startBool = false;
let endBool = false;
let linesarr = [];

function initCanvas() {
    canvasX = innerWidth / 2
    canvasY = innerHeight / 2.5
    let Canvas = createCanvas(canvasX, canvasY);
    Canvas.parent('drawingDiv');
}
function windowResized() {
    initCanvas()
}
function setup() {
    initCanvas()
    reset()
}
function reset() {
    linesarr = [];
    let lines = new Lines(-5, -5, -5, -5);
    linesarr.push(lines);
}
function draw() {
    stroke(0, 255, 0)
    strokeWeight(5)
    background(0)
    keyIsDown(69) ? (reset()) : 0;

    for (let i = 0; i < linesarr.length; i++) {
        linesarr[i].draw();
    }
    if (mouseIsPressed) {
        if (startBool == false) {
            linesarr[linesarr.length - 1].startpos1 = mouseX;
            linesarr[linesarr.length - 1].startpos2 = mouseY;
            startBool = true;
        }
        if (endBool == false) {
            linesarr[linesarr.length - 1].endpos1 = mouseX
            linesarr[linesarr.length - 1].endpos2 = mouseY
        }
    }

}
function mouseReleased() {
    endBool = true;
    lines = new Lines(-5, -5, -5, -5);
    linesarr.push(lines);
    startBool = false;
    endBool = false;
}
class Lines {
    constructor(s1_, s2_, e1_, e2_) {
        this.startpos1 = s1_;
        this.startpos2 = s2_;
        this.endpos1 = e1_;
        this.endpos2 = e2_;
    }
    draw() {
        line(this.startpos1, this.startpos2, this.endpos1, this.endpos2);
    }
}