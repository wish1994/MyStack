<!-- TOC -->

- [1. html基础](#1-html基础)
    - [1.1. 列表](#11-列表)
        - [1.1.1. 有序(ordered list)](#111-有序ordered-list)
        - [1.1.2. 无序(unordered list)](#112-无序unordered-list)
    - [1.2. 图片插入](#12-图片插入)
    - [1.3. 链接](#13-链接)
        - [1.3.1. 页面](#131-页面)
        - [1.3.2. 图片](#132-图片)
        - [1.3.3. 下载](#133-下载)
        - [1.3.4. 邮箱](#134-邮箱)
        - [1.3.5. 新窗口](#135-新窗口)
        - [1.3.6. 网页弹窗](#136-网页弹窗)
    - [1.4. 锚点](#14-锚点)

<!-- /TOC -->
# 1. html基础
## 1.1. 列表
### 1.1.1. 有序(ordered list)
```html
    <ol type="..." start="">
        <li>一段文字</li>
        <li>一段文字</li>
        <li>一段文字</li>
    </ol>
```   
    有序常用type： 1 a A i I  decimal-leading-zero（01,02...)
    其中英文字母必须在type中填写a或A，不可填其他字母

### 1.1.2. 无序(unordered list)
```html  
    <ul type="...">
        <li>一段文字</li>
        <li>一段文字</li>    
        <li>一段文字</li>    
        <li>一段文字</li>    
    </ul> 
```  
   无序常用type：disc 实心圆(默认) circle 空心圆 square 实心矩形
## 1.2. 图片插入
```html
    <img src="./文件地址">
```
    ../表示上一级目录;   ./或者不写表示本目录
## 1.3. 链接
### 1.3.1. 页面
```html
<a herf="./...html"></a>
```
### 1.3.2. 图片
```html
<a herf="./...jpg"></a>
```
### 1.3.3. 下载
```html
<a herf="./...zip"></a>当浏览器打不开链接文件时，默认下载，如压缩包格式zip
```
### 1.3.4. 邮箱
```html
<a href="mailto:XX@XX.com"></a>
```
### 1.3.5. 新窗口
```html
在新窗口/新选项卡打开：<a href="#" target="_blank"></a>
```
### 1.3.6. 网页弹窗
```html
<a href="javascript:alert('XXX')">文字</a>
```
文字是点击链接，XXX是弹窗内容
## 1.4. 锚点
    先设置一个id或者name，再用锚点对某个id/name建立链接。
```html
1、<a name="1"></a>
   <a href="#1"></a> 
 
2、<a href="#anchor"></a>
   <div id="anchor"></div>
```
锚点综合利用例子可见今天exe以及exc.html


