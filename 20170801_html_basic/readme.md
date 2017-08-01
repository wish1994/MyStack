<!-- TOC -->

- [1. html基本格式](#1-html基本格式)
- [2. emmet语法](#2-emmet语法)
    - [2.1. 后代>](#21-后代)
    - [2.2. 兄弟：+](#22-兄弟)
    - [2.3. 上级^](#23-上级^)
    - [2.4. 分组：()](#24-分组)
    - [2.5. 乘法：*](#25-乘法)
    - [2.6. id和类属性](#26-id和类属性)
        - [2.6.1. “#”](#261-)
        - [2.6.2. “.”](#262-)
        - [2.6.3. “.和#可以合用”](#263-和可以合用)
- [3. 文本格式](#3-文本格式)
    - [3.1. 文本样式](#31-文本样式)
    - [3.2. 标题元素](#32-标题元素)
    - [3.3. 段落](#33-段落)
    - [3.4. 换行](#34-换行)
    - [3.5. 水平线](#35-水平线)
    - [3.6. 分区元素](#36-分区元素)
    - [3.7. 预格式化](#37-预格式化)
    - [3.8. 图片插入](#38-图片插入)

<!-- /TOC -->
# 1. html基本格式
***
<DOCTYPE html>

     <html>
        <head>
            <title>我的主页</title>
        </head>
        <body>
            hello,i am here!
        </body>
    </html>

# 2. emmet语法
***
## 2.1. 后代>
***
html>head

    <html>
        <head></head>
    </html>   
## 2.2. 兄弟：+
***
head+body

    <head></head>
    <body></body>
## 2.3. 上级^
***
head>title^body
    
    <head>
        <title></title>
    </head>
    <body>

    </body>
## 2.4. 分组：()
***
html>(head>title)+body

    <html>
        <head>
             <title></title>
         </head>
        <body>
        
         </body>
    </html>
## 2.5. 乘法：*
***
html>head+(body>dir*3)

    <html>
    <head></head>
    <body>
        <dir></dir>
        <dir></dir>
        <dir></dir>
    </body>
    </html>
## 2.6. id和类属性
***
### 2.6.1. “#”
***
body>(dir#1)+(dir#2)
    
    <body>
    <dir id="1"></dir>
    <dir id="2"></dir>
    </body> 
### 2.6.2. “.”
***
body>(dir.3)+(dir.4)
    
    <body>
        <dir class="3"></dir>
        <dir class="4"></dir>
    </body>
### 2.6.3. “.和#可以合用”
***
略，看浏览器收藏


# 3. 文本格式
## 3.1. 文本样式
    b 加粗     i 斜体     u 下划线   del 删除线
    sub 下标     sup上标
## 3.2. 标题元素
h1-6    六级标题
    
    <h1>一级标题</h1>等等
## 3.3. 段落
符号p
    
    <p>一段文字</p>
    <p>再一段文字</p>
    段落之间可加换行符号<br>
## 3.4. 换行
    单行符号<br>
    可用于段落之间空行，可以写多次以增加行距
## 3.5. 水平线
    <hr>增加分割线
## 3.6. 分区元素
div 和 span
        
    div是竖着排列，可设置长宽，默认是一整行
    <div style="width:100px;height:100px">这是div分区</div>
    span是横着排列，长宽不可调整，根据内容固定
## 3.7. 预格式化
pre
    
    <pre>内容</pre>
    pre中间的内容按代码布局制定
    如<pre>
      1
       2
          3
                4     
                     5
      </pre> 
      网页页面布局如同以上“12345”布局
## 3.8. 图片插入
    <img onmouseover="this.src='../picture/dog.jpg'"  onmouseout="this.src='../picture/monkey.jpg'"  style="height:150px;width:150px">
    onmouseover鼠标经过，onmouseout鼠标移开，如果没有设置长宽，必须要加个基底图片src="..."

                  
    















