<!-- TOC -->

- [1. 复合运算符](#1-复合运算符)
- [2. switch](#2-switch)
- [3. while](#3-while)
- [4. break 和 continue](#4-break-和-continue)
- [5. for循环](#5-for循环)
- [6. do-while循环](#6-do-while循环)

<!-- /TOC -->
# 1. 复合运算符

    +=
    -=
    *=
    /=
    %=

    逗号运算符
    ,

    // 逗号表达式
    // 功能： 从左到右依次执行每个表达式
    // 值： 是最后一个表达式的值


# 2. switch

    语法：
    switch (表达式) {
    case 匹配值1:
        语句1
        语句2
        // 【注意】break 是代表终止 switch 的运行
        break;

    case 匹配值2:
        语句1
        语句2
        break;

    default:
        只有上面所有 case 都没匹配到的时候，就执行这里
        语句;
        break;
    }

# 3. while 

程序的三大结构
(1) 顺序结构： 从上往下执行
(2) 选择结构
(3) 循环结构： 重复执行某段代码



# 4. break 和 continue

break 终止： switch, while

continue: 跳过当前循环中以下的所有代码


debug: 找出bug的过程：

1. 暴力调试
2. 在线调试



# 5. for循环


固定次数： 起始值， 终止值， 增量 
            1      100    1   ==> 循环100次
            1      100    2   ==> 循环50次
            1      5      1   ==> 循环5次


语法：
for (var i = 起始值; i <= 终止值; i++ ) {
    循环的内容
}


# 6. do-while循环

// 先执行循环体， 再判断条件
do {
	document.write(i + ", ");
	i++;
} while (i <= 5);


do-while 不管条件如何，总会执行第一次。

语法：

do {
    循环语句(if, while,for, do-while)
} while( 表达式 );