//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(200, 200); //Use this function to define the size of the output window

}

function draw() {


  fill(mouseX, 0,0);
  rect(0,0,100,100);
  fill(0,mouseY,0);
  rect(100,0,100,100);
  fill(255-mouseX,255-mouseX,0);
  rect(0,100,100,100);
  fill(0,255-mouseY,255-mouseY);
  rect(100,100,100,100);



  }
