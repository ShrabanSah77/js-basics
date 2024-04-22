console.log("Hello world");

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function(){
  mousex = event.clientX;
  mousey = event.clienty;
});


