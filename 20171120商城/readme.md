# localStorage（本地存储，不清除会一直存在）
## 添加变量(增)
localStorage.setItem("username", "John");
括号里两个值，前面是保存在本地的键名，后面是键值。
增加方式还有两种：
1. window.localStorage.username="John";
2. window.localStorage["username"]="John";
## 改变变量（改）
改变本地存储的变量值，可以直接用setItem重新给变量赋值。
localStorage.setItem("username", "Jack");
## 获取变量（查）
localStorage.getItem("username");
上面获取的是当前本地存储中username变量的值。
## 删除变量（删）
localStorage.clear()表示清楚本地存储中的所有数据；
localStorage.removeItem("username")表示从本地存储中删除username这个变量。
# sessionStorage(会话存储，浏览器关闭之后就清除了)
sessionStorage的用法跟localStorage差不多，主要区别就是数据的时效性。


