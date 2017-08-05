
var one=document.getElementById("one")
var two=document.getElementById("two")
var three=document.getElementById("three")
var four=document.getElementById("four")
var five=document.getElementById("five")
var Box1=document.getElementById("Box1")
var Box2=document.getElementById("Box2")

// one.onclick=function(){
//     console.log(this.innerHTML)
//     Box2.style.width=0+"px";
// }
// two.onclick=function(){
//     Box2.style.width=46+"px";
// }
// three.onclick=function(){
//     Box2.style.width=92+"px";
// }
// four.onclick=function(){
//     Box2.style.width=138+"px";
// }
// five.onclick=function(){
//     Box2.style.width=184+"px";
// }

var bomb=function(box){
    box.onclick=function(){
        var a=parseInt(this.innerHTML)/100;
        console.log(a)
        Box2.style.width=184*a+"px";
    }
}
bomb(one)
bomb(two)
bomb(three)
bomb(four)
bomb(five)
