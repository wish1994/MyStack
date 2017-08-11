// var r =[89,124,237]
// var g =[56,174,253]
// var b =[39,156,210]
// var cont=document.getElementById("Cont")
// for(var i=0;i<3;i++){
//     var red=r[i]
//     for(var m=0;m<3;m++){
//         var green=g[m]
//         for(var n=0;n<3;n++){
//             var blue=b[n]
//             var a=document.createElement("div")
//             a.style.width="150px";
//             a.style.height="50px";
//             a.style.background="rgb("+red+","+green+","+blue+")";
//             a.style.float="left";
//             cont.appendChild(a);
//         }
//     }
// }

// var guessnumber = 67;
// do{
//     var a;
//     if(a!=undefined&&a!=0){
//         if(a>guessnumber){
//             a=prompt("数字"+a+"太大")
//         }else{
//             a=prompt("数字"+a+"太小")
//         }
//     }else{
//         a=prompt("请输入一个非零数字")
//     }
// }while(a!=guessnumber)
// alert("恭喜你，答对了，数字是："+guessnumber)


// for(var a=1;a<10;a++){
//     if(a==5)continue;
//     for(var b=1;b<10;b++){
//         if(b==5)continue;
//         if(a!=b){
//             document.write(a+"x"+b+"="+(a*b)+"</n>");
//         }else{
//             document.write(a+"x"+b+"="+(a*b)+"</br>");

//         }
//     }
// }


var cont=document.getElementById("Cont");
//m,n表示下限和上限（包括m和n)
var color=function(m,n){
    for(var r=m;r<=n;r++){
        for(var g=m;g<=n;g++){
            if(r==g) continue;
            for(var b=m;b<=n;b++){
                if(r==b||g==b) continue;
                var a=document.createElement("div");
                a.style.width="5px";
                a.style.height="5px";
                a.style.background="rgb("+r+","+g+","+b+")";
                a.style.float="left";
                cont.appendChild(a);
                console.log("rgb("+r+","+g+","+b+")");
            }
        }
    }
}
color(m,n)