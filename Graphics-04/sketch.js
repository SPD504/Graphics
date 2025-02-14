let characters = [];
const WALK_SPEED = 2;
const ANIMATION_FRAME_DELAY = 8;
const CHARACTER_COUNT = 5;

let spritesheets = {};

function preload() {
  robot = loadImage("media/robot.png");
  viking = loadImage("media/viking.png");
  cyclops = loadImage("media/cyclops.png");
}

class BaseCharacter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.currentAnimation = null;
    this.animations = {};
    this.facingLeft = false;
  }
  
  addAnimation(key, animation) {
    this.animations[key] = animation;
  }
  
  draw() {
    let animation = this.animations[this.currentAnimation];
    if (animation) {
      // Update position based on current animation
      switch (this.currentAnimation) {
        case "walkRight":
          this.x += WALK_SPEED;
          if (this.x > width) this.x = -80;
          break;
        case "walkLeft":
          this.x -= WALK_SPEED;
          if (this.x < -80) this.x = width;
          break;
        case "up":
          this.y -=2;
          break;
        case "down":
          this.y +=2;
          break;
      }
      
      push();
      translate(this.x, this.y);
      
      // Scale -1 on X axis to flip animation for walking left
      if (this.facingLeft) {
        scale(-1, 1);
        translate(-80, 0); // Adjust for scaled sprite width
      }
      
      animation.draw();
      pop();
    }
  }

  keyPressed() {
    switch(keyCode) {
      case RIGHT_ARROW:
        this.currentAnimation = "walkRight";
        this.facingLeft = false;
        break;
      case LEFT_ARROW:
        this.currentAnimation = "walkLeft";
        this.facingLeft = true;
        break;
      case UP_ARROW:
        this.currentAnimation = "up";
        break;
      case DOWN_ARROW:
        this.currentAnimation = "down";
        break;
    }
  }
  
  keyReleased() {
    this.currentAnimation = "stand";
  }
}

class Robot extends BaseCharacter {
  constructor(x, y) {
    super(x, y);
    this.addAnimation("stand", new SpriteAnimation(robot, 0, 0, 1));
    this.addAnimation("walkRight", new SpriteAnimation(robot, 0, 3, 12));
    this.addAnimation("walkLeft", new SpriteAnimation(robot, 0, 3, 12));
    this.addAnimation("down", new SpriteAnimation(robot, 6, 5, 6));
    this.addAnimation("up", new SpriteAnimation(robot, 0, 5, 6));
    this.currentAnimation = "stand";
  }
 }

 class Cyclops extends BaseCharacter {
  constructor(x, y) {
    super(x, y);
    this.addAnimation("stand", new SpriteAnimation(cyclops, 0, 0, 1));
    this.addAnimation("walkRight", new SpriteAnimation(cyclops, 0, 3, 12));
    this.addAnimation("walkLeft", new SpriteAnimation(cyclops, 0, 3, 12));
    this.addAnimation("down", new SpriteAnimation(cyclops, 6, 5, 6));
    this.addAnimation("up", new SpriteAnimation(cyclops, 0, 5, 6));
    this.currentAnimation = "stand";
  }
}

class Viking extends BaseCharacter {
  constructor(x, y) {
    super(x, y);
    this.addAnimation("stand", new SpriteAnimation(viking, 0, 0, 1));
    this.addAnimation("walkRight", new SpriteAnimation(viking, 0, 3, 12));
    this.addAnimation("walkLeft", new SpriteAnimation(viking, 0, 3, 12));
    this.addAnimation("down", new SpriteAnimation(viking, 6, 5, 6));
    this.addAnimation("up", new SpriteAnimation(viking, 0, 5, 6));
    this.currentAnimation = "stand";
  }
}

function setup() {
  createCanvas(400, 400);
   
for (let i = 0; i < CHARACTER_COUNT; i++) {
    let rand = random(3);
    let characterType;
    if (rand < 1) characterType = Robot;
    else if (rand < 2) characterType = Viking;
    else characterType = Cyclops;

    let character = new characterType(random(0, width), random(0, height));
    characters.push(character);
  }  
}


function draw() {
  background(220);
  
  // Draw all characters
  characters.forEach(character => character.draw());
}

function keyPressed() {
  characters.forEach(character => character.keyPressed());
}

function keyReleased() {
  characters.forEach(character => character.keyReleased());
}
  
class SpriteAnimation {
  constructor(spritesheet, startU, startV, duration) {
    this.spritesheet = spritesheet;
    this.u = startU;
    this.v = startV;
    this.duration = duration;
    this.startU = startU;
    this.frameCount = 0;
  }
  
  draw() {
    image(this.spritesheet, 0, 0, 80, 80, this.u*80, this.v*80, 80, 80);
    
    this.frameCount++;
    if (this.frameCount % ANIMATION_FRAME_DELAY === 0) {
      this.u++;
      if (this.u === this.startU + this.duration) {
        this.u = this.startU;
      }
    }
  }
}