# html基础
## 列表
### 有序(ordered list)
```html
    <ol type="..." start="">
        <li>一段文字</li>
        <li>一段文字</li>
        <li>一段文字</li>
    </ol>
```   
    有序常用type： 1 a A i I  decimal-leading-zero（01,02...)
    其中英文字母必须在type中填写a或A，不可填其他字母

### 无序(unordered list)
```html  
    <ul type="...">
        <li>一段文字</li>
        <li>一段文字</li>    
        <li>一段文字</li>    
        <li>一段文字</li>    
    </ul> 
```  
   无序常用type：disc 实心圆(默认) circle 空心圆 square 实心矩形
## 图片插入
```html
    <img src="./文件地址">
```
    ../表示上一级目录;   ./或者不写表示本目录
## 链接
### 页面
```html
<a herf="./...html"></a>
```
### 图片
```html
<a herf="./...jpg"></a>
```
### 下载
```html
<a herf="./...zip"></a>当浏览器打不开链接文件时，默认下载，如压缩包格式zip
```
### 邮箱
```html
<a href="mailto:XX@XX.com"></a>
```
### 新窗口
```html
在新窗口/新选项卡打开：<a href="#" target="_blank"></a>
```
### 网页弹窗
```html
<a href="javascript:alert('XXX')">文字</a>
```
文字是点击链接，XXX是弹窗内容
## 锚点
    先设置一个id或者name，再用锚点对某个id/name建立链接。
```html
1、<a name="1"></a>
   <a href="#1"></a> 
 
2、<a href="#anchor"></a>
   <div id="anchor"></div>
```
锚点综合利用例子可见今天exe以及exc.html


