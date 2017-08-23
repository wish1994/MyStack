<!-- TOC -->

- [1. position](#1-position)
    - [1.1. relative](#11-relative)
    - [1.2. absolute](#12-absolute)
- [2. 居中](#2-居中)
    - [2.1. 左右居中](#21-左右居中)
    - [2.2. 上下居中](#22-上下居中)
- [3. cursor](#3-cursor)

<!-- /TOC -->
# 1. position
css属性
    static      静止定位
    relative    相对定位
    absolute    绝对定位
    fixed       固定位置
1. 除static以外的所有定位，都要通过top，left，bottom，right来用，以后学习transition的时候，只有同属性，并且连续的值，才能过渡。
2. 除static以外的所有定位方式，都支持z-index，z-index不支持小数和负数，不需要单位，越大越在上层。
3. 其他所有的定位方式，z-index都比static的大。
## 1.1. relative
1. 相对于原来的位置进行**偏移**，还占据原来的位置，不会对其他任何元素产生影响。原来的位置作为“参照物”。
2. left代表 从left往对立方向的偏移量。
## 1.2. absolute
1. 相对参照物的**距离**，不在占据原来的位置，下面的元素可以顶上去。从内往外找，找到第一个有position属性，并且不是static的祖先元素，以它作为参照物。一般我们参照物设置为position：relative，因为它还在那个位置。
2. left代表，距离参照物左侧的距离。

# 2. 居中
## 2.1. 左右居中
行内元素左右居中，父容器：text-align:center;
块级元素左右居中，自身: margin: 0 auto;

## 2.2. 上下居中
行内元素  line-height

块级元素怎么办

1. 父元素和子元素，都有固定高宽

    父元素设置padding；子元素设置margin。

2. 父元素，高宽不知道，子元素高宽固定
```css
.father{
    position:relative;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-50px;
}
```

3. 父子元素宽高均不确定。
```css
.father{
    position:relative;
}
.son{
    width: 100px;
    height: 100px;
    background-color: #f00;
    
    position: absolute;
    margin:auto;
    top:0;
    bottom:0;
    right:0;
    left:0;
}

总结
.father{
    text-align: center;
}
.father::before,.father::after,.son{
    display: inline-block;
    vertical-align: middle;
}
.father::before,.father::after{
    content:"";
    height:100%;
}
```

# 3. cursor
```css
.box{
    cursor:default; 
    /*
    默认鼠标箭头
    */

    cursor:pointer;
    /*
    手势符号
    常见于按钮、超链接
    */

    cursor:auto;
    /*
    自动，例如，放到文字上，会变成竖线符号
    */
}
```

