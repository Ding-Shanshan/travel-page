(function(){
    var bannerNavUl=document.getElementById("banner-nav-ul");
    var bannerNav=document.getElementById("banner-nav");
    // 必须使用onmouseover而不能使用onmouseenter,因为onmouseenter是冒泡的，onmouseenter是不冒泡的
    bannerNavUl.onmouseover=function(e){
        if(e.target.tagName.toLowerCase()=='li')
        {
            var t=e.target.getAttribute('data-t');
            var liall=bannerNavUl.getElementsByTagName('li');
            for(var i=0;i<liall.length;i++)
            {
                liall[i].className=liall[i].getAttribute('data-t')
            }
            e.target.className=e.target.className+' current';
            // 找到匹配项
            var themenu=document.querySelector('.menu-box .menu[data-t='+t+']');
            // 找到所有的menu，先将所有的项的current类型去除
            var menuall=document.querySelectorAll('.menu-box .menu')
            for(var i=0;i<menuall.length;i++)
            {
                menuall[i].className='menu';
            }
            themenu.className='menu current';

        }

    }
    bannerNav.onmouseleave=function(){
        var menuall=document.querySelectorAll('.menu-box .menu');
        for(var i=0;i<menuall.length;i++)
            {
                menuall[i].className='menu';
            }
            var liall=bannerNavUl.getElementsByTagName('li');
            for(var i=0;i<liall.length;i++)
            {
                liall[i].className=liall[i].getAttribute('data-t')
            }

    }
})();