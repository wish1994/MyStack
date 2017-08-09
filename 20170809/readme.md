<!-- TOC -->

- [1. 分支（条件分支语句）](#1-分支条件分支语句)
    - [1.1. if else](#11-if-else)
    - [1.2. switch](#12-switch)
    - [1.3. 三目运算](#13-三目运算)
- [2. for循环](#2-for循环)

<!-- /TOC -->
# 1. 分支（条件分支语句）
## 1.1. if else
```js
if(true){

}else if(){

}else if(){

}else{

}

var goal=prompt("你得了多少分")

if(goal>=80){
    alert("good job!")
}else if(goal>=60){
    alert("你还需努力")        
}else if(goal>=40){
    alert("你需要补考")        
}else if(goal>=20){
    alert("你需要重修")        
}else{
    alert("你需要留级")        
}
```

## 1.2. switch
```js
switch(){
    case 条件:{

    }
    case 条件2:{
        
    }
}


var month=prompt("请输入月份")
switch(month){
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":{
        alert("本月31天");
        break;
    }
    case "4":
    case "6":
    case "9":
    case "11":{
        alert("本月30天");
        break;
    }
    case "2":{
        alert("闰年时本月29天，平年时本月28天")
    }
}
/*判断某月多少天。*/
```
    
    switch的特点，默认，如果满足"条件"，执行后面所有的代码；所以，常见的写法，要加break，终止代码
    case的条件，必须是字符串，只有switch的内容，正好等于该字符串，则进入对应的代码。
## 1.3. 三目运算

    格式：   条件 ? 如果满足条件，执行这里的代码 : 否则执行这里的代码
```js
(3<5)?console.log(3):console.log(5）;
比较3和5的大小。
var max=function(a,b,c){
    (a>b) ?    (a>c) ? console.log(a):console.log(c):  (b>c)?console.log(b):console.log(c)
}
/*取最大值*/
```
    

# 2. for循环
```js
for(初始化计数器；继续运行的条件；计数器变化){
}

for(var i=0;i<10;i++){
    console.log(i)
}

列出1到10。
```
```js
for(var i=1;i<100;i++){
    var count=0;
    for(var a=1;a<=i;a++){
        if(i%a==0){
            count++;
        }
    }
    if(count==2){
        console.log(i);
    }
}
/* count是计算i约数的个数。*/
```


    取位函数;求出4位水仙花数。
```js
/* number是一个数字，n表示第几位。*/
var quwei=function(number,n){
    var limit=Math.pow(10,n-1);
    /*设置一个界限，使得number具有n以上位数。*/
    if(number>=limit){
        return parseInt(number/limit)%10;
        /*求得n位上的数字并返还给quwei。*/    
    }else{
        alert("你所输入的数字位数不够")
    }
}


var sifang=function(a){
    return Math.pow(a,4)
}
/*定义四次方的功能*/

for(var i=1000;i<10000;i++){
    var a1=quwei(i,1);
    var a2=quwei(i,2);
    var a3=quwei(i,3);
    var a4=quwei(i,4);
    if(sifang(a1)+sifang(a2)+sifang(a3)+sifang(a4)==i){
        console.log(i);
    }
}
/*检验4位水仙花数并输出。*/
```
