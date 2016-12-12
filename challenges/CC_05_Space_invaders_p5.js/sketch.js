// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/biN3v3ef-Y0

var ship;
var flowers = [];
var drops = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i*80+80, 40);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();

    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        flowers[j].takeHit();
        drops[i].evaporate();
      }
    }
  }

  collisionDetection();
  cleanupDrops();
  cleanupFlowers();

}

function collisionDetection()
{
  var edge = false;
  var bottomEdge = false;
  var hitShip = false;
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x >= (width - flowers[i].r) || flowers[i].x <= (0 + flowers[i].r)) {
      edge = true;
    } else if (flowers[i].y >= (height - flowers[i].r)) {
      bottomEdge = true;
    }
    if (ship.hits(flowers[i])) {
      hitShip = true;
    }
  }

  if (hitShip) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].freeze();
    }
    ship.explode();
  }
  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }
  if (bottomEdge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].toDelete = true;
    }
  }
}

function cleanupDrops()
{
  for (var i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete || drops[i].y < 0 ) {
      drops.splice(i, 1);
    }
  }
}

function cleanupFlowers()
{
  for (var i = flowers.length-1; i >= 0; i--) {
    if (flowers[i].toDelete) {
      flowers.splice(i, 1);
    }
  }
}

function fireDrop()
{
  var drop = new Drop(ship.x, height-ship.h);
  drops.push(drop);
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    fireDrop();
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
