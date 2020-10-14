let blades = []; // array of Jitter objects

function setup() {
  createCanvas(700, 400);
  // Create objects
  for (let i = 0; i < 300; i++) {
    blades.push(new Grass());
  }
}

function draw() {
  background(255);
  fill(162, 232, 173)
  rect(0,385,700,390)
  for (let i = 0; i < blades.length; i++) {
    blades[i].move();
    blades[i].display();
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