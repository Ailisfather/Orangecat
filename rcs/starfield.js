var canvas = document.getElementsByTagName('canvas')[0], c = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
var size = 1;
var numStars = 0
var stars = [];
var fl = canvas.width;
var centerX = canvas.width/2, centerY = canvas.height/2;
for (var i = 0; i < numStars; i++)
  {
    stars[i] = new Star();
  }


function Star(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.z = Math.random()*canvas.width;
  
  this.move = function(){
    this.z = this.z - 5;
    if (this.z <= 0)
      {
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.z = canvas.width
      }
  }
   
  this.show = function(){
    var x,y,s;
    x = (this.x - centerX)* (fl/this.z);
    x = x + centerX;
    y = (this.y - centerY)* (fl/this.z);
    y = y + centerY;
    s = size * (fl/this.z);
    c.beginPath();
    c.fillStyle = "white";
    c.arc(x, y, s, 0, Math.PI*2)
    c.fill();
  }
}

function draw(){
  c.fillStyle = "black";
  c.fillRect(0,0,canvas.width,canvas.height)
  for (var i = 0; i < numStars; i++)
  {
    stars[i].show();
    stars[i].move();
  }
}

function update(){
    draw();
    window.requestAnimationFrame(update);
}
update();

var input = document.getElementById("number");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        number();
    }
});


function number(){
    numStars = document.getElementById("number").value;
  for (var i = 0; i < numStars; i++)
  {
    stars[i] = new Star();
  }
}