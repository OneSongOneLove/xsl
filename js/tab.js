//导航的tab切换 B
$(".bottom_bar ul li").on("click",function(){
    var index = $(this).index();
    $(".sidebar_content > div").eq(index).addClass("selected").siblings().removeClass("selected");
});
//导航的tab切换 E
