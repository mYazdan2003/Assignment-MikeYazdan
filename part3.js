const circles = [];
const border = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let coat = 1; coat <= 5; coat++) {
    for (let i = 0; i < 255; i++) {
      circles.push(new Circle(coat));
    }
  }
}

function draw() {
  background(0);
  for (const circle of circles) {
    circle.draw();
  }
  textSize(50);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text('"Move Your Cursor"', windowWidth / 2, windowHeight / 2);
}

class Circle {
  constructor(coat) {

    this.coat = coat;
    this.x = random(-border, width + border);
    this.y = random(-border, height + border);
    

    this.r = random(200);
    this.g = random(255);
    this.b = random(225);
  }

  draw() {
    let cursorX = 0;
    let cursorY = 0;


    if(mouseX != 0 && mouseY != 0){
      cursorX = -this.coat *
        map(mouseX - width / 2, 0, width, 0, 5);
      cursorY = -this.coat *
        map(mouseY - height / 2, 0, height, 0, 5);
    }

    this.x += cursorX;
    this.y += cursorY;

    if (this.x < -border) {
      this.x = width + random(border);
      this.y = random(0, height);
    } else if (this.x > width + border) {
      this.x = 0 - random(border);
      this.y = random(0, height);
    }

    if (this.y < -border) {
      this.y = height + random(border);
      this.x = random(0, width);
    } else if (this.y > height + border) {
      this.y = 0 - random(border);
      this.x = random(0, width);
    }

    fill(this.r, this.g, this.b);
    circle(this.x, this.y, 15 / (5 - this.coat));
  }
}