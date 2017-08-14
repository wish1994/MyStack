var Img=document.querySelector("img");
var toright=document.querySelector("#b-right")
var toleft=document.querySelector("#b-left")
var imgwidth=Img.clientWidth;
var imgheight=Img.clientHeight;
var imgleft=0;
var totalTime=1.5;
var zhenlv=60;
var interTime=1000/zhenlv;


Img.style.position="relative";

toright.onclick=function(){
    imgleft=imgwidth;
    var v=imgleft*interTime/(totalTime*1000);
    var i =0;
    var intervalRight = setInterval(function(){
        i+=v;
        if(i<=imgleft){
            Img.style.left = i + 'px';
        }else{
            Img.style.left = imgleft + "px";
            clearInterval(intervalRight);
        }
    },interTime)
}

toleft.onclick=function(){
    var i=imgwidth;
    var v=imgleft*interTime/(totalTime*1000);
    var intervalLeft = setInterval(function(){
        i-=v;
        if(i<0){
            Img.style.left = 0 + "px";
            clearInterval(intervalLeft);
        }else{
            Img.style.left = i + 'px';
        }              
    },interTime)
}