class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    noStroke();
    fill(0);
    rect(this.x, this.y, 5, 5);
  }

  step() {
    const choice = floor(random(4));
    // Here we decide in which direction the walker should step, based on our random number
    if (choice === 0) {
      // go right
      this.x++;
    } else if (choice === 1) {
      // go left
      this.x--;
    } else if (choice === 2) {
      // go down
      this.y++;
    } else {
      // go up
      this.y--;
    }
  }
}