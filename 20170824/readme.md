<!-- TOC -->

- [1. background](#1-background)
    - [1.1. backgroundcolor](#11-backgroundcolor)
    - [1.2. background-image](#12-background-image)
    - [1.3. background-repeat](#13-background-repeat)
    - [1.4. background-size](#14-background-size)
    - [1.5. background-position](#15-background-position)
    - [1.6. background-clip](#16-background-clip)
    - [1.7. background-attachment](#17-background-attachment)
    - [1.8. background-blend-mode](#18-background-blend-mode)

<!-- /TOC -->
# 1. background
## 1.1. backgroundcolor
    hex     #ff00ff
    rgb     rgb(0,255,189)
    rgba    rgba(0,255,189,0.4)
    hsla    hsla(177, 43%, 62%, 1)  色相 饱和度 明度

## 1.2. background-image

    background-image:url("./images/2.jpg")
    background-image:url('')
    background-image:url()          不推荐

## 1.3. background-repeat
背景重复

    background-repeat:  no-repeat
                        repeat-x
                        repeat-y
                        space       在不改变图片尺寸的前提下，尽量放置完整的背景图片，多余的空间均分
                        round       图片尺寸会随着容器改变，最小75%，最大125%（不包括125%）

    background-repeat-x:    no-repeat / repeat
    background-repeat-y:    no-repeat / repeat

## 1.4. background-size
控制背景图尺寸
                两个值时，分别代表宽、高
                一个值时，代表宽；高，自动（不要理解为，同时对两个方向起作用！！）

    background-size: 100px 50px     宽高
    background-size: 50%   100%     相对于容器
                    auto  auto
                    contain        只要有一个边到达了容器边界，就不再放大
                                    一定小于等于容器尺寸

                    cover          一边到达边框，另一边超出，填满容器
                                    一定大于等于容器尺寸
    background-position

## 1.5. background-position
                100px  50px     从左往右的偏移量    从上往下的偏移量


                0%              left  
                50%             center
                100%            right
                        0%      top
                        50%     center
                        100%    bottom

    百分比，根据， 容器尺寸 - 图片（background-size）的差值（可以是负值）
        差值为正时，向右移动百分比乘以差值的距离；差值为负，向右移动乘积的距离，因为是负数，所以表现为向左移动。

## 1.6. background-clip

规定的是，背景图，从哪开始裁剪
自身以外的，裁掉

    background-clip: border-box; （默认，相当于没有裁剪）
    background-clip: padding-box; padding区域以外的裁掉
    background-clip: content-box; content区域以外的裁掉

## 1.7. background-attachment

把背景图片，固定到浏览器窗口上，不随内容滚动

fixed   图片固定到窗口上，不随内容滚动;
scroll  图片跟随内容滚动;
但是，当元素里面的元素设置了overflow:scroll之后，设置scroll时图片不随内容滚动，这个时候，使用local。

## 1.8. background-blend-mode

预先知识，多背景
    background-image:url('./images/2.jpg'),url('./images/back.jpg');
显示顺序，与字体类似，优先显示前面的，当无法显示，依次往后

background-image 可以与 background-color 进行混合

该属性，只能做，本标签自身的混合，而不能做标签与标签之间的混合