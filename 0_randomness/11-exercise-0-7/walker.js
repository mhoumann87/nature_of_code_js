/*
  The walker here use the noise() function to set the size of the step, and we map the result of the function between 1 and 5
*/

class Walker {
  constructor() {
    // We set use arbitrary numbers for the "time"
    this.xt = 0;
    this.yt = 10000;
    // Start the walker in the middle of the canvas
    this.x = width / 2;
    this.y = height / 2;
    // We draw a line, so we need to "know" where we are coming from
    this.oldX = this.x;
    this.oldY = this.y;
  }

  // Move the walker
  step() {
  // We map the random number we get from the noise() function that are between 
  // 0 and 1 and map it between -1 and 1
  this.x += map(noise(this.xt), 0, 1, -1, 1);
  this.y += map(noise(this.yt), 0 , 1, -1, 1);

  // Increase the "time"
  this.xt += 0.01;
  this.yt += 0.01;
  } 

  // Draw the walker
  show() {
    stroke(0);
    // Draw a line to where the walker goes
    line(this.oldX, this.oldY, this.x, this.y);

    // We set the oldX and oldY to x and y for the next run
    this.oldX = this.x;
    this.oldY = this.y;
  }
}