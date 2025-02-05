function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES); 
  }
  
  function draw() {
    background(0, 0, 139);
  
    push();
    translate(300, 200);
  
    circle(0, 0, 200);
  
    fill(0, 128, 0);
    circle(0, 0, 190);
  
    fill(255);
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = -90 + (72 * i); 
      let x = cos(angle) * 100;
      let y = sin(angle) * 100;
      vertex(x, y);
  
      angle += 36;
      x = cos(angle) * 45;
      y = sin(angle) * 45;
      vertex(x, y);
    }
    endShape(CLOSE);
  
    fill(255, 0, 0);
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = -90 + (72 * i); 
      let x = cos(angle) * 85;
      let y = sin(angle) * 85;
      vertex(x, y);
  
      angle += 36;
      x = cos(angle) * 35;
      y = sin(angle) * 35;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  
  }