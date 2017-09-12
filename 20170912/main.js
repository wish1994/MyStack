
(function(){
    var container=document.querySelector(".container")
    var Picture=document.querySelector(".Picture");
    var Pborder=document.querySelector(".Pborder");
    var Ptext=document.querySelector(".Ptext");
    var ceterX=container.offsetLeft+container.offsetWidth/2;
    var ceterY=container.offsetTop+container.offsetHeight/2;

    

    container.onmousemove=function(e){
        var x=e.clientX;
        var y=e.clientY;
        var rx=10*(x-ceterX)/(container.offsetWidth/2);
        var ry=-10*(y-ceterY)/(container.offsetHeight/2);
        Picture.style.transform='rotateY('+rx+'deg) rotateX('+ry+'deg)';
        Pborder.style.transform=Picture.style.transform;
        Ptext.style.transform=Picture.style.transform;
        
        Pborder.style.left=20+rx+"px";
        Pborder.style.top=20-ry+"px";
        Ptext.style.left=36+rx+"px";
        Ptext.style.bottom=40+ry+"px";
        
        

    }



})()
