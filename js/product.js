$(function () {
    $(".all-category").find(".title").hover(function () {
        $("#topCategoryMenu").css("display","block");
    })
    $(".all-category").siblings().hover(function () {
        $("#topCategoryMenu").css("display","none");
    })
   // $("#topCategoryMenu"),$(".all-category").mouseout(function () {
   //     $("#topCategoryMenu").css("display","none");
   // })
})