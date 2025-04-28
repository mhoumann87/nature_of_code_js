// Class for a mover that accept diff mass, and start position
// so we can make more than one mover
class Mover {
  constructor(_x, _y, _m) {
    this.position = createVector(_x,_y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = _m;
  }

  // Apply the force
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  // Make the movers move
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  // Draw the mover
  show() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.position.x, this.position.y, this.mass * 10);
  }

  // Keep the mover inside the canvas
  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
}