document.write("作业：")
document.write("<br>");

//第一题
document.write("第一题");
document.write("<br>");
document.write("回顾的课堂代码在count和index网页上");
document.write("<br>");
document.write("<br>");

// 第二题
document.write("第二题");
document.write("<br>");
var a=89;
var a1=parseInt(a/24);
var a2=a%24;
document.write("一共经历了"+a1+"天"+a2+"小时。")
document.write("<br>");
document.write("<br>");


// 第三题
document.write("第三题");
document.write("<br>");
var b=80;
var b1=5/9.0*(b-32);
var b2=b1.toFixed(3);
document.write("目前"+b+"华氏度，折合为"+b2+"摄氏度。");
document.write("<br>");
document.write("<br>");

// 第四题
document.write("第四题");
document.write("<br>");
var k=-2; 
document.write(++k + k++ + ++k + k);
document.write("<br>");
document.write("k++是之前值，++k是之后值，每一个值都是在前面的基础上变化的，所以结果是-1+（-1）+1+1=0");
document.write("<br>");
document.write("<br>");

// 第五题
document.write("第五题");
document.write("<br>");
var c=10;
for(i=1;i<50;i++){
    c=c*1.05
}
document.write(c);
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


//拓展
document.write("拓展");
document.write("<br>");

//第一题
document.write("第一题");
document.write("<br>");
document.write((123+45*78)/(34+543)-9*(324-34));
document.write("<br>");
document.write("<br>");


//第二题
document.write("第二题");
document.write("<br>");
document.write("见弹出的输入框");
var d=prompt("请输入当前摄氏度")
var d1=9*d/5+32;
alert("折合为"+d1+"华氏度");
document.write("<br>");
document.write("<br>");


// 第三题
document.write("第三题");
document.write("<br>");
document.write(Math.pow(((23+Math.pow(5,7))/45),2));
document.write("<br>");
document.write("其他几题类似，见弹框");

// 第四题
var e=prompt("请输入六边形边长")
var e1=(3*Math.pow(3,1/2))/2*Math.pow(e,2);
alert("六边形为"+e1);
document.write("<br>");

// 第五题
var f=prompt("请输入多少天后")
var f1=(f%7)+2;
if(f1!=7){
    alert("那天为星期"+f1);
}else{
    alert("那天为星期日");
}
document.write("<br>");

//第六题
var g=prompt("请输入一个三位数")
var g1=g%10;
var g2=(g%100-g%10)/10;
var g3=parseInt(g/100);
var g4=g1+g2+g3;
alert("各数位之和为"+g4)
document.write("<br>");


