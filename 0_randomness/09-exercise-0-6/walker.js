/*
  A walker which has its steps size based on a qualifying random value.
  We adjust the algorithm from the previous lesson. Here we use a squared first number. Then we multiply a given ste size with the number returned from the algorithm. 
  */

  // The algorithm
  const acceptReject = () => {
    // Until we get a qualifying number
    while (true) {
      // Pick the first random number
      const r1 = random();
      // square the number and use that as the probability 
      const p = r1 * r1;
      // Pick the second number
      const r2 = random();
      // Check to see if the second is smaller, and this algorithm is finished
      if (r2 < p) {
        return r1;
      }
    }
  }

  class Walker {
    // let the walker start in the middle of the canvas
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

    // move the walker
    step() {
      const step = 5;
      
      // get the step for the x axis
      let xStep = acceptReject() * step;
      // get the chance to move left
      if (random([false, true])) {
        xStep *= -1;
      } 

      // get the step for the y axis
      let yStep = acceptReject() * step;
      // Get the chance to move up
      if (random([false, true])) {
        yStep *= -1;
      }

      // Move the walker
      this.x += xStep;
      this.y += yStep;
    }
  }

  

