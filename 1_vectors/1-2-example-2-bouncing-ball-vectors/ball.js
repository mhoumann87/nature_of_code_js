// Class for a ball using vectors
class Ball {
  constructor() {
    // Set the position
    this.position = createVector(100, 100);
    // Set the "speed"
    this.velocity = createVector(2.5, 2);
    // Set the size of the ball
    this.size = 40;
  }

  // Move the ball
  move() {
    // Add the speed to the position
    this.position.add(this.velocity);
    // Set the borders for the canvas
    if (this.position.x > width - this.size / 2 || this.position.x < 0 + this.size / 2) {
      this.velocity.x *= -1;
    }

    if (this.position.y > height - this.size / 2 || this.position.y < 0 + this.size / 2) {
      this.velocity.y *= -1;
    }
  }

    // Draw the ball
    show() {
      stroke(0);
      fill(127);
      circle(this.position.x, this.position.y, this.size);
    } 
  }
