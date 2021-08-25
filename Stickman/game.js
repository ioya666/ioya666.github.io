

//Variables.
let img;
let headX = 400;
let headY = 200;
var movement = 5;
var left = false;
var right = false;
var up = false;
var down = false;
var borderX = 70
var borderYa = 150
var borderYb = 50
var canvasX = innerWidth/2;
var canvasY = innerHeight/2.5;

function preload(){
  img = loadImage('../images/framestickman.png')
}
function windowResized(){
  canvasX = innerWidth/2;
  canvasY = innerHeight/2.5;
  var Canvas = createCanvas(canvasX, canvasY);
  Canvas.parent('canvasDiv');
  
}
function setup() { // start of setup
  var Canvas = createCanvas(canvasX, canvasY);
  Canvas.parent('canvasDiv');
} // slutningen af setup

function draw() { //start af draw
  background(img);
  
  if (left == true) {
    headX = headX - movement;
  }
  if (right == true) {
    headX = headX + movement;
  }
  if (up == true) {
    headY = headY - movement;
  }
  if (down == true) {
    headY = headY + movement;
  }

  //head
  push();
  fill(0);
  circle(headX, headY, 40);
  pop();
  //eyes
  push();
  circle(headX - 10, headY, 10);
  circle(headX + 10, headY, 10);
  pop();
  //pupils
  push();
  fill(0);
  circle(headX - 10, headY, 3);
  circle(headX + 10, headY, 3);
  pop();
  //mouth
  push();
  fill(255, 5, 0);
  stroke(255, 5, 0);
  triangle(headX, headY + 10, headX - 8, headY + 15, headX + 8, headY + 15);
  pop();
  
  //body
  push()
  strokeWeight(4)
  line(headX,headY+21,headX,headY+80)
  //rightarm
  line(headX,headY+28,headX+20,headY+50)
  //leftarm
  line(headX,headY+28,headX-20,headY+50)
  //rightleg
  line(headX,headY+80,headX+20,headY+120)
  //leftleg
  line(headX,headY+80,headX-20,headY+120)
  pop()
  
  
  //boxing gloves
  push()
  fill(255,0,0)
  stroke(255,0,0)
  circle(headX+30,headY+60,20)
  circle(headX-30,headY+60,20)
  pop()
  
  
  //boxing gloves accessories
  push()
  fill(48,24,0)
  translate(headX+22, headY+52);
  stroke(0)
  angleMode(DEGREES)
  rotate(45)
  rect(-4,-7.5,8,15)
  pop()
  
  push()
  fill(48,24,0)
  translate(headX-22, headY+52);
  stroke(0)
  angleMode(DEGREES)
  rotate(-45)
  rect(-4,-7.5,8,15)
  pop()

  //boxing shorts
  push()
  translate(headX+5,headY+90)
  stroke(0)
  fill(173,216,230)
  angleMode(DEGREES)
  rotate(-25)
  rect(-10,-12.5,20,25)
  pop()
  
  push()
  translate(headX-5,headY+90)
  stroke(0)
  fill(173,216,230)
  angleMode(DEGREES)
  rotate(25)
  rect(-10,-12.5,20,25)
  pop()

  push()
  fill(240,240,240)
  stroke(0)
  rect(headX-12.5,headY+75,25,10)
  pop()
  
  //variable for canvas
  if(headX+borderX > canvasX) {
    headX = canvasX-borderX;
  }
  if(headX-borderX < 0) {
    headX = borderX;
  }
  if(headY+borderYa > canvasY) {
    headY = canvasY-borderYa;
  }
  if(headY-borderYb < 0) {
    headY = borderYb;
  }
  
} 
// end of draw

function keyPressed() { // start of keyPressed
  if (keyCode === LEFT_ARROW) {
    left = true;
  }
  if (keyCode === RIGHT_ARROW) {
    right = true;
  }
  if (keyCode === UP_ARROW) {
    up = true;
  }
  if (keyCode === DOWN_ARROW) {
    down = true;
  }
  return false;
} // slutningen af KeyPressed

function keyReleased() { // start of keyReleased
  if (keyCode === LEFT_ARROW) {
    left = false;
  }
  if (keyCode === RIGHT_ARROW) {
    right = false;
  }
  if (keyCode === UP_ARROW) {
    up = false;
  }
  if (keyCode === DOWN_ARROW) {
    down = false;
  }
} // slutningen af keyReleased
