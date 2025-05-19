let orbs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    orbs.push(new Orb());
  }
}

function draw() {
  background(10, 10, 30);
  for (let orb of orbs) {
    orb.move();
    orb.display();
  }
}

function changeColor() {
  return color(random(100, 255), random(100, 255), random(100, 255), 150);
}

class Orb {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(30, 80);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.col = changeColor();
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }

  display() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.size);
  }
}
