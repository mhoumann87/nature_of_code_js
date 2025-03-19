/* 
  A random walker class where and randomGaussian() sets the numbers of steps for both x and y 
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
    
    rect(this.x, this.y, 10, 10);
  }

  // Move the walker
  step() {
    // Steps
    const stepX = floor(randomGaussian(0, 5));
    const stepY = floor(randomGaussian(0, 5));

    this.x += stepX;
    this.y += stepY;
  }
}