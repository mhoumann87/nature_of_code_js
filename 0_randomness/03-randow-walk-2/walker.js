// A walker class, but this one prefers to go to right and down

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    noStroke();
    fill(0)

    rect(this.x, this.y, 5, 5)
  }

  step() {
    /* 
    Here we work with random function without any arguments. This will give us a floating point number between 0 and 0.99.
    Based on this number we can prefer different options for the output.
    Here we want the walker to go right and down, and we way these options higher.
     */
    const choice = random();

    if (choice < 0.15) {
      // go left
      this.x--;
    } else if (choice < 0.3) {
      // go up
      this.y--;
    } else if (choice < 0.65) {
      // go right
      this.x++;
    } else {
      // go down
      this.y++;
    }
  }
}