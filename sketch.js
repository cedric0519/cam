//src: http://creative-coding.decontextualize.com/video/

var w = 720;
var h = 550;
var cap;
function setup() {
  createCanvas(w, h);
  cap = createCapture(VIDEO);
  cap.size(w, h);
  cap.hide();
}
function draw() {
  cap.loadPixels(); // loads the pixels to get the color attributes of each XY position
  for (var y = 2; y < h; y += 20) {
    for (var x = 5; x < w; x += 32) {
      var pixVals = ((y*w)+x)*4; //SEEMS CONFUSING AT FIRST, but each pixel has 4 values (RGBA)
      fill(cap.pixels[pixVals], cap.pixels[pixVals+1], cap.pixels[pixVals+2]); // filling each pixel with rgb values 
      rect(x, y, 24, 53);
  	}
  }
}