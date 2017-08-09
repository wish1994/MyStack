// var goal=prompt("你得了多少分")

// if(goal>=80){
//     alert("good job!")
// }else if(goal>=60){
//     alert("你还需努力")        
// }else if(goal>=40){
//     alert("你需要补考")        
// }else if(goal>=20){
//     alert("你需要重修")        
// }else{
//     alert("你需要留级")        
// }


// var month=prompt("请输入月份")
// switch(month){
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":{
//         alert("本月31天");
//         break;
//     }
//     case "4":
//     case "6":
//     case "9":
//     case "11":{
//         alert("本月30天");
//         break;
//     }
//     case "2":{
//         alert("闰年时本月29天，平年时本月28天")
//     }
// }

// var max=function(a,b,c){
//     (a>b) ?    (a>c) ? console.log(a):console.log(c):    (b>c)?console.log(b):console.log(c)
// }

// for(var i=1;i<100;i++){
//     var a=7*i;
//     if(a<100){
//         console.log(a)
//     }
// }


// for(var i=1;i<100;i++){
//     var count=0;
//     for(var a=1;a<=i;a++){
//         if(i%a==0){
//             count++;
//         }
//     }
//     if(count==4){
//         console.log(i);
//     }
// }

var quwei=function(number,n){
    var limit=Math.pow(10,n-1);
    if(number>=limit){
        return parseInt(number/limit)%10;    
    }else{
        alert("你所输入的数字位数不够")
    }
}
var sifang=function(a){
    return Math.pow(a,4)
}
for(var i=1000;i<10000;i++){
    var a1=quwei(i,1);
    var a2=quwei(i,2);
    var a3=quwei(i,3);
    var a4=quwei(i,4);
    if(sifang(a1)+sifang(a2)+sifang(a3)+sifang(a4)==i){
        console.log(i);
    }
}