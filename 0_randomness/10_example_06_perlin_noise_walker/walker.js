/* 
  If we use the noise() function, that is inspired by the Perlin Noise algorithm created by Ken Perlin, gives a smoother walker than the normal random walker.
*/

class Walker {
  constructor() {
    // Instead of a x and y value for the the noise() function, we use a time element, that we increase in every run through.
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    // we take the noise function, that gives us a value between 0 and 1, and map it to a value between 0 and width or height
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0 ,1, 0, height);

    // And we move forward through "time";
    this.tx += 0.01;
    this.ty += 0.01;
  }

  // And we show the walker as a transparent circle
  show() {
    stroke(0);
    strokeWeight(2);
    fill(127, 9);
    circle(this.x, this.y, 20);
  }
}