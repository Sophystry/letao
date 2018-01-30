window.addEventListener('load', function () {
    //创建对象
    var letaoindex=new letaoIndex;
    //轮播图
    letaoindex.sliderInit();
    //页面滚动
    letaoindex.scroll();
})
var letaoIndex = function () {

}
letaoIndex.prototype = {
    //轮播图
    sliderInit: function () {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    },
    //页面滚动初始化
    scroll:function(){
        mui('.mui-scroll-wrapper').scroll({
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
        });
    }

}