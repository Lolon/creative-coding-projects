//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_NestedForLoop - Visual

let size = 50;
function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("myContainer");
}

function draw() {

  background(0);

//maps allows a unit to be mapped to a range, in the first case: 0 to 255
  var mouse1 = map(mouseY, 0,height, 0,255);
  var mouse2 = map(mouseX, 0,width, 0,255);
  var mouse3 = map(mouseY, 0,width, 255,0);



  stroke(255,255,255);

  //making a grid of 100 boxes
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {

      //x and y pointer
      if(mouseX>x*size && mouseX<x*size+size && mouseY>y*size && mouseY<y*size+size){
        fill (255,0,0,255);
      }
      //line
      else if (mouseX>x*size && mouseX<x*size+size) {
        fill (150 ,200 ,255 , mouse1);
      }
      else if (mouseY>y*size && mouseY<y*size+size) {
        fill (150 ,200 ,255 , mouse2);
      }
      //background
      else{
        fill (201,172,255, mouse3 );
        console.log(mouseY/255);
      }
      //then build the rectangle
      rect(x*size, y*size, size, size);
    }
  }
}
