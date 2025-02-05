function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background('black');
  
    fill(255, 255, 0);
    noStroke();
    circle(200, 200, 200);
  
    fill(0);
    triangle(200, 200, 100, 140, 100, 260);
  
    fill(255, 0, 0);
    noStroke();
    arc(440, 150, 180, 100, 90, 0);
    rect(350, 150, 180, 140);
  
    fill(255);
    circle(400, 180, 40);
    circle(485, 180, 40);
  
    fill(0, 0, 255);
    circle(400, 180, 25);
    circle(485, 180, 25);
  
  }