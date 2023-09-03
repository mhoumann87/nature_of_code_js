/*
 * A class to describe the walker
 */
class Walker {
  // Create the walker with start in the middle of the canvas
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  // Method to draw the walker in canvas
  show() {
    // The walker is black
    stroke(0);
    // The wanker is a point
    point(this.x, this.y);
  }

  // Method to move the walker
  step() {
    // We need a variable with our random number between 0 and 1
    const choice = random(1);

    // Algorithm to move the walker based on the value of the random number
    // We give the walker a 30% chance to move down, 30% chance to move right
    // and a 20% for each left and up

    if (choice < 0.2) {
      // We move the walker to the left
      this.x--;
    } else if (choice < 0.4) {
      // We move the walker up
      this.y--;
    } else if (choice < 0.7) {
      // We move right {
      this.x++;
    } else {
      // We move the walker down
      this.y++;
    }
  }
}
