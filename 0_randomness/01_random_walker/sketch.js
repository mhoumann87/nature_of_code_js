// Now let us create a variable to "hold" our walker
let walker;

function setup() {
  createCanvas(640, 480);
  background(255);

  // Now we create the walker
  walker = new Walker();
}

function draw() {
  // We move our walker
  walker.step();
  // And draw it on the canvas
  walker.show();
}
