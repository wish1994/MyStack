var Box=document.getElementById("Box")
var w1=document.getElementById("w1")
var w2=document.getElementById("w2")
var h1=document.getElementById("h1")
var h2=document.getElementById("h2")
var r1=document.getElementById("r1")
var r2=document.getElementById("r2")
var g1=document.getElementById("g1")
var g2=document.getElementById("g2")
var b1=document.getElementById("b1")
var b2=document.getElementById("b2")



w1.onclick=function(){
    var w =parseInt(Box.style.width);
    Box.style.width=w+10+"px";
    console.log(w)
}
w2.onclick=function(){
    var w =parseInt(Box.style.width);
    Box.style.width=w-10+"px";
}
h1.onclick=function(){
    var h=parseInt(Box.style.height)
    Box.style.height=h+10+"px";
}
h2.onclick=function(){
    var h=parseInt(Box.style.height)
    Box.style.height=h-10+"px";
}
var r=0;
    g=0;
    b=0;
Box.style.background="rgb("+r+","+g+","+b+")";

r1.onclick=function(){
    r=r+10;
    console.log(Box.style.background)
    Box.style.background="rgb("+r+","+g+","+b+")";
}
r2.onclick=function(){
    r=r-10;
    console.log(r)
    Box.style.background="rgb("+r+","+g+","+b+")";
}
g1.onclick=function(){
    g=g+10;
    Box.style.background="rgb("+r+","+g+","+b+")";
}
g2.onclick=function(){
    g=g-10;
    Box.style.background="rgb("+r+","+g+","+b+")";
}
b1.onclick=function(){
    b=b+10;
    Box.style.background="rgb("+r+","+g+","+b+")";
}
b2.onclick=function(){
    b=b-10;
    Box.style.background="rgb("+r+","+g+","+b+")";
}


