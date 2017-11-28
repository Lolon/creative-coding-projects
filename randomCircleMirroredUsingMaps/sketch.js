//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//set default values for the starting color, speed and ellipse diameter. Also declare x1 and y1 but not set any values yet
let r = 255; let g = 255; let b = 255;
let speed = 15; let diameter = 50;
let x1; let y1;


function setup() {
  createCanvas(500,500);
  x1 = width/2-50; //set x1 to the half of the width(center screen) minus 50 (to seperate each ellipse)
  y1 = height/2+50; //same for y

  background(200);
}
function draw() {
x1 += random(-speed, speed); // set x to a random number inside its speed in either direction. x+=y --> x=x+y
y1 += random(-speed, speed); //same for y
x1 = constrain(x1,0,width/2-(diameter/2)); //constrain the value to its corner of the screen
y1 = constrain(y1,0,height/2-(diameter/2)); //same for y
x2 = map(x1,0,500,500,0); //the map will compare two number ranges and find where a unit fits inside that. Here, we have a range of 0-500 and a range of 500-0, so x2 will be x1 compared to that range
y2 = map(y1,0,500,500,0);


//when the mouse is pressed randomly generate a color
if (mouseIsPressed){
  r = random(255);
  g = random(255);
  b = random(255);
  }

fill (r,g,b,120);

ellipse(x1,y1,diameter,diameter);
ellipse(x2,y1,diameter,diameter); //use maths to invert the ellipse position
ellipse(x1,y2,diameter,diameter); //^
ellipse(x2,y2,diameter,diameter); //^^

}
