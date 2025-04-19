// A Walker class
class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
  }

  // Move the walker
  move() {
    // Get a random number between 0 and 3
    const ranNum = floor(random(4));
    // And move the walker using this number
    if (ranNum === 0) {
      this.position.x += 1;
    } else if (ranNum === 1) {
      this.position.x -= 1;
    } else if (ranNum === 2) {
      this.position.y += 1;
    } else {
      this.position.y -= 1;
    }
  }

  // Draw the walker
  show() {
    noStroke();
    fill(55);
    circle(this.position.x, this.position.y, 5);
  }
}