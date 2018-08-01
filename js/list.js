$(function(){
    $('#goodsBrowseList').bxSlider({
        mode:'horizontal', //默认的是水平
        displaySlides:5,//显示li的个数
         moveSlides: 1,//移动li的个数
        slideWidth:1200,
        minSlides:20,
        maxSlides:20,
    //     captions: true,//自动控制
    //     auto: false,
        controls: true,//隐藏左右按钮
         infiniteLoop: true
    });
});