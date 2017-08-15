<!-- TOC -->

- [1. html](#1-html)
- [2. 文本标签](#2-文本标签)
- [3. 标题](#3-标题)
- [4. 段落](#4-段落)
- [5. 换行](#5-换行)
- [6. 水平线](#6-水平线)
- [7. 分区元素](#7-分区元素)
- [8. 预格式化](#8-预格式化)
- [9. 转义字符](#9-转义字符)
- [10. 颜色](#10-颜色)
- [11. 作业](#11-作业)

<!-- /TOC -->
# 1. html
```html
<!DOCTYPE html>   //文档声明，必须添加，声明这是h5语言。文档样式必须小写。
<html lang="en">   //所有网页上的内容都要放在html标签里。
    <head>  //一般3个meta，一个title，两个外部样式链接。
        <meta charset="UTf-8">  //原信息标签（编码）
        <meta name="keywords" content="html基础,markdown"> // 设置关键字（复数）以及内容，便于搜索。
        <meta name="description" content="第一天学习html和markdown"> //设置网页描述。
        <title>第一天</title> //网页标题。
        <link rel="stylesheet" href="style.css"> //css外部样式
        <script src="main.js"></script> //js外部样式。
    </head>
    <body>
        
    </body>
</html>
```
# 2. 文本标签

修饰文本（文字）的标签,全是成对出现

    b       加粗
    i       斜体   
    u       下划线
    del     删除
    sub     下标
    sup     上标

# 3. 标题

代表标题

    h1 h2 h3 h4 h5 h6

# 4. 段落

    p

段落标签p里面不支持换行，但是段落之间，默认换行

# 5. 换行

    br  自结束标签

常用于文字内部，不产生行距

# 6. 水平线

    hr

# 7. 分区元素

    div     块元素    不相当于文字，“盒”   

        1. 从上往下排列
        2. 高宽可以直接生效
        3. 默认宽度 100%

    span    行内元素  相当于文字

        1. 默认从左往右
        2. 高宽无法直接生效
        3. 默认宽度

# 8. 预格式化

    pre

# 9. 转义字符

    &nbsp;
    &copy;

# 10. 颜色

    #ffffff;

    色相 明度 饱和度   /  rgb
    
# 11. 作业    
1. 自学常见的转义字符
[转义字符](http://tool.oschina.net/commons?type=2)

2. 内联文本语义 标签
[标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)  
3. 文字排版
[链接](http://www.unnuo.com/teach/010101) 