// Mover class
class Mover {
  constructor() {
    // vector for position
    this.position = createVector(width / 2, height /2);
    // Empty vector for velocity
    this.velocity = createVector(0, 0);
    // Vector for acceleration
    this.acceleration = createVector(0, 0);
  }

  // Move the mover
  move() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(15);

    // stop the mover if acceleration is "turned" down
    if (this.velocity.x <= 0) {
      this.velocity.x = 0;
      this.acceleration.x = 0;
    } 
  }

    // If the mover go outside the canvas "put" it back to 0
    checkEdges() {
      if (this.position.x > width) {
        this.position.x = 0;
      }
   }

   // Draw the mover
   show() {
    noStroke()
    fill(127);
    circle(this.position.x, this.position.y, 15);
   }

   // Let the user change the speed with up and down arrows
   keyPressed() {
    if (keyCode === UP_ARROW) {
      this.acceleration.x += 0.01;
    }

    if (keyCode === DOWN_ARROW) {
      this.acceleration.x -= 0.01;
    }
   }

}