let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

var paddleA, ball, wallTop, wallBottom;
var MAX_SPEED = 10;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  paddleA = createSprite(30, height/2, 10, 300);
   paddleA.immovable = true;

   wallTop = createSprite(width/2, -30/2, width, 30);
   wallTop.immovable = true;

   wallBottom = createSprite(width/2, height+30/2, width, 30);
   wallBottom.immovable = true;

   ball = createSprite(width/2, height/2, 10, 10);
   ball.maxSpeed = MAX_SPEED;

   paddleA.shapeColor =ball.shapeColor = color(255, 255, 255);

   ball.setSpeed(MAX_SPEED, -180);

}

function draw() {
  background(0);

  paddleA.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);

  ball.bounce(wallTop);
  ball.bounce(wallBottom);

  var swing;
  if(ball.bounce(paddleA)) {
    swing = (ball.position.y-paddleA.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }

  if(ball.position.x<0) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 0);
  }

  if(ball.position.x>width) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 180);
  }


  drawSprites();


}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
