let blades = []; // array of Jitter objects
const Y_AXIS = 1;
let b1, b2, c1, c2;


function setup() {
  createCanvas(700, 400);

// define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  
}

function draw() {
  background(255);

  setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);

  fill(162, 232, 173);
  rect(0,385,700,390);

 // Create objects
  for (let i = 0; i < 300; i++) {
    blades.push(new Grass());
  }

  for (let i = 0; i < blades.length; i++) {
    blades[i].move();
    blades[i].display();
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

 if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}


// Grass class
class Grass {
  constructor() {
    this.x = random(width);
    this.y = 390;
    this.length = random(30,80);
    this.speed = .5;
  }

  move() {
    this.x += random(-this.speed, this.speed);
  }

  display() {
    stroke(184, 242, 192)
    line(this.x,this.y-30,this.x-2,this.y-this.length)
    noStroke()
    fill(182, 242, 189)
    ellipse(this.x, this.y-15,3,this.length)
    fill(162, 232, 173)
    ellipse(this.x, this.y, 5,this.length);
    
  }
}