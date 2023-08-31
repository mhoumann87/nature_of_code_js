/*
 * The first walker we made, had the possibility to move up, down, left, right.
 * The walker we are making here can also move diagonal, so we have 8 steps, but the
 * code are much simpler as we will see
 */

// First the class (remember to add it to the index.html file)
class Walker {
  constructor() {
    // We start in the middle of the canvas
    this.x = width / 2;
    this.y = height / 2;
  }

  // We make a method to draw our walker
  show() {
    // Make it black
    stroke(0);
    // And make it a point
    point(this.x, this.y);
  }

  // And we need a method to move out walker
  step() {
    /*  
    * We can make the code a lot shorter here than it is in the book
    // Where we before needed a random number between 0 and 3, we here need two random numbers,
    // between -1 and 1 (-1, 0, 1). One for x and y
    const xStep = floor(random(3)) - 1;
    const yStep = floor(random(3)) - 1;

    // Now we can just add that number to our x and y for the walker
    this.x += xStep;
    this.y += yStep; */

    this.x += floor(random(3)) - 1;
    this.y += floor(random(3)) - 1;
  }
}
