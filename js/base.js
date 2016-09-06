//轮播图
var imgWidth = $(".screen").width();
var index = 0;
var timer = null;
var flag = true;

// 自动轮播
function autoGo(boolean){
    clearInterval(timer);
    if(boolean){
        timer = setInterval(go,3000);
    }
}
autoGo(flag);
function go(){
    index++;
    selectPic(index);
}
var $ul = $(".screen > ul");
$ul.find("li").eq(0).clone(true).appendTo($ul);
function selectPic(num){
    $ul.animate({
        left: -num * imgWidth,
    }, 1000, function () {
        //检查是否到最后一张
        if (index == $ul.children().length - 1) {
            $ul.css("left", "0px");
            index = 0;
        }
    })
}
console.log($ul.children());


// 下拉子菜单
$(".top_nav_ks").on("mouseenter",function(){
    $(".nav_kszx").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_kszx").css({"display":"none"});
});
$(".nav_kszx").on("mouseenter",function(){
    $(".nav_kszx").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_kszx").css({"display":"none"});
});


$(".top_nav_xz").on("mouseenter",function(){
    $(".nav_xzzx").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_xzzx").css({"display":"none"});
});
$(".nav_xzzx").on("mouseenter",function(){
    $(".nav_xzzx").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_xzzx").css({"display":"none"});
});


$(".top_nav_fw").on("mouseenter",function(){
    $(".nav_cpfw").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_cpfw").css({"display":"none"});
});
$(".nav_cpfw").on("mouseenter",function(){
    $(".nav_cpfw").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_cpfw").css({"display":"none"});
});


$(".top_nav_gm").on("mouseenter",function(){
    $(".nav_gmcp").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_gmcp").css({"display":"none"});
});
$(".nav_gmcp").on("mouseenter",function(){
    $(".nav_gmcp").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_gmcp").css({"display":"none"});
});


$(".top_nav_gy").on("mouseenter",function(){
    $(".nav_gywm").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_gywm").css({"display":"none"});
});
$(".nav_gywm").on("mouseenter",function(){
    $(".nav_gywm").css({"display":"block"});
}).on("mouseleave",function(){
    $(".nav_gywm").css({"display":"none"});
});

//$(".zzc").addClass('animated fadeInDown');

//二维码显示隐藏 B
$(".show").on("mouseenter",function(){
    $(".hide").addClass("showewm animated bounceInLeft").removeClass("hideewm bounceOutUp");
})
$(".show").on("mouseleave",function(){
    $(".hide").addClass("animated bounceOutUp").removeClass("showewm");
})
//$('.hide').addClass('animated bounceInLeft');
//二维码显示隐藏 E
