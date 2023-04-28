var a = 1 / 4;
var p = 3.141592653589793238;
var amplitude = 100;
var frequency = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  noFill();
  textSize(20);
  h = hour();
  m = minute();
  s = second();
  
    
  if (h >= 6 && h < 19) {
    background(255);
  } else {
    background(0);
  }

  // 반복문를 사용하여 주파수 모양 그리기!
  for (var i = 0; i < width; i++) {
    var x = i * frequency;
    var y = amplitude * cos(x * PI) + height / 2;
    if (h >= 6 && h < 19) {
      stroke(i / 2.5, i / 5, i);
    } else {stroke(i / 5, i / 2.5, i);}
    point(i, y);
    line(0, i, i, y);
  }
  
  


  my_rect(400, 400, 200, 5, s * 6 - 90, color(0, 0, 255));
  my_rect(400, 400, 200, 20, m * 6 + s * 1 / 10 - 90, color(0, 255, 0));
  my_rect(400,400,100,25,h * 30 + m * 1 / 120 + s * 1 / 1200 - 90,color(255, 0, 0));
  fill(0);
  ellipse(windowWidth / 2, windowHeight / 2, 30, 30);
  text(h + ":" + m + ":" + s, windowWidth - 90, windowHeight - 10);
}

function my_rect(x, y, w, h, d, c) {
  push();
  fill(c);
  translate(windowWidth / 2, windowHeight / 2); //원점의 위치 
  rotate(radians(d));
  rect(0, -h / 2, w, h);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


