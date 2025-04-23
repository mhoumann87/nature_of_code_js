// The mover class
class Mover {
  constructor() {
    // vector for position in the center of canvas
    this.position = createVector(width / 2, height / 2);
    // Empty vector for velocity (movement)
    this.velocity = createVector();
    // A vector for the acceleration 
    this.acceleration = createVector(-0.001, 0.01);
    // A limit for the speed
    this.topSpeed = 10;
  }

  // Move the mover
  move() {
    // Add the acceleration to the velocity
    this.velocity.add(this.acceleration);
    // Set the limit for the velocity
    this.velocity.limit(this.topSpeed);
    // Add the velocity to position
    this.position.add(this.velocity);
  }

  // Draw the mover
  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 30);
  }

  // Let the mover move to the opposite side when 
  // reaching the border of the canvas
  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}