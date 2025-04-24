// Class for the mover
class Mover {
  constructor() {
    // Vector for position in the middle of the canvas
    this.position = createVector(width / 2, height / 2);
    // Empty vector for velocity
    this.velocity = createVector();
    // Empty vector for acceleration
    this.acceleration = createVector();
    // Set top speed for the mover
    this.topSpeed = 5;
  }

  // Move the mover 
  move() {
    // We use the random2D() function that will return a unit vector
    this,this.acceleration = p5.Vector.random2D();
    // and we multiply the unit vector with random value
    this.acceleration.mult(random(2));

    // We add the random acceleration to the velocity and limit the "speed"
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    // add the velocity to the position
    this.position.add(this.velocity);
  }

  // Draw the mover
  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 30);
  }

  // If the mover leaves the canvas we let it appear on the opposite site
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