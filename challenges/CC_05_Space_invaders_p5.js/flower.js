// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/biN3v3ef-Y0

function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.c = color(255, 0, 200, 150);
  this.toDelete = false;
  this.xdir = 1;
  this.hits = 0;

  this.grow = function() {
    this.r = this.r + 2;
  }

  this.takeHit = function() {
    this.hits++;
    if (this.hits < 4) {
      this.grow();
      this.c = color(50, 100, 250, 150);
    }
    if (this.hits > 3) {
      this.grow();
      this.c = color('yellow');
      this.toDelete = true;
    }
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.freeze = function() {
    this.xdir = 0;
    console.log('freezing');
  }

  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
