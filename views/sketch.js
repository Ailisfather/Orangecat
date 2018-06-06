function setup() {
  cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  slider = createSlider(4, 150, 150);
}

function draw() {
  background(51);
  Depth = slider.value();
  stroke(230);
  translate(300, height);
  branch(150);
}

function branch(len){
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > Depth){
    push();
    rotate(PI/10);
    branch(len * 0.67);
    pop();
    push();
    rotate(-PI/10);
    branch(len * 0.67);
    pop();
  }
  //  line(0, 0, 0, -len * 0.67);

}