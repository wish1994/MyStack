var box1=document.querySelector(".box1");
var box2=document.querySelector(".box2");
var box3=document.querySelector(".box3");
var box4=document.querySelector(".box4");
var box5=document.querySelector(".box5");
var box6=document.querySelector(".box6");
var box7=document.querySelector(".box7");
var box8=document.querySelector(".box8");
var box9=document.querySelector(".box9");
var con=document.querySelector(".container")

box1.style.top=Math.random()*400+"px";
box2.style.top=Math.random()*400+"px";
box3.style.top=Math.random()*400+"px";
box4.style.top=Math.random()*400+"px";
box5.style.top=Math.random()*400+"px";
box6.style.top=Math.random()*400+"px";
box7.style.top=Math.random()*400+"px";
box8.style.top=Math.random()*400+"px";
box9.style.top=Math.random()*400+"px";
box1.style.left=Math.random()*400+"px";
box2.style.left=Math.random()*400+"px";
box3.style.left=Math.random()*400+"px";
box4.style.left=Math.random()*400+"px";
box5.style.left=Math.random()*400+"px";
box6.style.left=Math.random()*400+"px";
box7.style.left=Math.random()*400+"px";
box8.style.left=Math.random()*400+"px";
box9.style.left=Math.random()*400+"px";

con.onmousemove=function(e){
    var x=e.clientX;
    var y=e.clientY;
    var onmousedown=true;
    box1.onmousemove=function(){
        box1.style.left=x-480+"px";
        box1.style.top=y-50+"px";
    }
    box2.onmousemove=function(){
        box2.style.left=x-480+"px";
        box2.style.top=y-50+"px";
    }
    box3.onmousemove=function(){
        box3.style.left=x-480+"px";
        box3.style.top=y-50+"px";
    }
    box4.onmousemove=function(){
        box4.style.left=x-480+"px";
        box4.style.top=y-50+"px";
    }
    box5.onmousemove=function(){
        box5.style.left=x-480+"px";
        box5.style.top=y-50+"px";
    }
    box6.onmousemove=function(){
        box6.style.left=x-480+"px";
        box6.style.top=y-50+"px";
    }
    box7.onmousemove=function(){
        box7.style.left=x-480+"px";
        box7.style.top=y-50+"px";
    }
    box8.onmousemove=function(){
        box8.style.left=x-480+"px";
        box8.style.top=y-50+"px";
    }
    box9.onmousemove=function(){
        box9.style.left=x-480+"px";
        box9.style.top=y-50+"px";
    }
}
