//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_NestedForLoop - Visual

let size = 50;
let smallSize = 25;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  fill(215, 200, 170);

  function isEven(num) { return num % 2 == 0 }

  //Run the nested loop for x, and y
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      var XunitIsEven = isEven(x);
      var YunitIsEven = isEven(y);

      console.log(XunitIsEven);

      if (!XunitIsEven && YunitIsEven){
        ellipse(size * x + smallSize, size * y +smallSize, size, size);
        rect(size * x + 12.5, size * y + 12.5, smallSize, smallSize);
      }
      else if (XunitIsEven && !YunitIsEven) {
        ellipse(size * x + smallSize, size * y +smallSize, size, size);
        rect(size * x + 12.5, size * y + 12.5, smallSize, smallSize);
      }
      else{
        rect(size * x , size * y, size, size);
        ellipse(size * x + smallSize, size * y+smallSize , smallSize , smallSize);

      }


      //Draw the shape at the corresponding position
      //This will generate a dynamic position for the x and y
      //The shape is redrawn as many times as the loop says (in this case 100)


    }
  }
}
