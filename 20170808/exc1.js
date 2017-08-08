var Ball=document.getElementById("Ball");
var Balltop=0;
var Ballleft=0;
var t=0;
var uptodown =true;
var lefttoright=true;

setInterval(function(){
    console.log(Ballleft)
    if(uptodown){
        t=t+0.006;
        Balltop=1600*Math.pow(t,2);
        Ball.style.top=Balltop+"px";
    }else{
        t=t-0.006;
        Balltop=1600*Math.pow(t,2);
        Ball.style.top=Balltop+"px";
    }
    
    if(lefttoright){
        Ballleft=Ballleft+5;
        Ball.style.left=Ballleft+"px";
    }else{
        Ballleft=Ballleft-5;
        Ball.style.left=Ballleft+"px";
    }
    
    if(Balltop<0||Balltop>500){
        uptodown=!uptodown
    }
    if(Ballleft<0||Ballleft>800) {
        lefttoright=!lefttoright
    }   
}
,10)
