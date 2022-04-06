// 轮播图特效
(function(){
    //得到元素
    var banner=document.getElementById("banner");
    var carousellist=document.getElementById('carousel_list');
    var leftbtn=document.getElementById('leftbtn');
    var rightbtn=document.getElementById('rightbtn');
    //克隆第一张li
    var cloneli=carousellist.firstElementChild.cloneNode(true);
    //孤儿节点上树
    carousellist.appendChild(cloneli);

    //小圆点序列id，获取所有小圆点li
    var circlesLis=document.getElementById('circles_lis');
    var Lis=circlesLis.getElementsByTagName('li');


    var x=0;
    // 为防止用户乱点，则需要设置节流（加锁）
    var lock=true;
    
    leftbtn.onclick=function(){
        if(!lock)return;
        
         lock=false;    //关锁  
         if(x==0)
        {
            x=5;
                carousellist.style.transition="none";
                carousellist.style.transform="translateX("+-16.66*x+"%)";
            // carousellist.style.transform="translateX("+-16.66*x+"%)";
             x--;
             setTimeout(function(){
                carousellist.style.transition='transform .5s ease';
                carousellist.style.transform="translateX("+-16.66*x+"%)";
             },0)
             setcircles()

            
        }else{
            x--;
            carousellist.style.transform="translateX("+-16.66*x+"%)";
            setcircles()
         }
         setTimeout(function(){
             lock=true;    //动画结束之后开锁
         },500);
    }
    rightbtn.onclick=function(){
        rightpic();
    }
    
    function rightpic(){
        if(!lock)return;
        
        lock=false;    //关锁  
        x++;
        if(x<5){
            carousellist.style.transform="translateX("+-16.66*x+"%)";
            setcircles()
        }
        if(x==5){
            carousellist.style.transform="translateX("+-16.66*x+"%)";
            setTimeout(function(){
                carousellist.style.transition='none';
                carousellist.style.transform='none';
                x=0;
            },500)
            setcircles()
        }
        carousellist.style.transition='transform .5s ease';
        setTimeout(function(){
            lock=true;    //动画结束之后开锁
        },500);
            
    }

    //小圆点随图片变化
    function setcircles(){
        for(var i=0;i<5;i++){
            Lis[i].className="none";
            if(i==x%5)
            {
                Lis[i].className="current";
            }

        }
    }

    //事件委托实现点击小圆点跳转到对应的图片
    circlesLis.onclick=function(e){
        if(!lock)return;
        
        lock=false;    //关锁  
        if(e.target.tagName.toLowerCase()=='li')
        {
            // alert(e.target.getAttribute('data-n'))
            x=e.target.getAttribute('data-n');
            carousellist.style.transform="translateX("+-16.66*x+"%)";
            setcircles();
        }
        setTimeout(function(){
            lock=true;    //动画结束之后开锁
        },500);
            
    }

    // 图片自动轮播

       var timer=setInterval(function(){
            rightpic();
        },2000)
    //鼠标触碰图片，轮播暂停
    banner.onmouseenter=function(){
        clearInterval(timer);
    }
    //鼠标离开，自动轮播开始
    banner.onmouseleave=function(){
        clearInterval(timer);   //为了防止频繁的移入移出，先关定时器
        timer=setInterval(function(){
            rightpic();
        },2000)
    }

    var gotop=document.getElementById("gotop");
    var toptimer;
    gotop.onclick=function(){
        clearInterval(toptimer);    //设表先关
        toptimer=setInterval(function(){
            document.documentElement.scrollTop-=100;    //设置距离顶部的距离变化
            if(document.documentElement.scrollTop<=0)
            {
                clearInterval(toptimer);     //小于零时清除定时器
            }
        },10)   //每十毫秒变化一次
    }

    //当页面处于顶部的时候，返回顶部隐藏
    window.onscroll=function(){
        var scrollY=window.scrollY||document.documentElement.scrollTop;
        if(scrollY<=0){
            gotop.style.display="none";
        }else{
            gotop.style.display="block";
        }
    }




})();