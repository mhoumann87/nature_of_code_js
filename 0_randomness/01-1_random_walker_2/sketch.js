// A variable for our walker
let walker;

function setup() {
  createCanvas(640, 480);
  background(255);

  // Create our walker
  walker = new Walker();
}

function draw() {
  // Now we can move the walker
  walker.step();
  // And show our walker
  walker.show();
}
