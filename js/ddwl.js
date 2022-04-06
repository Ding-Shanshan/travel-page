(function(){
    var ddwlul=document.getElementById("ddwlul");
    var lis=ddwlul.getElementsByTagName('li');
    ddwlul.onclick=function(e){
        for(var i=0;i<lis.length;i++)
        {
            lis[i].className=''
        }
        if(e.target.tagName.toLowerCase()=='li')
        {
            e.target.className="current";
        }

    }

})();