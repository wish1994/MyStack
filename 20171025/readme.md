# jQuery中的节点关系

* children()
    
    所有亲儿子节点。就是儿子，孙子不在children()里面。

* find()

    所有后代元素。和children()不一样，children()返回的是自己的亲儿子元素列表，而find()返回的是自己的后代所有元素的列表。

* parent()

    亲爸爸。任何元素都只有一个亲爸爸。

* parents()

    这个元素的所有的祖先节点。

* siblings()

    亲兄弟

* prev()、next()、prevAll()、nextAll()

    前一个兄弟、后一个兄弟、前所有兄弟、后所有兄弟。

# 节点操作

* 父亲.append(儿子)
* 儿子appendTo(父亲)
* after(兄弟)  before(兄弟)   分别在前后插入兄弟元素
* clone() 克隆节点
* remove() 删除页面上指定元素：

# ajax
原生ajax
```js
var xhr = new XMLHttpRequest();	//不兼容，能力检测

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
			//正面的HTTP状态码
			alert(xhr.responseText);
		}
	}
}

xhr.open("post","check.php",true);
xhr.send("id=" + id + "&name=" + encodingURIComponent(name));
```
$.get()方法
```js
$.get("a.json"  ,   {"id":1,"name":"考拉"}  ,  function(text){
		alert(typeof text);
});
```
$.post()方法
```js
$.post("a.json",{"id":1,"name":"考拉"},function(data){
	alert(typeof data);
	alert(data.content[2].id);
});
```
$.ajax()方法
```js
$.ajax("b.json",{
	//请求类型
	"type"	:   "get",
	//传到服务器上的数据
	"data"	: 	{
		"name":"xiaoming",
		"age" :10
	},
	//成功做的事情
	"success" : function(data){
		alert(typeof data);
	},
	//错误做的事情
	"error"	:   function(XMLHttpRequest, textStatus, errorThrown){
		alert(errorThrown);
});
```





