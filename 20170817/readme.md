<!-- TOC -->

- [1. form](#1-form)
    - [1.1. label](#11-label)
    - [1.2. textarea](#12-textarea)
    - [1.3. input](#13-input)
    - [1.4. select](#14-select)
    - [1.5. option](#15-option)
    - [1.6. optgroup](#16-optgroup)
    - [1.7. 其它form控件](#17-其它form控件)
- [2. form分组](#2-form分组)
    - [2.1. fieldset](#21-fieldset)
    - [2.2. legend](#22-legend)
- [3. 作业](#3-作业)

<!-- /TOC -->
# 1. form
## 1.1. label
        for     属性，指明绑定的form控件
                点label 相当于点击for的目标
```html
<label for="idvalue">用户名</label>
<input type="text" id="idvalue">

<label for="idvalue">
        用户名
        <input type="text" id="idvalue">
</label>
```
## 1.2. textarea
        多行文本输入框、编辑控件
## 1.3. input
pattern
        正则表达式，输入的东西，必须符合其格式

min max step
        数字类input都支持

minlength maxlength
        最大输入多少字符

placeholder
        占位符，文本类的输入框都有

checked*
        鼠标选择类的基本上都有，单选框，复选框，下拉列表，选择列表

disabled*
        不可用，不可输入和修改，也不会上传数据

readonly
        只可读不可改,主要用于文本类输入框
        
required*
        所有输入控件 都可以用

cols rows
        只用于textarea

list
        只用于，选择datalist的id

label  
        用于给optgroup设置分组名称

通用属性
        autocomplete    默认为on，可以设置为off
        autofocus       设置默认焦点，一般一个网页，只能设置一个


type

---
        button
        reset
        submit
        image   图片提交按钮，可以用图片作为样子，功能跟submit一样


---                                                         
        checkbox
                "value"默认是on，也可以手动指定
                不成组,所以对于name的起名需要注意

                一般，多个checkbox，可以用不一样的name名
                或者，用同样的name，但是value不同
                各有好处

        radio
                value需要指定
                name属性一样的，为一组，其中只能选一个
---
        color
                value 用户选择的颜色值
                #会被转义为%23,防止跟锚点冲突
                颜色输入框
                firefox不支持
---
        text
                "value" 为用户输入的内容 
                不成组 
                
        email   
                类似text，验证邮箱格式，但是不准确

        password
                密码

        tel
                电话号码，验证电话格式

        url
                地址（网址）

---
        number
                类似text，只能输入数字
        range
                默认0-100
        

        file    上传文件
        image   上传图片

## 1.4. select

        size            默认显示几行

        multiple        可以多选，通过ctrl加鼠标多选

## 1.5. option
        作为select的选项，成对标签
        作为datalist的选项，自结束标签

## 1.6. optgroup
        给option分组，分组名字，使用label属性

## 1.7. 其它form控件

        meter
        output
        progress        进度条

# 2. form分组

## 2.1. fieldset
        给form控件
## 2.2. legend
        给fieldset设置标题

# 3. 作业

1. 回顾所有的table和form内容
2. 自学[内容分区元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#内容分区) 
