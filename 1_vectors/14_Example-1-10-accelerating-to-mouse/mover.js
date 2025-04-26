// Class for the mover
class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.maxSpeed = 5;
  }

  // Move the mover
  move() {
    // We create a vector for the position of the mouse pointer
    let mouse = createVector(mouseX, mouseY);
    // Calculate the direction
    let dir = p5.Vector.sub(mouse, this.position);
    // Normalize the direction
    dir.normalize();
    // Scale the direction
    dir.mult(0.2)
    // The last two steps could be done with
    // dit.setMag(0.2);

    // Set the acceleration
    this.acceleration = dir;

    // Add the acceleration to velocity
    this.velocity.add(this.acceleration);
    // Set limit for velocity
    this.velocity.limit(this.maxSpeed);
    // Add velocity to position
    this.position.add(this.velocity);
  }

  // Draw the mover
  show() {
    stroke(0)
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 30);
  }
}