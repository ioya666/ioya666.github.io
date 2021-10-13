//start of preload
function preload() {
  img = loadImage('../../images/loopsbackground.jpg')
}
//end of preload

//start of responsiveness
function windowResized() {
  var canvasX = 800
  var canvasY = 400
  var Canvas = createCanvas(canvasX, canvasY);
  Canvas.parent('loopDiv');
}
//end of responsiveness

// start of setup
function setup() {
  var canvasX = 800
  var canvasY = 400
  var Canvas = createCanvas(canvasX, canvasY);
  Canvas.parent('loopDiv');
}
// end of setup 
 //start of draw 
function draw(){
  background(img)
  textSize(32);
  text('ioyas math lesson',270,100)
  text('outputs to browser console',210,350)
  fill(255)
  // end of draw
}
// start of countdown
function countdown() {
  var i = 11;
  console.log("|Countdown from 10|")
  while (i>0) {
    i = i - 1;
    console.log(i);
  }
}
//end of countdown
//start of plus
function plus() {
  var i = 0
  var n = 0
  console.log("|1+2+3+4+5+... 20|")
  while (i<210) {
    i = i + n + 1
    n = n + 1
    console.log(i)
  }
}
//end of plus
//start of tables
function tables() {
  var twotable = 0;
  console.log("|2-table|")
  while (twotable < 20) {
  twotable = twotable + 2;
  console.log(twotable)
  }
  var threetable = 0;
  console.log("|3-table|")
  while (threetable < 30) {
  threetable = threetable + 3
  console.log(threetable)
  }
  var fourtable = 0;
  console.log("|4-table|")
  while (fourtable < 40) {
  fourtable = fourtable + 4
  console.log(fourtable)
  }
  var fivetable = 0;
  console.log("|5-table|")
  while (fivetable < 50) {
  fivetable = fivetable + 5
  console.log(fivetable)
  }
  var sixtable = 0;
  console.log("|6-table|")
  while (sixtable < 60) {
  sixtable = sixtable + 6
  console.log(sixtable)
  }
  var seventable = 0;
  console.log("|7-table|")
  while (seventable < 70) {
  seventable = seventable + 7
  console.log(seventable)
  }
  var eighttable = 0;
  console.log("|8-table|")
  while (eighttable < 80) {
  eighttable = eighttable + 8
  console.log(eighttable)
  }
  var ninetable = 0;
  console.log("|9-table|")
  while (ninetable < 90) {
  ninetable = ninetable + 9
  console.log(ninetable)
  }
  var tentable = 0;
  console.log("|10-table|")
  while (tentable < 100) {
  tentable = tentable + 10
  console.log(tentable)
  }
}
//end of tables
//start of equations
function equations() {
  var yequation = 0;
  var xequation = 0;
  
  console.log("|Equations(1 - 10) y = 3 * x * x + 6 * x + 9|")
  while(xequation <= 10){
    yequation = 3 * xequation * xequation + 6 * xequation + 9;
    console.log("|", "y =", yequation, "|" , "x =", xequation, "|")
    xequation = xequation + 1;
  }
  console.log("|Equations(10 - 100) y = 3 * x * x + 6 * x + 9|")
  xequation = 10;
  while(xequation <= 100) {
    yequation = 3 * xequation * xequation + 6 * xequation + 9;
    console.log("|", "y =", yequation, "|" , "x =", xequation, "|")
    xequation = xequation + 10;
  }
}
//end of equations