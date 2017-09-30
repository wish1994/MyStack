<!-- TOC -->

- [1. 大纲](#1-大纲)
- [2. 课堂内容](#2-课堂内容)
    - [2.1. 补充](#21-补充)
    - [2.2. DOM(文档对象模型)](#22-dom文档对象模型)
        - [2.2.1. 获取节点](#221-获取节点)
        - [2.2.2. 节点操作（预习）](#222-节点操作预习)
    - [2.3. 更改HTML属性](#23-更改html属性)
            - [2.3.0.1. 【案例】 网页换肤](#2301-案例-网页换肤)
            - [2.3.0.2. 更改元素中的图片](#2302-更改元素中的图片)
        - [2.3.1. 操作元素样式](#231-操作元素样式)
        - [2.3.2. 进度条](#232-进度条)
    - [2.4. 事件监听](#24-事件监听)
        - [2.4.1. 案例](#241-案例)
            - [2.4.1.1. 单击输出按钮的内容](#2411-单击输出按钮的内容)
            - [2.4.1.2. tab标签切换](#2412-tab标签切换)

<!-- /TOC -->

# 1. 大纲 #

1. DOM(文档对象模型)
2. 节点操作
3. 事件监听


# 2. 课堂内容 #


## 2.1. 补充 ##
Markdown 与 简书

## 2.2. DOM(文档对象模型) ##

Document Object Model 文档对象模型

DOM ： Document Object Model文档对象模型，所有的HTML标签都是对象，非常方便得到、操作。不是操作字符串，而是操作对象。

```
标签 <span> <div>     (css 中)
元素 <div id="div1">  (js 中)
节点 <div> <span>     (DOM 中)
```

### 2.2.1. 获取节点 ###

驼峰命名法介绍

document.getElementById




### 2.2.2. 节点操作（预习） ###
	
创建元素,添加元素，删除元素，替换元素，克隆元素	

createElement appendChild insertBefore removeChild replaceChild cloneNode

参考了解
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement


## 2.3. 更改HTML属性 ##

HTML标签有很多属性，比如src、href、title等等。
JS可以更改HTML的任何属性，方法是两种：点语法 和 setAttribute()、getAttribute()。

#### 2.3.0.1. 【案例】 网页换肤 ####

css 样式表在 css 文件夹
```
<link id="link" href="css/css1.css" rel="stylesheet" type="text/css" />


<dl id="message">
	<form>
		<dt>
			<strong>可以换肤的提交框：</strong>
			<input type="button" value="皮肤1" data-css="css1" />
			<input type="button" value="皮肤2" data-css="css2" />
		</dt>
		<dd>输入姓名：<input class="text" type="text" /></dd>
		<dd>输入密码：<input class="text" type="password" /></dd>
		<dd>请您留言：<textarea></textarea></dd>
		<dd class="center"><input class="btn" type="submit" value="提交" /></dd>
	</form>
</dl>

```

#### 2.3.0.2. 更改元素中的图片 ####

### 2.3.1. 操作元素样式 ###

通过点语法.style能够得到所有样式的封装  注意，只能得到行内样式，所有写在css内嵌的、外联的，一律不能得到。需要我们后面学习的知识，得到计算后样式。




### 2.3.2. 进度条 ###

```
<style>
	#progress{
		position: relative;
		margin: auto;
		top: 200px;
		display: block;
		width: 200px;
		height: 20px;
		border-style: dotted;
		border-width: thin;
		border-color: darkgreen;
	}
	#filldiv{
		position:absolute;
		top: 0px;
		left: 0px;
		width: 0px;
		height: 20px;
		background: blue;
	}
	#percent{
		position: absolute;
		top: 0px;
		left: 200px;
		
	}
</style>


<div id="progress">
	<div id="filldiv"></div>
	<span id="percent">0</span>
</div>

```


## 2.4. 事件监听 ##

JavaScript制作交互效果，离不开事件。所谓的事件，就是用户的某个行为，能够触发一个函数的执行


今天我们只学习DOM标准中的0级的事件绑定方法：

```
	// 得到这个box
	var oDiv = document.getElementById("box");
	
	//事件
	oDiv.onclick = function(){
		alert("你好，点我干嘛，我烦着呢！！");
	}

```

也可以：

```

	oDiv.onclick = fun;
	
	function fun(){
		alert("你好，点我干嘛，我烦着呢！！");
	}


```

所以现在你就人格升华了，原来我们想要一个函数执行，必须调用这个函数，比如fun();
但是现在你知道了，一个函数可以当做一个事件的处理函数，当这个事件发生的时候，函数也能执行了。

```

onclick 		单击
onmouseover	鼠标进入
onmouseout		鼠标离开
ondblclick		双击
onfocus			得到焦点
onblur			失去焦点
onmousedown		鼠标按下
onmouseup			鼠标按键抬起

onload 		当页面完全加载成功
window.onload 表示页面中的所有的代码都已经加载完毕了。

```


### 2.4.1. 案例 ###

#### 2.4.1.1. 单击输出按钮的内容 ####

```
// 为什么没有写在文档加载之后，为什么 allBtn 不为空
// 因为 getElementsByTagName 方法在得不到元素的情况下，
// 依然会返回一个对象, 只不过这个对象其中的元素个数为 0
// alert(allBtn);
```


```
// 下标为 i 的对象： 内置了很多属性 和 很多方法。但我们可以往这个对象中新增属性，例如
// 在下标为 i 的按钮对象 中新增了一个属性 xxx，并将其中的值设置为 i
allBtn[i].xxx = i;
```


【提醒】通过 闭包函数 来实现

通过绑定函数的的方法，来获取点击按钮的下标
```
function bind(obj, pos) {
	obj.onclick = function() {
		alert(pos);
	}
}

bind(allBtn[i], i);
```


```
	<button>按钮1</button>
	<button>按钮2</button>
	<button>按钮3</button>
	<button>按钮4</button>
	<button>按钮5</button>
	<button>按钮6</button>
```

#### 2.4.1.2. tab标签切换 ####

```
#tab span{display:inline-block;padding:5px 15px;background-color:#ddd;margin:0 3px;border:1px solid #ddd;border-bottom:none;}
.content{padding:15px;border:1px solid #ddd;font-size:24px;background-color:#efefef;}



<div id="tab"><span>辣条</span><span>豆腐</span><span>方便面</span><span>桂林米粉</span></div>
<div class="content">我喜欢吃辣条</div>
<div class="content">吃完豆腐池辣条</div>
<div class="content">喜欢去超市捏方便面</div>
<div class="content">桂林米粉哪里最正宗</div>

```



