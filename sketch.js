//Sprite Groups
//different groups are drawn in a diffent order and accessed as arrays

var clouds;
var ghosts;
var asterisk;

let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
//in games you often have many sprites having similar properties behaviors
//(e.g. pills and ghosts in pacMan)
//You can use groups to organize and access them without having many global
//variables. A sprite can belong to multiple groups.
//create empty groups
ghosts = new Group();
clouds = new Group();

asterisk = createSprite(random(0, width), random(0, height),50);
//assign new sprites to the respective groups
for(var i = 0; i<19; i++) {
var newGhost = createSprite(random(0, width), random(0, height),100);
ghosts.add(newGhost);
}

for(var j = 0; j<6; j++) {
var newCloud = createSprite(random(0, width), random(0, height),100);
//set a rotation speed
newCloud.rotationSpeed = -2;
//another way to add a sprite to a group
newCloud.addToGroup(clouds);
}
}

function draw() {
background(255, 255, 255);

//a group can be accessed like an array
//the removed objects will be automatically removed from the groups as well
for(var i = 0; i<ghosts.length; i++) {
var g = ghosts[i];
//moving all the ghosts y following a sin function (sinusoid)
g.position.y += sin(frameCount/10);
}

asterisk.position.x = mouseX;
asterisk.position.y = mouseY;

//instead of drawing all sprites with drawSprites();
//you can draw them selectively by group or single instance
//in the order you want

//e.g. even if the clouds should appear on the top of the ghosts
//I impose a rendering before the others sprites
drawSprites(clouds);
drawSprites(ghosts);
drawSprite(asterisk);
}
