# 对象
    以键值对的形式存储。
```js
var Jack = {
    name:"Jack Smith",
    age:19,
    address:"New York",
    say:function(){
        console.log(Jack.name);
    }
}//输出Jack Smith

// 对象可以存储任何东西 
Jack.age  // 对象默认的取值方式就是  对象.属性（下标） 

var arrObj = {
    a:1,
    b:2,
    c:3
}

var a = "b";
arrObj[a];  // 这种取值方法，a是一个变量，结果为2。
arrObj.a   // 取arrObj对象里面,键名 叫 a 的那一条数据，结果为1。

```


# 作用域

```js
var obj1 = {
    a:1,
    say:function(){
        console.log(this.a)
    },
    obj2:{
        a:2,
        say:function(){
            console.log(this.a)
        },
        obj3:{
            a:3,
            say:function(){
                console.log(this.a)//在一个对象里面使用this，就是指该对象，不能越级！
            }
        }
    }
}
这是一个作用域链，
输入obj1.obj2.obj3.say()   得到3.
```

```js
//var a = 1;
//for(var i=0;i<5;i++){
//    var a = 2;
//}
//console.log(a);

var test = function(){
    var a = 1;
}

console.log(a);


```

# 遍历
```js
for(var i=0;i<arr.length;i++){
    // 此方法可以遍历数组
}


var jack = {
    name:"jack smith",
    age:19,
    address:"NewYork",
    father:"old smith",
    brother:"david smith"
}

for(key in obj){
    var value = obj[key];
}     //对象遍历标准格式for in。

for(k in jack){
    console.log("jack's "+k+" is "+jack[k]);
}
//执行以上遍历，会得到jack的全部信息。
```

# while / do while
    1、 while (条件)
        {
            需要执行的代码
        }
    先验证条件，再执行代码。
    2、 do 
        {
            需要执行的代码
        }
        while（条件）
    先执行代码，再验证条件。  
    3、实例
```js
var guessnumber = 67;
do{
    var a;
    if(a!=undefined&&a!=0){
        if(a>guessnumber){
            a=prompt("数字"+a+"太大")
        }else{
            a=prompt("数字"+a+"太小")
        }
    }else{
        a=prompt("请输入一个非零数字")
    }
}while(a!=guessnumber)
alert("恭喜你，答对了，数字是："+guessnumber)
//猜数字。
```  