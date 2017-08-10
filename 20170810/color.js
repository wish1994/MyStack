
var cont=document.getElementById("Cont")
for(var r=0;r<256;r+=20){
    for(var g=0;g<256;g+=20){
        for (var b=0;b<256;b+=20){
            var a=document.createElement("div")
            a.style.width="80px";
            a.style.height="20px";
            a.style.background="rgb("+r+","+g+","+b+")";
            a.style.float="left";
            cont.appendChild(a);
        }
    }
}