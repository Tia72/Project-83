var lastX,lastY;
var dc="black";
var dw="2";
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var width=screen.width;
var hieght=screen.height;
var nw=width-70;
var nh=height-300;

if(width<992){
    document.getElementById("myCanvas").width=nw;
    document.getElementById("myCanvas").hieght=nh;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("toachstart",touch_start);
function touch_start(e){
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("toachmove",touch_move);
function touch_move(e){
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=defaultcolor;
    ctx.lineWidth=defaultwidth;
    console.log("Last X = "+lastX+"Last Y = "+lastY);
    ctx.moveTo(lastX,lastY);
    console.log("Current X = "+currentX+"Current Y = "+currentY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
    lastX=currentX;
    lastY=currentY;
}

