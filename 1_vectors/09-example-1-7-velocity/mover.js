// A mover class
class Mover {
  constructor() {
    // Place a vector the mover in the canvas att a random place
    this.position = createVector(random(width), random(height));
    // Give the mover some random speed using a vector for velocity
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    
  }

  // Move the mover
  move() {
    this.position.add(this.velocity);
  }

  // Draw the mover
  show() {
    stroke(0);
    strokeWeight(2);
    fill(120);
    circle(this.position.x, this.position.y, 30)
  }

  // Check if the mover goes outside the canvas, and move it to the
  // opposite site
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