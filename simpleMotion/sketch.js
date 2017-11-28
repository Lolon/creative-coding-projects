//https://p5js.org

function setup() {
  createCanvas(480, 640);
  x = random(width);
  y = random(height);
  background(100);

}

function draw() {

  x++;
  y++;

  if (x>width) x = 0;
  if (y>height) y = 0;
  stroke(150,150,150)
  ellipse(x,y,50,50);

}
