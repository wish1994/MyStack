// var arrStar = ["白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"];
// for(var i=0;i<arrStar.length;i++){
//     console.log(arrStar[i]);
// }


// var a=[1,2,3,4];
// var b=a.slice(0,);
// b[0]++;
// console.log(a)
// console.log(b)

// var sortNumber=function(m,n){
//     return m-n;
// }
// var a=[13,24,2,9,6,23,45,35];
// // var c=a.sort()
// var b=a.sort(sortNumber)

// console.log(b)

// var result=function(a,b){
//     return a*b;
// }
for(var i=1;i<10;i++){
    for(var c=1;c<=i;c++){
        var d=i*c;
        if(c<i){
            document.write(c+""+"*"+i+""+"="+d+"\n")
        }else{
            document.write(c+""+"*"+i+""+"="+d+"</br>")    
        }  
    }
}

var line ="";
for(var row=1;row<10;row++){
    for(var col=1;col<=row;col++){
        line+=col+"x"+row+"="+col*row+"\t";
    }
    line+="\n"
}
console.log(line)

