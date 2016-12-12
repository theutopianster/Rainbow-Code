// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/biN3v3ef-Y0

function Ship() {
  this.xdir = 0;
  this.w = 20;
  this.h = 60;
  this.x = width/2;
  this.y = height-this.w;
  this.c = color(255);

  this.show = function() {
    fill(this.c);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  this.explode = function() {
    this.c = color('orange');
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.hits = function(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if (d < flower.r + this.h) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function(dir) {
    if (this.xdir == -1 && this.x >= this.w) {
      this.x += this.xdir * 5;
    }
    if (this.xdir == 1 && this.x <= (width-this.w)) {
      this.x += this.xdir * 5;
    }
  }

}
