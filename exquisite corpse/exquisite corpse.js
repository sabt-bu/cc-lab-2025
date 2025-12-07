let pixelSize = 20; // size of each square
let img;

function preload() {
  img = loadImage("./exquisite corpse/pixel_art_small.png"); // reference
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('p5-canvas-container');
  background(255);
  noStroke();
  textSize(16);
}

function draw() {
  background(255);

  // faded reference
  tint(255, 100);
  image(img, 0, 0, width, height);
  noTint();

  // horizontal guide lines
  stroke(150, 0, 0);
  strokeWeight(2);
  line(0, height / 3, width, height / 3);
  line(0, (height / 3) * 2, width, (height / 3) * 2);
  
  //grid
  drawGrid(width, height, pixelSize);
  noStroke(); 

  //drawing
      fill(255, 0, 0);
rect(2 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
    fill(255, 0, 0);
rect(3 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
        fill(255, 0, 0);
rect(3 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
      fill(255, 0, 0);
rect(3 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
  fill(255, 0, 0);
rect(4 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
  fill(255, 0, 0);
rect(6 * pixelSize, 0 * pixelSize, pixelSize, pixelSize);
  
  fill(255, 0, 0);
rect(7 * pixelSize, 0 * pixelSize, pixelSize, pixelSize);
  
    fill(255, 0, 0);
rect(8 * pixelSize, 0 * pixelSize, pixelSize, pixelSize);
  
  fill(255, 0, 0);
rect(9 * pixelSize, 0 * pixelSize, pixelSize, pixelSize);
  
    fill(255, 0, 0);
rect(10 * pixelSize, 0 * pixelSize, pixelSize, pixelSize);
  
    fill(255, 0, 0);
rect(11 * pixelSize, 0 * pixelSize, pixelSize, pixelSize);
  
   fill(255, 0, 0);
rect(5 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
     fill(0, 0, 0);
rect(5 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(4 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(5 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
           fill(0, 0, 0);
rect(5 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
           fill(0, 0, 0);
rect(6 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
             fill(0, 0, 0);
rect(7 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
               fill(0, 0, 0);
rect(8 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                 fill(0, 0, 0);
rect(10 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                   fill(0, 0, 0);
rect(11 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                     fill(0, 0, 0);
rect(12 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                       fill(0, 0, 0);
rect(13 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                           fill(255, 0, 0);
rect(14 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                             fill(255, 0, 0);
rect(15 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                               fill(0, 0, 0);
rect(15 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
                                 fill(255, 0, 0);
rect(16 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
                                   fill(255, 0, 0);
rect(16 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
  
                         fill(0, 0, 0);
rect(14 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
             fill(0, 0, 0);
rect(7 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(6 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(6 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(7 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(8 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(9 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(10 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(11 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(12 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
   fill(255, 0, 0);
rect(12 * pixelSize, 0 * pixelSize, pixelSize, pixelSize);
  
  fill(255, 0, 0);
rect(13 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
   fill(255, 0, 0);
rect(14 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
  
     fill(0, 0, 0);
rect(4 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(5 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(6 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(5 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(4 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(4 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(4 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(4 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(4 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(5 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(5 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(6 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(14 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(15 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(16 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
       fill(0, 0, 0);
rect(16 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(15 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(15 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(16 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(16 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(16 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(15 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(15 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(15 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(13 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
         fill(0, 0, 0);
rect(13 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
           fill(0, 0, 0);
rect(12 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
           fill(0, 0, 0);
rect(11 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
           fill(0, 0, 0);
rect(14 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
           fill(255, 0, 0);
rect(17 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(9 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(10 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(9 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(8 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(7 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(8 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(9 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(10 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(11 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(12 * pixelSize, 4 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(13 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(14 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
           fill(255, 0, 0);
rect(16 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
             fill(240, 143, 104);
rect(12 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
               fill(240, 143, 104);
rect(11 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
                 fill(240, 143, 104);
rect(10 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
                   fill(240, 143, 104);
rect(9 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(8 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(7 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
                     fill(240, 143, 104);
rect(6 * pixelSize, 5 * pixelSize, pixelSize, pixelSize);
  
                     fill(0);
rect(9 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                       fill(0);
rect(10 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                         fill(240, 143, 104);
rect(11 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(0);
rect(12 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(240, 143, 104);
rect(13 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(240, 143, 104);
rect(14 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(240, 143, 104);
rect(8 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(0);
rect(7 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(240, 143, 104);
rect(6 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(240, 143, 104);
rect(5 * pixelSize, 6 * pixelSize, pixelSize, pixelSize);
  
                           fill(240, 143, 104);
rect(5 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(6 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(7 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(8 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(9 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(10 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(11 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(12 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(13 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(14 * pixelSize, 7 * pixelSize, pixelSize, pixelSize);
  
                             fill(240, 143, 104);
rect(14 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(240, 143, 104);
rect(13 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(240, 143, 104);
rect(12 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(240, 143, 104);
rect(11 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(0);
rect(10 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(0);
rect(9 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(240, 143, 104);
rect(8 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(240, 143, 104);
rect(7 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(240, 143, 104);
rect(6 * pixelSize, 8 * pixelSize, pixelSize, pixelSize);
  
                               fill(240, 143, 104);
rect(7 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
                                 fill(240, 143, 104);
rect(8 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
                                 fill(240, 143, 104);
rect(9 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
                                 fill(240, 143, 104);
rect(10 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
                                 fill(240, 143, 104);
rect(11 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
                                 fill(240, 143, 104);
rect(12 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
                                 fill(240, 143, 104);
rect(13 * pixelSize, 9 * pixelSize, pixelSize, pixelSize);
  
              fill(244, 231, 219);
rect(12 * pixelSize, 10 * pixelSize, pixelSize, pixelSize);
  
                fill(244, 231, 219);
rect(11 * pixelSize, 10 * pixelSize, pixelSize, pixelSize);
  
                fill(244, 231, 219);
rect(10 * pixelSize, 10 * pixelSize, pixelSize, pixelSize);
  
                fill(244, 231, 219);
rect(9 * pixelSize, 10 * pixelSize, pixelSize, pixelSize);
  
                fill(244, 231, 219);
rect(8 * pixelSize, 10 * pixelSize, pixelSize, pixelSize);
  
                fill(244, 231, 219);
rect(13 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                fill(244, 231, 219);
rect(12 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                  fill(244, 231, 219);
rect(11 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                  fill(244, 231, 219);
rect(10 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                  fill(244, 231, 219);
rect(9 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                  fill(244, 231, 219);
rect(8 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                  fill(244, 231, 219);
rect(7 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                  fill(244, 231, 219);
rect(14 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                    fill(244, 231, 219);
rect(13 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(12 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(11 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(10 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(9 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(8 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(7 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(6 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                      fill(244, 231, 219);
rect(16 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(15 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(14 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(13 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(12 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(11 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
                        fill(244, 231, 219);
rect(10 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
                        fill(244, 231, 219);
rect(9 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(8 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(7 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(6 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(5 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(4 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(3 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(4 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(3 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(2 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(4 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(5 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(6 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(7 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(8 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(9 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(10 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(11 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(12 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(13 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(14 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(15 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(16 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(17 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                        fill(244, 231, 219);
rect(3 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(4 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(5 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(6 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(7 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(8 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(9 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(10 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(11 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(12 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(13 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(14 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(15 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(16 * pixelSize, 15 * pixelSize, pixelSize, pixelSize);
  
                          fill(244, 231, 219);
rect(4 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                            fill(244, 231, 219);
rect(5 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(6 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(7 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(8 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(9 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(10 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(11 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(12 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(13 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(14 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(15 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                            fill(244, 231, 219);
rect(4 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(5 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(6 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(7 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(8 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(9 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(10 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(11 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(12 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(13 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(14 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(15 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
                              fill(244, 231, 219);
rect(16 * pixelSize, 17 * pixelSize, pixelSize, pixelSize);
                              fill(244, 231, 219);
rect(16 * pixelSize, 16 * pixelSize, pixelSize, pixelSize);
  
                              fill(244, 231, 219);
rect(3 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(4 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(5 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(6 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(7 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(8 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(9 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(10 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(11 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(12 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(13 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(14 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(15 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(16 * pixelSize, 18 * pixelSize, pixelSize, pixelSize);
  
                                fill(244, 231, 219);
rect(17 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(16 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(15 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(14 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(13 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(12 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(11 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(10 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(9 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(8 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(7 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(6 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(5 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                  fill(244, 231, 219);
rect(4 * pixelSize, 19 * pixelSize, pixelSize, pixelSize);
  
                                    fill(244, 231, 219);
rect(2 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(3 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(4 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(5 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(6 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(7 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(8 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(9 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(10 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(11 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(12 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(13 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(14 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(15 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(16 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(17 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                      fill(244, 231, 219);
rect(18 * pixelSize, 20 * pixelSize, pixelSize, pixelSize);
  
                                        fill(241, 109,146);
rect(0 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                                          fill(241,109,146);
rect(1 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
                                          fill(241, 109,146);
rect(2 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
                                          fill(241, 109,146);
rect(3 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                                          fill(241, 109,146);
rect(0 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                                          fill(241, 109,146);
rect(1 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);

                                          fill(241, 109,146);
rect(2 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                                            fill(241, 109,146);
rect(3 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                                            fill(241, 109,146);
rect(0 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                                            fill(241, 109,146);
rect(1 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                                            fill(241, 109,146);
rect(2 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
                                            fill(241, 109,146);
rect(1 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                                            fill(241, 109,146);
rect(0 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
                                            fill(241, 109,146);
rect(16 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                                              fill(241, 109,146);
rect(17 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                                                fill(241, 109,146);
rect(18 * pixelSize, 11 * pixelSize, pixelSize, pixelSize);
  
                                                  fill(241, 109,146);
rect(17 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                                                    fill(241, 109,146);
rect(18 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
                                                    fill(241, 109,146);
rect(19 * pixelSize, 12 * pixelSize, pixelSize, pixelSize);
  
   fill(241, 109,146);
rect(17 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
     fill(241, 109,146);
rect(18 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
     fill(241, 109,146);
rect(19 * pixelSize, 13 * pixelSize, pixelSize, pixelSize);
  
     fill(241, 109,146);
rect(18 * pixelSize, 14 * pixelSize, pixelSize, pixelSize);
  
       fill(133, 100, 63);
rect(7 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
         fill(133, 100, 63);
rect(8 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
         fill(133, 100, 63);
rect(9 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
         fill(133, 100, 63);
rect(10 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
           fill(133, 100, 63);
rect(11 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
           fill(133, 100, 63);
rect(12 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
           fill(133, 100, 63);
rect(13 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
             fill(133, 100, 63);
rect(8 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
               fill(133, 100, 63);
rect(12 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
                 fill(133, 100, 63);
rect(13 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
                   fill(133, 100, 63);
rect(7 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                     fill(133, 100, 63);
rect(9 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                     fill(133, 100, 63);
rect(11 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                     fill(133, 100, 63);
rect(12 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                     fill(133, 100, 63);
rect(13 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                       fill(90, 62, 34);
rect(11 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
                         fill(90, 62, 34);
rect(9 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
                         fill(90, 62, 34);
rect(7 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
                           fill(90, 62, 34);
rect(8 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                             fill(90, 62, 34);
rect(12 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                               fill(133, 100, 63);
rect(7 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                                 fill(133, 100, 63);
rect(8 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                                 fill(133, 100, 63);
rect(9 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                                 fill(133, 100, 63);
rect(11 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                                 fill(133, 100, 63);
rect(12 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                                 fill(133, 100, 63);
rect(13 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                                   fill(34, 6, 2);
rect(7 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                                     fill(34, 6, 2);
rect(8 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                                     fill(34, 6, 2);
rect(9 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                                     fill(34, 6, 2);
rect(11 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                                     fill(34, 6, 2);
rect(12 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                                     fill(34, 6, 2);
rect(13 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                                       fill(34, 6, 2);
rect(6 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                                         fill(34, 6, 2);
rect(7 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                                         fill(34, 6, 2);
rect(8 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                                         fill(34, 6, 2);
rect(9 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                                         fill(34, 6, 2);
rect(11 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                                         fill(34, 6, 2);
rect(12 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                                         fill(34, 6, 2);
rect(13 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                                           fill(34, 6, 2);
rect(7 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                                             fill(34, 6, 2);
rect(8 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                                              fill(34, 6, 2);
rect(9 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                                                fill(34, 6, 2);
rect(11 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                                                  fill(34, 6, 2);
rect(12 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                                                    fill(34, 6, 2);
rect(5 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
   fill(34, 6, 2);
rect(14 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
     fill(243, 187, 182);
rect(5 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
       fill(243, 187, 182);
rect(6 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
       fill(243, 187, 182);
rect(14 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
         fill(243, 187, 182);
rect(13 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
           fill(50,59,58);
rect(5 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
             fill(50,59,58);
rect(6 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
             fill(50,59,58);
rect(14 * pixelSize, 21 * pixelSize, pixelSize, pixelSize);
  
             fill(50,59,58);
rect(5 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
               fill(50,59,58);
rect(6 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
               fill(50,59,58);
rect(10 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
               fill(50,59,58);
rect(14 * pixelSize, 22 * pixelSize, pixelSize, pixelSize);
  
               fill(50,59,58);
rect(14 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);

                 fill(50,59,58);
rect(10 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                 fill(50,59,58);
rect(6 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);
  
                 fill(50,59,58);
rect(5 * pixelSize, 23 * pixelSize, pixelSize, pixelSize);

                 fill(50,59,58);
rect(5 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                   fill(50,59,58);
rect(6 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                   fill(50,59,58);
rect(10 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                   fill(50,59,58);
rect(14 * pixelSize, 24 * pixelSize, pixelSize, pixelSize);
  
                   fill(50,59,58);
rect(4 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                     fill(50,59,58);
rect(5 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);

                   fill(50,59,58);
rect(6 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);

                   fill(50,59,58);
rect(10 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                     fill(50,59,58);
rect(14 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                     fill(50,59,58);
rect(15 * pixelSize, 25 * pixelSize, pixelSize, pixelSize);
  
                     fill(50,59,58);
rect(3 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                       fill(50,59,58);
rect(4 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                       fill(50,59,58);
rect(10 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                       fill(50,59,58);
rect(15 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                       fill(50,59,58);
rect(16 * pixelSize, 26 * pixelSize, pixelSize, pixelSize);
  
                       fill(50,59,58);
rect(2 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                       fill(50,59,58);
rect(3 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                         fill(50,59,58);
rect(4 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                           fill(50,59,58);
rect(10 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                             fill(50,59,58);
rect(15 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                               fill(50,59,58);
rect(16 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                               fill(50,59,58);
rect(17 * pixelSize, 27 * pixelSize, pixelSize, pixelSize);
  
                               fill(50,59,58);
rect(3 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(4 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(5 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(6 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(7 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(8 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(9 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(10 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(11 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(12 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(13 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(14 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(15 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(16 * pixelSize, 28 * pixelSize, pixelSize, pixelSize);
  
                                 fill(50,59,58);
rect(5 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(6 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(7 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(8 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(9 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(10 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(11 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(12 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(13 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);
  
                                   fill(50,59,58);
rect(14 * pixelSize, 29 * pixelSize, pixelSize, pixelSize);

}

//grid
function drawGrid(canvasWidth, canvasHeight, size) {
  stroke(200);
  strokeWeight(1);
  
  for (let x = 0; x <= canvasWidth; x += size) {
    line(x, 0, x, canvasHeight);
  }
  
  for (let y = 0; y <= canvasHeight; y += size) {
    line(0, y, canvasWidth, y);
  }
}