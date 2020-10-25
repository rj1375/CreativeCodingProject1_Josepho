// set Clouds count array
let clouds = [];

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
  
  // Initialize clouds
  for (let i = 0; i < 250; i++){
    if(i < 200){
      max = 1;
    }else{
      max=4;
    }
    clouds.push(new Cloud(max));
  }

}

function draw() {

// Draw Background
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);

// Draw Clouds
    for (var i = 0; i < clouds.length; i++) {
    clouds[i].move();
    clouds[i].display();
    }
  

// Draw grass
  noStroke();
  fill(162, 232, 173);
  rect(0,375,700,390);

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
    this.jitter = .5;
  }

  move() {
    this.x += random(-this.jitter, this.jitter);
  }

  display() {
    
    
    stroke(101, 201, 112)
    line(this.x-35, this.y+10,this.x,this.y-this.length)
    stroke(162, 232, 173)
    line(this.x-40, this.y+10, this.x,this.y-this.length);
    stroke(219, 255, 223)
    line(this.x-30,this.y+20,this.x,this.y-this.length)
    
  }
}



class Cloud {
  constructor(max) {
    this.x = random(-20, width);
    this.y = random(0, 275);
    this.size = random(0.1,max);
  }
  
  display() {

  // white part of the cloud
    
     fill(255, 255, 255,200);
     noStroke();
     ellipse(this.x, this.y-5, 25 * this.size, 20 * this.size)
     ellipse(this.x + 10, this.y-5, 20 * this.size, 20 * this.size)
     ellipse(this.x + 25, this.y-5, 20 * this.size, 20 * this.size)
     ellipse(this.x + 40, this.y-5, 30 * this.size, 20 * this.size)
    
     arc(this.x, this.y, 25 * this.size, 20 * this.size, PI + TWO_PI, TWO_PI);
     arc(this.x + 10, this.y, 25 * this.size, 45 * this.size, PI + TWO_PI, TWO_PI);
     arc(this.x + 25, this.y, 25 * this.size, 35 * this.size, PI + TWO_PI, TWO_PI);
     arc(this.x + 40, this.y, 30 * this.size, 20 * this.size, PI + TWO_PI, TWO_PI);
    
    
//  // center blue tint of the cloud
    
    fill(247, 252, 255,50)
    noStroke();
    ellipse(this.x, this.y, 10 * this.size, 5 * this.size)
    ellipse(this.x + 10, this.y, 20 * this.size, 10 * this.size)
    ellipse(this.x + 40, this.y, 20 * this.size, 7 * this.size)
    ellipse(this.x + 20, this.y, 10 * this.size, 12 * this.size)
    
    arc(this.x, this.y, (25 * this.size)/2, (20 * this.size)/2, PI + TWO_PI, TWO_PI);
     arc(this.x + 10, this.y, (25 * this.size)/2, (45 * this.size)/2, PI + TWO_PI, TWO_PI);
     arc(this.x + 25, this.y, (25 * this.size)/2, (35 * this.size)/2, PI + TWO_PI, TWO_PI);
     arc(this.x + 40, this.y, (50 * this.size)/2, (20 * this.size)/2, PI + TWO_PI, TWO_PI);
  
  
  }
  
  // speed of clouds
  
  move() {
    if(this.size < 1){
      this.x = this.x += 1;
    }
    if(this.size < 1.5 && this.size > 1){
      this.x = this.x += 0.75;
    }
    if(this.size > 1.5 && this.size < 2){
      this.x = this.x += 0.5;
    }
     if(this.size > 2 && this.size < 2.5){
      this.x = this.x += 0.25;
     }
    if(this.size > 3){
      this.x = this.x += 0.01;
    }

    
    this.y = this.y + random(-1, 1);
    
    
    if(this.x >= width+20){
      this.x = -200;
     
    }
  }
}