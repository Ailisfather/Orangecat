var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.translate(400, 600);
var limit = 5;
document.getElementById("text").innerHTML = limit;
ctx.save();
function decrease(){ 
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.restore();
  if (limit >= 1){
    limit = limit - 1;
  }
  document.getElementById("text").innerHTML = limit;
  branch(100, 15, limit);
}

function increase(){
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.restore();
  if (limit <= 14){
    limit = limit + 1;
  }
  document.getElementById("text").innerHTML = limit;
    branch(100, 15, limit);
}

function branch(len, width,limit) {
  ctx.lineWidth=10;
  ctx.strokeStyle="#FEE6E1";
  ctx.beginPath();
  ctx.moveTo(0, 0); 
  ctx.lineWidth = width;
  ctx.lineTo(0, -len);
  ctx.stroke();
  ctx.translate(0, -len + 2);
  if (limit > 0) {
    ctx.save(); 
    ctx.rotate(Math.PI / 8);
    branch(len * 0.8, width * 0.7, limit - 1);
    ctx.restore(); 
    ctx.save(); 
    ctx.rotate(-Math.PI / 8);
    branch(len * 0.8, width * 0.7, limit -1);
    ctx.restore(); 
  }
}


branch(100, 15, limit);