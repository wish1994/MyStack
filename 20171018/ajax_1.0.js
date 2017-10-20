(function(){
    ajax=window.ajax={};
    function translate(obj){
        var str="";
        for(i in obj){
            str+=i+"="+encodeURIComponent(obj[i])+"&";
        }
        str=str.substr(0,str.length-1);
        return str;
    }
    ajax.get=function(obj){
        if(obj.async==undefined){
            obj.async=true;
        }
        if(obj.data==undefined){
            obj.data="";
        }
        var xhr=new XMLHttpRequest();
        var url=obj.url;
        obj.data=translate(obj.data);
        url+="?"+obj.data;
        xhr.open("GET",url,obj.async);
        xhr.send();
        if(obj.async==true){
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        var str=xhr.responseText;
                        obj.sucess&&obj.sucess(str);

                    }else{
                        obj.fail&&obj.fail();
                    }
                }

            }
        }else{
            if(xhr.status==200){
                var str=xhr.responseText;
                obj.sucess&&obj.sucess(str);

            }else{
                obj.fail&&obj.fail();
            }
        }
    }

    ajax.post=function(obj){
        if(obj.async==undefined){
            obj.async=true;
        }
        if(obj.data==undefined){
            obj.data="";
        }
        var xhr=new XMLHttpRequest();
        var url=obj.url;
        xhr.open("POST",url,obj.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        obj.data=translate(obj.data);        
        xhr.send(obj.data);
        if(obj.async==true){
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        var str=xhr.responseText;
                        obj.sucess&&obj.sucess(str);

                    }else{
                        obj.fail&&obj.fail();
                    }
                }

            }
        }else{
            if(xhr.status==200){
                var str=xhr.responseText;
                obj.sucess&&obj.sucess(str);

            }else{
                obj.fail&&obj.fail();
            }
        }


    }

})()