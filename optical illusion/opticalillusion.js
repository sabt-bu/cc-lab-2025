let r = 150;
let loop = 12;
let num = 24;
let colorOffset = 0;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('p5-canvas-container');
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke(255, 20);
  ellipse(0, 0, r * 2, r * 2);

  for (let i = 0; i < loop; i++) { // outer loop = rings
    let startingAngle = (360 / loop) * i;

    for (let j = 0; j < num; j++) { // inner loop = balls per ring
      let shiftingAngle = (180 / num) * j;
      let angle = startingAngle + shiftingAngle + frameCount;

      let size;
      if ((frameCount + j) % 20 < 10) {
        size = 8; // smaller
      } else {
        size = 12; // bigger
      }

      // position along larger ring
      let x = r * cos(angle);

      // rainbow color
      let hueValue = (j * (360 / num) + colorOffset) % 360;
      stroke(hueValue, 100, 100);
      fill(hueValue, 100, 100);

      push();
      rotate(-shiftingAngle);
      line(-r, 0, r, 0);
      ellipse(x, 0, size, size);
      pop();
    }
  }

  colorOffset += 1;
}
