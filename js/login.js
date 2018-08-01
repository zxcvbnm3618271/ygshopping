$.validator.setDefaults({
    submitHandler: function() {
        alert("提交事件!");
    }
});
$(function () {


    $("#loginForm").validate(
        {
            rules:{
                loginName:{
                    required:true,
                    minlength:6,
                    maxlength:20
                },
                memberPwd:{
                    required:true,
                    minlength:6,
                    maxlength:20
                }

            },
            messages:{
                loginName:{
                    required:"这个是必选项",
                    minlength:"不能低于6字符",
                    maxlength:"不能高于20字符"
                },
                memberPwd:{
                    required:"这个是必选项",
                    minlength:"不能低于6字符",
                    maxlength:"不能高于20字符"
                }

            },

        }
    );

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
            url:"http://10.41.154.100/ygshopping_fb/server/login.php",
            data:$("#loginForm").serialize(),
            type:"POST",
            dataType:"json",
            xhrFields:{
                withCredentials:true
            },
            success:function (data) {
                $.session.set('uaername',data.username);
                $.session.set('admin',data.admin);
                alert(data.msg);
                if(data.status==1)
                {
                    window.location='http://10.41.154.100/ygshopping_fb/index.html';
                }



            }
        });
        return false;
    })

})
