// A class for the mover
class Mover {
  constructor() {
    this.position = createVector(width / 2, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    // And we also have to add some mass as a number
    // We don't have a measurement for an object on a 
    // computer screen, so we can just make one up
    this.mass = 1;
    // I will use a variable for the radius of the circle
    // So I can use it in the checkEdges() function too
    this.size = 35;
  }

  // To apply to Newton's second law, we need to divide
  // the force with the mass
  applyForce(force) {
    // If we use more than one mover, with different mass, we can't
    // change the force, so we need a copy of the force, so that is the
    // one that changes
    let f = force.copy();
    f.div(this.mass);
    // And then we add the force to the acceleration
    this.acceleration.add(f);
  }

  // Move the mover
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    // And then we change the acceleration back to zero
    this.acceleration.mult(0);
  }

  // Show the mover
  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  // Keep the mover inside the canvas
  checkEdges() {
    if (this.position.x > width - this.size) {
      this.position.x = width - this.size;
      this.velocity.x *= -1;
    } else if (this.position.x < 0 + this.size) {
      this.position.x = 0 + this.size;
      this.velocity.x *= -1;
    }

    if (this.position.y > height - this.size) {
      this.position.y = height - this.size;
      this.velocity.y *= -1
    } else if (this.position.y < 0 + this.size) {
      this.position.y = 0 + this.size;
      this.velocity.y *= -1;
    }
  }
}