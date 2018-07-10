var c = document.getElementsByTagName('canvas')[0],
ctx = c.getContext("2d");
var W = 600, H = 600;
c.width = W;
c.height = H;
ctx.save();

function draw(ctx, number){
  var x, y;
  for (var i = 0; i <= number; i++) { 
  x = Math.random() * W;
  y = Math.random() * H;
  ctx.beginPath();
  ctx.fillStyle="#FEE6E1";
  ctx.globalAlpha=1;
  ctx.arc(x, y, 2, 0, Math.PI * 2,true);
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  }
}

draw(ctx,100);