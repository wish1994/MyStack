(function(){
    var banner=document.querySelector(".banner")
    var star1=document.querySelector(".star1");
    var star2=document.querySelector(".star2");
    var star3=document.querySelector(".star3");
    var star4=document.querySelector(".star4");
    var ceterX=banner.offsetWidth/2;
    var ceterY=banner.offsetHeight/2;

    banner.onmousemove=function(e){
        var x=e.clientX;
        var y=e.clientY;
        console.log(x,y);
        var lx=x-banner.offsetWidth/2;
        var ty=y-banner.offsetHeight/2;
        star1.style.left=700+0.1*lx+"px";
        star2.style.left=790+0.2*lx+"px";
        star3.style.left=600+0.4*lx+"px";
        star4.style.left=400+0.6*lx+"px";
        star1.style.top=280+0.1*ty+"px";
        star2.style.top=168+0.2*ty+"px";
        star3.style.top=100+0.4*ty+"px";
        star4.style.top=200+0.6*ty+"px";
        
    }

})()

