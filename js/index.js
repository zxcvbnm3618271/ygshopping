$(function () {
    $(".my-order").mouseover(function () {
        $(this).addClass("hover");
    })
    $(".my-order").mouseout(function () {
        $(this).removeClass("hover");
    })

    $(".my-favorite").mouseover(function () {
        $(this).addClass("hover");
    })
    $(".my-favorite").mouseout(function () {
        $(this).removeClass("hover");
    })

    $(".call-center").mouseover(function () {
        $(this).addClass("hover");
    })
    $(".call-center").mouseout(function () {
        $(this).removeClass("hover");
    })

    $(".head-search-tab").mouseover(function () {
        $(".head-search-tab").find(".secend").css("display", "block");
    })
    $(".head-search-tab").mouseout(function () {
        $(".head-search-tab").find(".secend").css("display", "none");
    })

    // $(".my-mall").children("dt").mouseover(function () {
    //     $(".my-mall").find("dd").css("display","block");
    // })
    // $(".my-mall").children("dt"),$(".my-mall").children("dd").mouseout(function () {
    //     $(".my-mall").find("dd").css("display","none");
    // })
    //
    // $(".my-cart").children("dt").mouseover(function () {
    //     $(".my-cart").find("dd").css("display","block");
    // })
    // $(".my-cart").children("dt"),$(".my-cart").children("dd").mouseout(function () {
    //     $(".my-cart").find("dd").css("display","none");
    // })
    $(".all-category .category .menu li").mouseover(function () {
        $(this).addClass("hover");
        $(this).children(".sub-class").css("display", "block");
    })
    $(".all-category .category .menu li").mouseout(function () {
        $(this).removeClass("hover");
        $(this).children(".sub-class").css("display", "none");
    })

    $("#keywordGoods").focus(function () {
        $("#search-tip").css("display", "block");
    })
    $("#keywordGoods").blur(function () {
        $("#search-tip").css("display", "none");
    })

    $(".nc-toolbar-tabs").children("div").mouseover(function () {
        $(this).addClass("z-nc-tbar-tab-hover");
    })
    $(".nc-toolbar-tabs").children("div").mouseout(function () {
        $(this).removeClass("z-nc-tbar-tab-hover");
    })
    $(".main").find("li").mouseover(function () {
        $(this).css("opacity", 1).siblings().css("opacity", 0.25);
    })
    $(".main").mouseout(function () {
        $(this).find("li").css("opacity", 1);
    })
    $("#floor_1").find(".mt").find(".tab-item").hover(function () {
        $(this).siblings().removeClass("tab-selected");
        $(this).addClass("tab-selected");
        $(".mc").find(".main").eq($(this).index()).removeClass("tab-hide");
        $(".mc").find(".main").eq($(this).index()).siblings(".main").addClass("tab-hide");
    })
    $("#floor_3").find(".mt").find(".tab-item").hover(function () {
        $(this).siblings().removeClass("tab-selected");
        $(this).addClass("tab-selected");
        $("#floor_3").find(".mc").find(".main").eq($(this).index()).removeClass("tab-hide");
        $("#floor_3").find(".mc").find(".main").eq($(this).index()).siblings(".main").addClass("tab-hide");
    })
    $("#floor_5").find(".mt").find(".tab-item").hover(function () {
        $(this).siblings().removeClass("tab-selected");
        $(this).addClass("tab-selected");
        $("#floor_5").find(".mc").find(".main").eq($(this).index()).removeClass("tab-hide");
        $("#floor_5").find(".mc").find(".main").eq($(this).index()).siblings(".main").addClass("tab-hide");
    })
    $("#floor_7").find(".mt").find(".tab-item").hover(function () {
        $(this).siblings().removeClass("tab-selected");
        $(this).addClass("tab-selected");
        $("#floor_7").find(".mc").find(".main").eq($(this).index()).removeClass("tab-hide");
        $("#floor_7").find(".mc").find(".main").eq($(this).index()).siblings(".main").addClass("tab-hide");
    })

    $("#floor_9").find(".mt").find(".tab-item").hover(function () {
        $(this).siblings().removeClass("tab-selected");
        $(this).addClass("tab-selected");
        $("#floor_9").find(".mc").find(".main").eq($(this).index()).removeClass("tab-hide");
        $("#floor_9").find(".mc").find(".main").eq($(this).index()).siblings(".main").addClass("tab-hide");
    })
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 845) {
            $(".side-navigation").addClass("show");
        } else {
            $(".side-navigation").removeClass("show");
        }
        console.log($(this).scrollTop());
    })
    $(".line-div").mouseover(function () {
        $(this).addClass("current");
    })
    $(".line-div").mouseout(function () {
        $(this).removeClass("current");
    })
    $(window).scroll(function () {

        if ($(this).scrollTop() > 845 && $(this).scrollTop() < 1275) {
            $(".side-ul").find("li").eq(0).children("div").addClass("current");
            $(".side-ul").find("li").eq(1).children("div").removeClass("current");
            $(".side-ul").find("li").eq(2).children("div").removeClass("current");
            $(".side-ul").find("li").eq(3).children("div").removeClass("current");
            $(".side-ul").find("li").eq(4).children("div").removeClass("current");
        }

        if ($(this).scrollTop() > 1275 && $(this).scrollTop() < 1890) {
            $(".side-ul").find("li").eq(1).children("div").addClass("current");
            $(".side-ul").find("li").eq(0).children("div").removeClass("current");
            $(".side-ul").find("li").eq(2).children("div").removeClass("current");
            $(".side-ul").find("li").eq(3).children("div").removeClass("current");
            $(".side-ul").find("li").eq(4).children("div").removeClass("current");
        }
        if ($(this).scrollTop() > 1890 && $(this).scrollTop() < 2490) {
            $(".side-ul").find("li").eq(2).children("div").addClass("current");
            $(".side-ul").find("li").eq(0).children("div").removeClass("current");
            $(".side-ul").find("li").eq(1).children("div").removeClass("current");
            $(".side-ul").find("li").eq(3).children("div").removeClass("current");
            $(".side-ul").find("li").eq(4).children("div").removeClass("current");
        }
        if ($(this).scrollTop() > 2490 && $(this).scrollTop() < 3090) {
            $(".side-ul").find("li").eq(3).children("div").addClass("current");
            $(".side-ul").find("li").eq(0).children("div").removeClass("current");
            $(".side-ul").find("li").eq(1).children("div").removeClass("current");
            $(".side-ul").find("li").eq(2).children("div").removeClass("current");
            $(".side-ul").find("li").eq(4).children("div").removeClass("current");
        }
        if ($(this).scrollTop() > 3090 && $(this).scrollTop() < 3690) {
            $(".side-ul").find("li").eq(4).children("div").addClass("current");
            $(".side-ul").find("li").eq(0).children("div").removeClass("current");
            $(".side-ul").find("li").eq(1).children("div").removeClass("current");
            $(".side-ul").find("li").eq(2).children("div").removeClass("current");
            $(".side-ul").find("li").eq(3).children("div").removeClass("current");
        }
    })
    $(".line-gotop").click(function () {
        $("body,html").animate({scrollTop: 0}, 800);
    })
    $("#tbarGoTop").click(function () {
        $("body,html").animate({scrollTop: 0}, 800);
    })

     $('.slider-main').bxSlider({
     mode:'horizontal', //默认的是水平
     displaySlides:1,//显示li的个数
     moveSlides: 1,//移动li的个数
         startSlide:0,
        auto: true,
         captions: true,
          infiniteLoop: true,
           autoHover: true,
           responsive:true,
          hideHoverControls: true,
         slideWidth:$(this).find("li").width
    });


})

function change_loginc() {


    $.ajax({
        url: "http://10.41.154.100/ygshopping_fb/server/isLogin.php",
        type: "POST",
        dataType: "json",
        success: function (res) {
            if(res.status == -1){
                alert("帐号未登录,请登录!!");
                $(".login_session").text("您好,请登录");
                // window.location = 'http://10.41.154.100/ygshopping_fb/login.html';
            }
            else{
                $(".login_session").text(res.username+"欢迎您!");
            }
            }
    })


}
function golist() {
    window.location.href="http://10.41.154.100/ygshopping_fb/list.html";
}