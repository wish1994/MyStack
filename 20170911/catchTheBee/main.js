
(function(){
    
    var Bee=document.querySelector("#Bee");
    var words=document.querySelector(".words")
    var word1=Array("哎呀","嘿嘿","哈哈","蜗牛","真逗","傻子");
    var word2=Array("你差点抓到我了","你太慢了","要不我等你会儿","再加把劲","你碰得到我吗","来追我呀");
    var c ;var d;
    var time=null;
    var clearWords=function(){
         words.style.display="none";
    }
    Bee.addEventListener('mouseover',function(){
        var x=Math.random()*(window.innerWidth-100);
        var y=Math.random()*(window.innerHeight-100)+20;
        Bee.style.left=x+"px";
        Bee.style.top=y+"px";
               
        words.style.display="block";

        do {
            var a=Math.floor(Math.random()*word1.length); 
            var b=Math.floor(Math.random()*word2.length); 
        } while (a==c||b==d);
        clearTimeout(time);
        c=a;
        d=b;
        console.log(word1[c]+","+word2[d]);
        words.innerHTML=word1[c]+","+word2[d];
        time=setTimeout(clearWords,2000)
        
        
    })
})()

