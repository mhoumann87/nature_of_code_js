// Class for the ball
class Ball {
  constructor() {
    // Position of the  ball
    this.x = 100;
    this.y = 100;
    // Ball speed
    this.xSpeed = 2.5;
    this.ySpeed = 2;
    // Ball size
    this.size = 35;
  }

  // Move the ball with boundaries
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Make the ball stay inside the canvas
    if (this.x > width - this.size / 2 || this.x < 0 + this.size / 2) {
      // if the ball is close to the edge, reverse the speed
      this.xSpeed *= -1;
    } 

    if (this.y > height - this.size / 2 || this.y < 0 + this.size / 2) {
      this.ySpeed *= -1;
    }
  }

  // Draw the ball
  show() {
    stroke(0);
    fill(120);
    circle(this.x, this.y, this.size);
  }
}