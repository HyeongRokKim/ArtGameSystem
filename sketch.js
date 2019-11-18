let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

var circles;
var boxes;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  circles = new Group();

  for(var i=0; i<200; i++)
  {
    var circle = createSprite(random(0, width), random(0, height));
    circle.setSpeed(random(2, 3), random(0, 360));

    //scale affects the size of the collider
    circle.scale = random(0.5, 1);
    //mass determines the force exchange in case of bounce
    circle.mass = circle.scale;
    //restitution is the dispersion of energy at each bounce
    //if = 1 the circles will bounce forever
    //if < 1 the circles will slow down
    //if > 1 the circles will accelerate until they glitch
    //circle.restitution = 0.9;
    circles.add(circle);
  }

  boxes = new Group();

  for(var j=0; j<4; j++)
  {
    var box = createSprite(random(0, width), random(0, height));
      //setting immovable to true makes the sprite immune to bouncing and displacements
    //as if with infinite mass
    box.immovable = true;

    //rotation rotates the collider too but it will always be an axis oriented
    //bounding box, that is an ortogonal rectangle
    if(j%2==0)
      box.rotation = 170;

    boxes.add(box);
  }
}

 function draw() {
     background(255, 255, 255);
     //circles bounce against each others and against boxes
     circles.bounce(circles);
     //boxes are "immovable"
     circles.bounce(boxes);

     //all sprites bounce at the screen edges
     for(var i=0; i<allSprites.length; i++) {
       var s = allSprites[i];
       if(s.position.x<0) {
         s.position.x = 1;
         s.velocity.x = abs(s.velocity.x);
       }

       if(s.position.x>width) {
         s.position.x = width-1;
         s.velocity.x = -abs(s.velocity.x);
       }

       if(s.position.y<0) {
         s.position.y = 1;
         s.velocity.y = abs(s.velocity.y);
       }

       if(s.position.y>height) {
         s.position.y = height-1;
         s.velocity.y = -abs(s.velocity.y);
       }
     }

     drawSprites();

   }
