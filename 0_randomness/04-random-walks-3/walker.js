/* 
  A random walker with a "tendency" to move towards the mouse pointer
*/

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  } 

  // Draw the walker
  show() {
    noStroke();
    fill(0);

    rect(this.x, this.y, 5, 5);
  }

  // Move the walker
  step() {
    // Get a random number between 0 and 0.99
    const choice = random();

    // get the position of the mouse pointer
    const dirX = mouseX;
    const dirY = mouseY;

    // Base the first four options on the choice with an equal chance to move in any direction
    if (choice < 0.125) {
      // move left
      this.x--;
    } else if (choice < 0.25) {
      // move right
      this.x++;
    } else if (choice < 0.375) {
      // move up
      this.y--;
    } else if (choice < 0.5) {
      // move down
      this.y++;
    } else {
      // Now we have to use the mouse pointer variables and compare them to the current position
      if (this.x < dirX) {
        this.x++;
    } else {
      this.x--;
    }

    if (this.y < dirY) {
      this.y++;
    } else {
      this.y--;
    }
   }
  }
}