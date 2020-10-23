// set Kite variable 
let kite = {
  cx: 75,
  cy: 40,
};

// set Grass count array
let blades = []; // array of Jitter objects

// set Gradient variables
const Y_AXIS = 1;
let b1, b2, c1, c2;




function setup() {
  createCanvas(700, 400);
  
// define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(209, 227, 255);
  c2 = color(0, 102, 153);

   // Initialize grass
  for (let i = 0; i < 2000; i++) {
    blades.push(new Grass());
  }

  
  
}

function draw() {

// Draw Background
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);

// Draw grass
  fill(162, 232, 173);
  rect(0,385,700,390);

  for (let i = 0; i < blades.length; i++) {
    blades[i].move();
    blades[i].display();
}

// Draw Kite
  fill(250,200,200);
  
 let y1 = map(mouseY, 0, height, 25, 300, true);
  
//   pushMatrix();
//   translate(400,0);
  quad(kite.cx, y1-40, kite.cx+25, y1, kite.cx, y1+40, kite.cx-75, y1)
  // popMatrix();
  
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