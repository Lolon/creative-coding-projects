//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(800, 400); //Use this function to define the size of the output window
  noLoop();
}

function draw() {
  background(0); //Set your background color to black (0)
  noFill();
  for (let i=0; i<100; i++){
    push();
    stroke(random(255),random(255),random(255));
    strokeWeight(random(15))
    translate(random(width), random(height));
    rotate(PI/random(360));
    shearX(PI/random(4));
    ellipse(0,0,50,50);
    pop();
  }
}
