window.onload = function(){

    var vLetter = document.getElementById('letter');//获取底层信面。
    var iSpeedInk = 5;//设置墨水速度。

    // 其他变量。
    var Text = document.getElementById('letter_src').innerHTML;//获取所有文本内容。因为下层的文字是在变的，所以这边就是设置上面一层隐藏文字的作用。
    var iCurChar = 0;//计数，每个字母；
    var sChars = '<span>';//加上span标签。
    var iCurInk = 0;//设置墨水rgb初始值为0；
    var sCurCaret = '';//设置当前笔的显示状态。
    var sCaret = "&nbsp;<img src='pen.gif' style='position:absolute' />";//当sCurCaret=sCaret时，笔出现。

    var doStep = function () {
        var sChar = Text.charAt(iCurChar);//代表当前文字。

        var iDelay = 32;//设置每个字母书写延迟为32ms，之后遇到不同字符会改变。
        if (sChar == '|') { // 当出现“|”代表出现错误。
            sChar = '';//加上空字符，相当于没加文字。
            sChars = sChars.substring(0, sChars.length-1);//删除前一个字母。
            iDelay = 64;
        } else if (sChar == '<') { // 去除br标签。
            var iPos = Text.indexOf('>', iCurChar);//从当前文字开始检索“>”,返回所在位置。
            sChar = Text.substring(iCurChar, iPos + 1);//再把空格标签提取出来加到底部letter上
            iCurChar = iPos;
        } else if (sChar == '.') {
            iDelay = 300;
        } else if (sChar == ',') {
            iDelay = 100;
        } else if (sChar == ' ') {
            iDelay = 32;
        } else if (iCurChar > 5) {
            sCurCaret = sCaret;
        }

        if (sChar == ' ') {
            iCurInk += iSpeedInk;//当遇到空格时，墨水rgb值加5，颜色变淡。
            sChar = '</span><span style="color:RGB(' + (iCurInk) + ',' + (iCurInk) + ',' + (iCurInk) + ')">' + sChar;
        }

        if (document.getElementById('inkwell2').style.visibility == 'visible') {
            sCurCaret = sCaret;
            document.getElementById('inkwell2').style.visibility = 'hidden';
            sChar = '</span><span style="color:RGB(0,0,0)">' + sChar;//笔加完墨水之后rgb变为（0,0,0）
        }

        // 当墨水rgb各值超过160，还原到0；
        if (iCurInk > 160) {
            iCurInk = 0;
            document.getElementById('inkwell2').style.visibility = 'visible';//同时显示加墨水的动态图。
            iDelay = 1000;//下一个字母书写延迟1s；
            sCurCaret = '';//笔消失。
        }

        // add current char to chars
        sChars += sChar;//将当前字符加到文章里面。

        if (iCurChar == Text.length - 1){
            sCurCaret = '';//当字母写到最后一个，笔消失；
        }
            
        vLetter.innerHTML = sChars + sCurCaret;//更新信上的文字。sChars是文字样式，sCurCaret是笔的状态

        iCurChar++;//下标增加，进入下一个文字

        // 进入下一个文字操作；
        if (iCurChar < Text.length) {
            setTimeout(doStep, 20 + iDelay);
        }
    }

    doStep();
};