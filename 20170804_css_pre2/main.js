var move =function(dom){
    dom.onmousedown=function(){
        dom.style.zIndex=100;
        document.onmousemove=function(e){
            dom.style.left=e.clientX-50+"px";
            dom.style.top=e.clientY-50+"px";
        }
    }
    dom.onmouseup=function(){
        dom.style.zIndex=0;
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
        document.onmousemove=null;
    }
}

var Box1=document.getElementById("Box1")
var Box2=document.getElementById("Box2")
var Box3=document.getElementById("Box3")
var Box4=document.getElementById("Box4")
var Box5=document.getElementById("Box5")
var Box6=document.getElementById("Box6")

move(Box1)
move(Box2)
move(Box3)
move(Box4)
move(Box5)
move(Box6)