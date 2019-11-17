let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

//Moving sprites
var ghost, circle;
var direction = 90; //circle initial direction moving down

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  //create the sprites
 ghost = createSprite(600, 200, 50, 100);

 circle = createSprite(400, 200, 50, 100);
 
}

function draw() {
  background(255, 255, 255);

  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle
  circle.setSpeed(3, direction);

  //you can rotate the sprite according the direction it is moving
  //uncomment this
  //circle.rotateToDirection = true;

  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  ghost.attractionPoint(0.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can
  //set a limit to it with maxSpeed
  ghost.maxSpeed = 5;

  //draw the sprite
  drawSprites();
}
