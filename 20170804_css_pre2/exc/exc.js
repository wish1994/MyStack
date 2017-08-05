var move =function(dom){
    dom.style.left=Math.random()*600+50+"px";
    dom.style.top=Math.random()*250+50+"px";
    var a=dom.style.left
    var b=dom.style.top
    dom.onmousedown=function(){
        dom.style.zIndex=100;
        dom.style.width=110;
        dom.style.height=150;
        document.onmousemove=function(e){
            e.preventDefault();
            dom.style.left=e.clientX-50+"px";
            dom.style.top=e.clientY-50+"px";
        }
    }
    dom.onmouseup=function(){
        dom.style.zIndex=0;
        dom.style.width=100;
        dom.style.height=140;
        var x =parseInt(dom.style.left);
        var y =parseInt(dom.style.top);
        if(x%10>5){
            dom.style.left=x-x%10+10+"px";
        }else{
            dom.style.left=x-x%10+"px";
        }
        if(y%10>5){
            dom.style.top=y-y%10+10+"px";
        }else{
            dom.style.top=y-y%10+"px";
        }
        document.onmousemove=function(){
        }
    }
}

var L1=document.getElementById("L1")
var L2=document.getElementById("L2")
var L3=document.getElementById("L3")
var L4=document.getElementById("L4")
var L5=document.getElementById("L5")
var L6=document.getElementById("L6")

move(L1)
move(L2)
move(L3)
move(L4)
move(L5)
move(L6)

document.onmouseup=function(){
    var x =parseInt(L1.style.left);
    var y =parseInt(L1.style.top);
    var x1 =parseInt(L2.style.left);
    var y1 =parseInt(L2.style.top);
    var x2 =parseInt(L3.style.left);
    var y2 =parseInt(L3.style.top);
    var x3 =parseInt(L4.style.left);
    var y3 =parseInt(L4.style.top);
    var x4 =parseInt(L5.style.left);
    var y4 =parseInt(L5.style.top);
    var x5 =parseInt(L6.style.left);
    var y5 =parseInt(L6.style.top);
    if(x1-x==100&&y1-y==0&&x2-x1==100&&y2-y==0&&x3-x==0&&y3-y==140&&x4-x3==100&&y4-y3==0&&x5-x4==100&&y5-y4==0){
        alert("恭喜过关！")
    }
}