var cont=document.getElementById("Cont");
var ball=document.getElementById("Ball");
var count=0;//计数器，每运动10ms算一次。
var uptodown =true;//上到下为true，左到右true。
var lefttoright=true;
var balltop=0;
var ballleft=0;
var Ljiao=Math.random()*Math.PI/2;//Ljiao表示球运动方向与水平方向的夹角；
var Rjiao=Math.PI/2-Ljiao;//Rjiao表示球运动方向与垂直方向的夹角；

setInterval(function(){
    count++;
    var Lv=5*Math.cos(Ljiao);//Lv表示横向速度
    var Rv=5*Math.cos(Rjiao);//Lv表示纵向速度
    console.log(Lv,Rv);

    if(uptodown){
        balltop+=Rv;
        if(balltop>350){
            Ball.style.top=350+"px";            
        }else{ 
            Ball.style.top=balltop+"px";
        }
    }else{
        balltop-=Rv;
        if(balltop<0){
            Ball.style.top=0+"px";            
        }else{ 
            Ball.style.top=balltop+"px";
        }
    }
    
    if(lefttoright){
        ballleft+=Lv;
        if(ballleft>550){
            Ball.style.left=550+"px";            
        }else{ 
            Ball.style.left=ballleft+"px";
        }
    }else{
        ballleft-=Lv;
        if(ballleft<0){
            Ball.style.left=0+"px";            
        }else{ 
            Ball.style.left=ballleft+"px";
        }
    }

    if(balltop<0||balltop>350){
        uptodown=!uptodown;
    }
    if(ballleft<0||ballleft>550) {
        lefttoright=!lefttoright;
    }
    
  
    if(count%100==0){
            Ljiao=Math.random()*Math.PI/2;
            Rjiao=Math.PI/2-Ljiao;       
    }
},10)



