<!-- TOC -->

- [1. 文本标签](#1-文本标签)
    - [1.1. 列表](#11-列表)
        - [1.1.1. 有序列表/无序列表](#111-有序列表无序列表)
        - [1.1.2. 自定义列表](#112-自定义列表)
    - [1.2. 其它语义化标签](#12-其它语义化标签)
- [2. 图片](#2-图片)
    - [2.1. 注意](#21-注意)
- [3. 链接/锚点](#3-链接锚点)
    - [3.1. 浏览器寻址](#31-浏览器寻址)
- [4. 表格](#4-表格)
- [5. 表单（部分内容）](#5-表单部分内容)
    - [5.1. 注意](#51-注意)
- [6. 作业](#6-作业)
- [7. Emmet语法](#7-emmet语法)
    - [7.1. 后代：>](#71-后代)
    - [7.2. 兄弟：+](#72-兄弟)
    - [7.3. 上级^](#73-上级^)
    - [7.4. 分组：()](#74-分组)
    - [7.5. 乘法：*](#75-乘法)
    - [7.6. id和类属性](#76-id和类属性)
        - [7.6.1. “#”](#761-)
        - [7.6.2. “.”](#762-)
        - [7.6.3. “.和#可以合用”](#763-和可以合用)

<!-- /TOC -->
# 1. 文本标签
## 1.1. 列表
### 1.1.1. 有序列表/无序列表

```html
    <ol reversed >
        <li>baidu1</li>
        <li>baidu2</li>
        <li>baidu3</li>
        <li>baidu4</li>
    </ol>

    <ul>
        <li>baidu</li>
        <li>baidu</li>
        <li>baidu</li>
        <li>baidu</li>
    </ul>
```

    reversed    倒序,只改变序号，不改变内容

    start       起始序号,可与reversed搭配使用

    type        ol:
                'a' 表示小写字母编号；
                'A' 表示大写字母编号；
                'i' 表示小写罗马数字编号；
                'I' 表示大写罗马数字编号；
                and '1' 表示数字编号（默认值）

                ul:

                circle
                disc
                square

### 1.1.2. 自定义列表

    dl

## 1.2. 其它语义化标签

    <blockquote>        引用

                cite    属性，描述这段引用的出处，但不显示

    <cite>
                        显示一个引用出处，默认是斜体

# 2. 图片

    img     虽然，默认属性显示为inline，实际上是inline-block

            src     图片地址


## 2.1. 注意

    重新认识 display

                    none            不显示，相当于不在网页上
                    
                    inline          行内元素

                        可以让元素，使用文字的属性
                        
                    block           块元素

                    inline-block    按行内排列，但是支持高宽

# 3. 链接/锚点

    a标签
            href    链接的地址

    锚点      给网页上的某一个位置，做的一个标记，可以通过a链接直接跳到指定位置去

            1. 使用a标签做锚点，name属性做标记（不推荐）
            2. 使用任何标签做锚点，id属性做标记

            当容器具有overflow:hidden的时候，容器就作为锚点滚动的边界

## 3.1. 浏览器寻址

            绝对地址
                    从顶级地址开始，对于网址就是从协议开始

            相对地址
                    ./   代表当前目录
                    ../  代表上一级目录
                    /     根目录(顶级地址)

# 4. 表格

    已经废弃的排版技巧

    table   表格

    tr      行

    td      单元格
    th      单元格，特指表头单元格


                    table       tr      td

    border          1           0       0
    cellspacing     1           0       0
    cellpadding     1           0       0
    width           1           0       1 
    height          1           1       1
    bgcolor         1           1       1
    align(l,c,r)    0.5         1       1
    (横向，靠左、右、居中)
    valign(t,m,b)   0           1       1
    (垂直，靠上、下、居中)

    rowspan 向下合并    合并行             1
    colspan 向右合并    合并列             1

    thead 表头，内容加粗，高度为文本高度。
    tbody 平分表格空间。
    tfoot 表尾，高度为文本高度。

# 5. 表单（部分内容）

    form
    
            action          请求数据的地址
            method          GET （默认） 
                                通过向url（网址）添加参数，实现数据传输
                                明文
                                2k
                            POST  
                                向网址指向的文件传递数据，但是数据不是附带在网址里面
    
    input

            type

                    text        文本输入框
                    button      常规按钮，没有任何功能
                    reset       重置本form的内容，不等于刷新
                    submit      向form的action提交数据

## 5.1. 注意

浏览器地址栏里面的网址，
a标签 href属性里面的地址
img、video、script ... 里面的 src属性，里面的地址

跨域
```html
<script src="http://www.baidu.com/s/main.js?wd=周杰伦"></script>
```


# 6. 作业

1. 自学 Emmet [Emmet文档](http://www.w3cplus.com/tools/emmet-cheat-sheet.html)
2. table数字练习
3. 学习input的type [input type 官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7)

# 7. Emmet语法
## 7.1. 后代：>
html>head
```html
    <html>
        <head></head>
    </html>   
```
## 7.2. 兄弟：+
head+body
```html
    <head></head>
    <body></body>
```
## 7.3. 上级^
head>title^body
```html    
    <head>
        <title></title>
    </head>
    <body>
    </body>
```
## 7.4. 分组：()
html>(head>title)+body
```html
    <html>
        <head>
             <title></title>
         </head>
        <body>
        
         </body>
    </html>
```
## 7.5. 乘法：*
html>head+(body>dir*3)
```html
<html>
    <head></head>
    <body>
        <dir></dir>
        <dir></dir>
        <dir></dir>
    </body>
</html>
```
## 7.6. id和类属性
### 7.6.1. “#”
body>(dir#1)+(dir#2)
```html
<body>
    <dir id="1"></dir>
    <dir id="2"></dir>
</body> 
```
### 7.6.2. “.”
body>(dir.3)+(dir.4)
```html   
    <body>
        <dir class="3"></dir>
        <dir class="4"></dir>
    </body>
```
### 7.6.3. “.和#可以合用”
略，看浏览器收藏
