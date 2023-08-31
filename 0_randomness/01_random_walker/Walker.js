/*
 * We are using the classic `Random Walker` algorithm to demonstrate/learn about OOP in
 * javascript.
 */

// First we create a walker class and REMEMBER to add it to the index.html file
class Walker {
  // "Setup our walker to start in the middle of the canvas"
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  // We can also create some methods (functions) for our walker

  // Our first method is to establish how to display out wanker in the canvas
  show() {
    // We make our walker black to be able to see it on a white canvas
    stroke(0);
    // and we draw it as a point where we have our x and y coordinates from the constructor
    point(this.x, this.y);
  }

  // This method is used for moving our walker
  step() {
    // First we get a random value between 0 and 4, using the `random` function in the p5
    // library. We `floor` the number to round down the value given
    let choice = floor(random(4)); // Gives us 0, 1, 2 or 3

    // We can now use this random number to move our walker based to the result

    /* 
    * The example in the book uses a if/else look, but I think it would be better
    if (choice === 0) {
      // We move the walker to the right on the canvas
      this.x++;
    } else if (choice === 1) {
      // We move left
      this.x--;
    } else if (choice === 2) {
      // We move down
      this.y++;
    } else {
      // We move up
      this.y--;
    }
  
  * but I think a switch statement would be better
  */

    switch (choice) {
      case 0:
        // move right
        this.x++;
        break;
      case 1:
        // move left
        this.x--;
        break;
      case 2:
        // Move down
        this.y++;
        break;
      default:
        // Move up
        this.y--;
    }
  }
}
