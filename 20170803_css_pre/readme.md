<!-- TOC -->

- [1. 边框(border)](#1-边框border)
    - [1.1. 边框外边距margin](#11-边框外边距margin)
    - [1.2. 内边距padding](#12-内边距padding)

<!-- /TOC -->
# 1. 边框(border)
    一、border常用属性：width style color
    二、border4个方向（border-top、bottom、left、right）可以分别设置属性
```css
    #Main{
        width:100px;
        height:100px;
        background:#0f0;
        border-top: 10px double #00f;
        border-bottom:10px solid brown;
        border-left:10px dashed #ff0;
        border-right:10px dotted #0ff
    }
```
    三、border单一属性值（color或width或style等）可以设置多个，采用顺序为为上右下左，当一边没有设置某一属性值时，采用对立边属性值。

```css
    1、如border-color：#f00 #ff0
       指的是上下边框为#f00,左右为#ff0,
    2、如果三种颜色1/2/3，则是上1，左右2，下上3
     #main{
        width:100px;
        height:100px;
        background:#0f0;
        border:10px;
        border-color:#ff0 #0ff #000;
        border-style:solid double
     }
     width和style同理。

```
       


## 1.1. 边框外边距margin
    margin表示边框外边距，可以设置最多4个大小，默认顺序是上右下左，当一边没有设置大小时，采用对立边大小。
    同一类别的div之间的边距采用单个margin数值，以较大的边距数值为准，而不是两个相加。
## 1.2. 内边距padding
    padding指边框内容与边框的间距，设置大小的顺序同margin一样，上右下左。