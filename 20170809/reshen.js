var box=document.getElementById("box")
var boxTop=0;
var boxLeft=0;

setInterval(function(){
    var hv =Math.random()*20-10;
    if(!(boxTop<10&&hv<0)&&!(boxTop>250&&hv>0)){       
        boxTop+=hv;
        box.style.top=boxTop+"px";
    }
    /*上述代码表示当boTtop小于10同时hv<0或者当boxTop大于250同时hv大于0时，
    box.style.top不变*/
    var wv =Math.random()*40-20;
    if(!(boxLeft<20&&wv<0)&&!(boxLeft>350&&wv>0)){
        boxLeft+=wv;
        box.style.left=boxLeft+"px";
    }
},10)

