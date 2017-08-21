<!-- TOC -->

- [1. css:font属性](#1-cssfont属性)
    - [1.1. 相关属性](#11-相关属性)
- [2. 盒模型](#2-盒模型)
    - [2.1. padding](#21-padding)
    - [2.2. margin](#22-margin)
        - [2.2.1. 注意经典问题，外边距坍塌、外边距合并](#221-注意经典问题外边距坍塌外边距合并)
    - [2.3. border](#23-border)
- [3. overflow](#3-overflow)

<!-- /TOC -->
# 1. css:font属性

    所有电脑浏览器，默认字体大小16px
    chrome浏览器，最小支持12px，所以一般font-size不要小于它

    font-size
            单位    px
            em      从内往外找，找到最近的，具有font-size属性的标签，作为参照物
            rem     root em 使用html标签作为参照物，可以用来进行手机端等比放大

            这里提到的参照物，用来设置font-size属性
            但是，使用em或者rem的，不一定是font-size属性

    line-height
            设置行高，文字会在行高里面上下居中，因此这也是我们做上下居中的重要方法之一

    font-family
            字体
            逗号隔开，
            中文要加引号
            英文直接写

            css3 可以设置自定义字体，这个字体，用户的电脑不需要安装
        
    font-weight
            400-900
            normal < 500 < bold

            常设置bold，或者不设置

    font-style
            italic      让支持斜体的字体，按斜体显示
            oblique     倾斜体，如果不支持倾斜体，则用italic代替

    

```css
.box{
    font:italic bold 24px/48px "宋体",Arial;
}
```

## 1.1. 相关属性
    color               设置字体颜色
    text-align          相对于外容器,文字左右对齐 left center right

    vertical-align      文字与文字之间，文字垂直对齐 top middle bottom

    text-indent         首行缩进


    white-space: nowrap;        换行：不换行
    width: 100px;               宽度
    overflow: hidden;           内容超出：隐藏
    text-overflow: ellipsis;    文字超出：省略符。 默认叫clip，裁剪
    一组属性，实现，超出文字，用省略号显示
    
    问：能不能使用该属性，让元素，相对外容器，上下居中？
    答：可以将元素的行高设置为容器的高度，然后再使用vertical-align将整体垂直对齐。

# 2. 盒模型

    content(width,height)     padding     border      margin

    标准盒模型：一个盒子的尺寸，是 content+padding+border
                                padding 和 border 都是往外撑开

    怪异盒模型（box-sizing）：盒子的尺寸，就是设置的width和height
                                padding 和 border 向内挤压，直到padding和border的和，超过了width和height


## 2.1. padding

    padding:20px                   上
    padding:10px 40px;             上，右
    padding:10px 40px 20px;        上，右，下
    padding:10px 20px 30px 40px;   上，右，下，左

    缺省值，用对称方向样式填充。

## 2.2. margin

    格式与padding一模一样

### 2.2.1. 注意经典问题，外边距坍塌、外边距合并

    1. 相邻元素，相邻的margin会合并
    2. 父元素margin，与内部第一个或最后一个元素的margin
    3. 空元素，没有height、min-height、border、padding的空元素，自己的margin会与自己的合并

```html
<div class="father">
    <div class="son">

    </div>
</div>
```

```css
.father{
    width: 200px;
    height: 200px;
    background-color: #880;
}
.son{
    width: 100px;
    height: 100px;
    background-color: #f00;
}   
```

1. father元素，设置overflow:hidden(野路子)
2. padding 1px 、 border-width 1px 、空元素 height 1px(不完美)
3. 增加空元素 overflow hidden(近似完美)
4. 伪元素 模仿空元素,给父元素的::before伪元素写 （完美）

```css
    .clear-top::before,.clear-top:before {
        content: "";
        display: block;
        overflow: hidden;
    }
    .clear-bottom::after,.clear-bottom:after{
        content:"";
        display: block;
        overflow: hidden;
    }
```
可以在一个项目前设置以上的样式，然后填充进以后每个需要这种格式的标签。
## 2.3. border
    边框

    border:3px solid #f00;

    border-top:3px solid #f00;

    border-width:10px 20px 30px 40px
    border-style:
    border-color:

    border-top-color:
    
# 3. overflow

    可以展开为overflow-x overflow-y，分别是横向和纵向 

    hidden      超出隐藏
    visible     默认，超出显示
    scroll      超出，滚动，会出现滚动条
