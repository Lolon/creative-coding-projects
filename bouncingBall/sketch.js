//https://p5js.org

let diameter;


function setup() {
  createCanvas(400,400);
  x = width/2;
  y = height/2;
  speedX = random(-5., 5.);
  speedY= random(-5.,5.);
  diameter = 50;
  r = random (255);
  g = random (255);
  b = random (255);
}

function draw() {
  background(100);



  x+= speedX;
  y+= speedY;

  if (x>width || x<0) {
    speedX = speedX*-1
    r = random (255);
    g = random (255);
    b = random (255);
    }

  if (y>height || y<0) {
    speedY= speedY*-1;
    r = random (255);
    g = random (255);
    b = random (255);
    }

  stroke(150,150,150,0)
  fill (r,g,b);
  ellipse(x,y,diameter,diameter);
  text(speedX, width/2,height/2-20);

}
