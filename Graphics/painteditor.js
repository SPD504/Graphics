let currentColor;
let colors;
let paletteWidth = 60;

function setup() {
  createCanvas(800, 600);
  background(255);

  colors = [
    color(255, 0, 0),     // Red
    color(255, 165, 0),   // Orange
    color(255, 255, 0),   // Yellow
    color(0, 255, 0),     // Green
    color(0, 255, 255),   // Cyan
    color(0, 0, 255),     // Blue
    color(255, 0, 255),   // Magenta
    color(139, 69, 19),   // Brown
    color(255, 255, 255), // White
    color(0, 0, 0)        // Black
  ];

  currentColor = colors[colors.length - 1];

  drawPalette();
}

function draw() {
  if (mouseIsPressed && mouseX > paletteWidth) {
    stroke(currentColor);
    strokeWeight(4);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function mousePressed() {
  if (mouseX < paletteWidth) {
    for (let i = 0; i < colors.length; i++) {
      let y = i * 60; 
      if (mouseY > y && mouseY < y + 60) {
        currentColor = colors[i];
        break;
      }
    }
  }
}

function drawPalette() {
  noStroke();
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(0, i * 60, paletteWidth, 60);
  }
}