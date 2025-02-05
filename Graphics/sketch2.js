function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    colorMode(RGB, 255, 255, 255, 1);
    background(255);
  
    blendMode(BLEND);
    noStroke();
  
  
    fill(255, 182, 193, 0.7);
    circle(300, 100, 200);
  
    fill(173, 216, 230, 0.7);
    circle(230, 230, 200);
  
    fill(144, 238, 144, 0.7);
    circle(360, 230, 200);
  }