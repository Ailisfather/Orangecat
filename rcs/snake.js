var c = document.getElementsByTagName('canvas')[0],
ctx = c.getContext("2d");
var W = 600, H = 600;
c.width = W;
c.height = H;
var x = 300, y = 300;
var vx = 0, vy = 0;
var s = 0;
var ex = 0, ey = 600;
var es = 3;
document.addEventListener("keydown", keypush);

function keypush(evt){
      switch(evt.keyCode) {
        case 65:
          vy = 0;
          vx = -5
          break;
        case 87:
          vx = 0;
          vy = -5
          break;
        case 68:
          vy = 0;
          vx = 5;
          break;
        case 83:
          vx = 0;
          vy = 5;
          break;
    }
  
}

function move(){
  if(ex > x){
    ex = ex - es;
  }
  else{
    ex = ex + es;
  }
  
  if(ey > y){
    ey = ey - es;
  }
  else{
    ey = ey + es;
  }
  
  
  if(x < ex + 5 && x > ex -5 && y < ey + 5 && y > ey -5){
    dead();
  }
  
  x = x + vx;
  if(x < 0 || x > 598)
  {
    dead();
  }
  
  y = y + vy;
  if(y < 0 || y > 598)
  {
    dead();
  }
  
  ctx.fillStyle = "#ffcc66";
  ctx.fillRect(0,0,600,600);
  ctx.fillStyle = "blue";
  ctx.fillRect(fx,fy,10,10);
  ctx.fillStyle = "red";
  ctx.fillRect(ex,ey,15,15);
  ctx.fillStyle = "black";
  ctx.fillRect(x,y,15,15);
  if(x <= fx + 10 && x >= fx -10){
    if(y <= fy + 10 && y >= fy -10){
      score();
    }
  }
}

function score(){
  fx = Math.random()*(c.width - 10);
  fy = Math.random()*(c.height - 10);
  console.log("s");
  s = s + 1;
}

function dead(){
  vx = 0;
  vy = 0;
  es = 0;
  var rx = document.getElementById("res");
  rx.style.display = "block";
}

function rest(){
      x=300;y=300;vx=0;
      s = 0;
      ex = 0; ey = 600;
      vx = 0, vy = 0;
      fx = Math.random()*(c.width - 10);
      fy = Math.random()*(c.height - 10);
      es = 3;
      var rx = document.getElementById("res");
      rx.style.display = "none";
}

function update(){
    move();
    document.getElementById("text").innerHTML = "Score: "+s;
    window.requestAnimationFrame(update);
}

update();
var fx = Math.random()*(c.width - 10);
var fy = Math.random()*(c.height - 10);