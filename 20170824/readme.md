# background
## backgroundcolor
    hex     #ff00ff
    rgb     rgb(0,255,189)
    rgba    rgba(0,255,189,0.4)
    hsla    hsla(177, 43%, 62%, 1)  色相 饱和度 明度
## background-image

    background-image:url("./images/2.jpg")
    background-image:url('')
    background-image:url()          不推荐
## background-repeat
背景重复

    background-repeat:  no-repeat
                        repeat-x
                        repeat-y
                        space       在不改变图片尺寸的前提下，尽量放置完整的背景图片，多余的空间均分
                        round       图片尺寸会随着容器改变，最小75%，最大125%（不包括125%）

    background-repeat-x:    no-repeat / repeat
    background-repeat-y:    no-repeat / repeat
## background-size
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

## background-position
                100px  50px     从左往右的偏移量    从上往下的偏移量


                0%              left  
                50%             center
                100%            right
                        0%      top
                        50%     center
                        100%    bottom

    百分比，根据， 容器尺寸 - 图片（background-size）的差值（可以是负值）
        差值为正时，向右移动百分比乘以差值的距离；差值为负，向右移动乘积的距离，因为是负数，所以表现为向左移动。

