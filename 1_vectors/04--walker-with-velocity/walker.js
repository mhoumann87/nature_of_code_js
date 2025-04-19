// class for a walker
class Walker {
  constructor(x,y, xSpeed, ySpeed) {
    this.position = createVector(x, y);
  }

  // Move the walker
  move() {
    let velocity = p5.Vector.random2D();
    this.position.add(velocity);
  }

  // Draw the walker
  show() {
  noStroke();
  fill(127);
  circle(this.position.x, this.position.y, 1);
  }
}