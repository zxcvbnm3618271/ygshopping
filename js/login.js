
$(function () {
   $(".tabs-nav").children().click(function () {
           $(this).children("a").addClass("tabulous_active");
           $(this).siblings("li").children("a").removeClass("tabulous_active");
       if($(this).index()==0){
           $("#tabs_container").css("height",252);

       }else{
           $("#tabs_container").css("height",289);
       }
       $("#tabs_container").children("div").eq($(this).index()).css("display","block")
       $("#tabs_container").children("div").eq($(this).index()).addClass("make_transist");
       $("#tabs_container").children("div").eq($(this).index()).addClass("showleft");
       $("#tabs_container").children("div").eq($(this).index()).removeClass("hideleft");
       $("#tabs_container").children("div").eq($(this).index()).siblings().removeClass("showleft");
       $("#tabs_container").children("div").eq($(this).index()).siblings().addClass("hideleft");
   })


    $(".code-div").find(".codeimg").hover(function () {
        $(".code-div").find(".code-pic").css({
            "top":"54px",
            "left":"230px",
            "display":"block"
        })
    })
    $(".mt15").find(".codeimg").hover(function () {
        $(".code-div").find(".code-pic").css({
            "top":"106px",
            "left":"230px",
            "display":"block"
        })
    })
    $(".code-pic").mouseout(function () {
        $(".code-div").find(".code-pic").css({

            "display":"none"
        })
    })
    $("#loginSubmit").click(function () {
        $.ajax({
            url:"http://localhost/ygshopping_fb/login.php",
            data:$("#loginForm").serialize(),
            type:"POST",
            dataType:"json",
            success:function (data) {

                alert(data.msg+data.username);

            }
        });
        return false;
    })

})