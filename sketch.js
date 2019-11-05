let backCa=0, backCb=0,backCc=0;
let x = [],
  y = [],
  segNum = 20,
  segLength = 10;

let bX, bY;
let vX, vY;

let ball;
let balls = [];

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(10);
  stroke(255,80);


  textSize(width/35);
  textAlign(CENTER, CENTER);


  foodLocation();

   vx = random(5);
   vy = random(5);

   for (let i = 0; i < 100; i++) {
    let b = new Ball();
    b.w = 10;
    b.c =color(random(0,255),random(0,250),random(0,250),100);
    balls.push(b);
   }

  setInterval(foodLocation,5000);

}

function foodLocation() {
  let a = floor(random(width)-20);
  let b = floor(random(height)-20);
  food = createVector(a, b);
}


function draw() {
  background(backCa,backCb,backCc,50);

  text('when you click the mouse the color of the background will change',350, 30);



  drawFood();
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }

  if(mouseX >= food.x &&
     mouseX <= food.x + 20 &&
     mouseY >= food.y &&
     mouseY <= food.y + 20){

    balling();

    // 마우스가 음식에 닿으면 공이 튀어나오게 했는데
    // 그 뒤에 바로 foodLocation(); 해서 음식 위치 변하게 할라했는데
    // 그렇게 되면 공 튀기는게 거의 안보임

  }

    if(mouseIsPressed==true){
    backCa = random(255);
    backCb = random(255);
    backCc = random(255);

    //여기에 background(random(255),random(255),random(255)); 를 했는데ㅠ
    // 잠깐 깜박이고 말고



   }


}

function balling(){
  for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].move();
      balls[i].bounce();
    }
}

function drawFood(){

  fill(255);
  rect(food.x, food.y, 20, 20,5);
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

  class Ball {
    constructor() {
      this.x = food.x;
      this.y = food.y;
      this.vx = random(-5, 5);
      this.vy = random(-5, 5);
      this.w = 10;
      this.c = color(200);
    }

    draw() {
      fill(this.c);
      rect(this.x, this.y, this.w, this.w,random(1,5));
    }

    move() {
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    }

    beBigger(){
      this.w = this.w+5;
    }

    bounce() {
      if (this.x < 0 || width < this.x) {
        this.vx = this.vx * -1;
        this.beBigger();
        fill(this.c);
      }

      if (this.y < 0 || height < this.y){
        this.vy = this.vy * -1;
        this.beBigger();
        fill(this.c);
      }
    }

}
