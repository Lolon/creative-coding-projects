//https://p5js.org
let circleArray = [];
let arraySize = 1000;

function setup() {
  createCanvas(500, 500);
  for (let i=0; i<arraySize; i++){ //loops the ammount of cicles we want
    circleArray[i] = new Circle(width/2, height/2, random(-5,5), random(-5,5), random(10,100));
    //fills each unit of the array with the class object
  }
}

function draw() {
  background(160);
  for (let i=0; i<circleArray.length; i++){ //for each of the circles in the array
    circleArray[i].moveFunction(); //move function
    circleArray[i].displayCircle(); //display circle function
  }
}

class Circle {
  constructor(x,y,speedX,speedY,size) { //constructs the variables and specified when 'new' is called
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
  }

  moveFunction(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  displayCircle(){
    noStroke();
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x,this.y, this.size, this.size);
  }
}
