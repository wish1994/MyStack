var Ball=document.getElementById("Ball");
var Balltop=0;
var t=0;
var uptodown =true;
setInterval(function(){
    console.log(Balltop)
    if(uptodown){
        t=t+0.006;
        Balltop=1600*Math.pow(t,2);
        Ball.style.top=Balltop+"px";
    }else{
        t=t-0.006;
        Balltop=1600*Math.pow(t,2);
        Ball.style.top=Balltop+"px";
    }
    if(Balltop<0||Balltop>500){
        uptodown=!uptodown
    }    
}
,10)

