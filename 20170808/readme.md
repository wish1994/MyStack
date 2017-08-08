<!-- TOC -->

- [1. 数据类型](#1-数据类型)
    - [1.1. 数字](#11-数字)
        - [1.1.1. 数学运算](#111-数学运算)
    - [1.2. 字符串](#12-字符串)
        - [1.2.1. 引号嵌套](#121-引号嵌套)
        - [1.2.2. 类型转换 string => number](#122-类型转换-string--number)
        - [1.2.3. 类型转换 number => string](#123-类型转换-number--string)
    - [1.3. 布尔值（boolean）](#13-布尔值boolean)
        - [1.3.1. 逻辑运算](#131-逻辑运算)
- [2. Math全局对象](#2-math全局对象)

<!-- /TOC -->
# 1. 数据类型
    number、string、boolean、undefined、null
## 1.1. 数字

    字面量与进制
    var a = 10;

    var b = 012;
    var b = 0o12;

    var c = 0x26;

    科学记数法
    5e+3
    2e-4
    -5e-3
    面试题

    var e = 10;
    console.log(5e+10);
### 1.1.1. 数学运算

    + 
    -
    *
    /
    %   // 10%3 => 1
    ++ -- 
    a-=3相当于a=a-3
    a+=4相当于a=a+4
## 1.2. 字符串

    var a = "123213123"
### 1.2.1. 引号嵌套

    var a = 5;
    var b = "1'+a+'1";
    var c = "1"+a+"1";
    var color = "rgb("+r+","+g+","+b+")";

    /*
        输出 "今天是2017年8月7日"
    */
### 1.2.2. 类型转换 string => number

    parseInt("15.4px")   =>   15
    parseFloat("15.4.5px")  => 15.4

    "15"*1     15
    "15"/1
    "15"-0
### 1.2.3. 类型转换 number => string

    15+""  // 字符串连接，隐式类型转换
## 1.3. 布尔值（boolean）
    true          false
    非零数字       零
    ！undefined   undefined
    非空字符       空字符"" 
                  null    
    infinity      NaN
    -infinity     无限接近零的数（如e-400）
    
### 1.3.1. 逻辑运算
    >  <  >=  <=

    == / !=    会进行隐式类型转换
    如:
    0 == false
    1 == true 
    5 != true

    === / !== 不会进行隐式类型转换
    如：
    0 !== false
    1 !== true

    && 与 and
    （true&&true&&true  => true）

    || 或 or
    （true||false||false => true）

    !  非 not
# 2. Math全局对象