$.validator.setDefaults({
    submitHandler: function() {
        $.post("http://10.41.154.100/ygshopping_fb/server/register.php",$("#registerForm").serialize(),function(){

        })

        return false;//阻止form表单的默认提交行为
    }
});
$().ready(function() {
    $.validator.addMethod("isEmail",function(val){
         return /\w+@\w+\.\w+/.test(val);
    },"*邮箱不合法");

    $("#registerForm").validate(
        {
            rules:{
                memberName:{
                    required:true,
                    minlength:6,
                    maxlength:20,
                    remote:{
                        url:"http://10.41.154.100/ygshopping_fb/server/checkUser.php",
                        type:"post"
                    }
                },
                memberPwd:{
                    required:true,
                    minlength:6,
                    maxlength:20
                },
                repeatMemberPwd:{
                    required:true,
                    minlength:6,
                    maxlength:20,
                    equalTo:"#memberPwd"
                },
                email:{
                    isEmail:true
                }


            },
            messages:{
                memberName:{
                    required:"*这个是必选项",
                    minlength:"*不能低于6字符",
                    maxlength:"*不能高于20字符",
                    remote:"*账号已存在"
                },
                memberPwd:{
                    required:"*这个是必选项",
                    minlength:"*不能低于6字符",
                    maxlength:"*不能高于20字符"
                },
                repeatMemberPwd:{
                    required:"*这个是必选项",
                    minlength:"*不能低于6字符",
                    maxlength:"*不能高于20字符",
                    equalTo:"*两次密码不一致"
                }
            },

        }
    );
    $(".code-div").find(".codeimg").hover(function () {
        $(".code-div").find(".code-pic").css({
            "top":"104px",
            "left":"380px",
            "display":"block"
        })
    })
    $(".mt15").find(".codeimg").hover(function () {
        $(".mt15").find(".code-pic").css({
            "top":"262px",
            "left":"380px",
            "display":"block"
        })

    })
    $(".code-pic").mouseout(function () {
        $(".code-div").find(".code-pic").css({

            "display":"none"
        })
    })
    $(".tabs-nav").children("li").hover(function () {
        $(this).find("a").addClass("tabulous_active");
        $(this).siblings("li").find("a").removeClass("tabulous_active");
        if($(this).index()==0)
        {
            $("#commonModule").css("display","block");
            $("#mobileModule").css("display","none");
        }else{
            $("#mobileModule").css("display","block");
            $("#commonModule").css("display","none");
        }
    })

    $("#registerSubmit").click(function () {
        $.ajax({
            url:"http://10.41.154.100/ygshopping_fb/server/register.php",
            data:$("#registerForm").serialize(),
            type:"POST",
            dataType:"json",
            success:function (data) {
                alert(data.msg);
            },
            error:function(jqXHR,textStatus,errorThrown){
               console.log(jqXHR);
              console.log(textStatus);
            console.log(errorThrown);
            }
        })
    })
});


