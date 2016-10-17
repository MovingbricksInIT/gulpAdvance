var $ = require('./components/zepto-modules/_custom');
// console.log($)
require('./components/zepto-modules/ajax');
module.exports = $;
var IScroll = require('./components/iscroll/iscroll(1).js');
 // console.log(IScroll)

$('#mainContent').hide();
$('.swiper-container').show();


$("#enter").tap(function(){
	$('#mainContent').show();
	$('.swiper-container').hide();


	$.post('/api/skill',{},function(response)
	{
		var html = "";
		for (var i = 0; i < response.length; i++) {
			html +="<li>" +response[i].category+"</li>"
		};
		$("#scroller ul").html(html);
		console.log(html)
		myScroll =new IScroll('#wrapper',{mouseWheel:true})
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})

	
});
// console.log($("#enter"))
var Swiper=require('./components/swiper/swiper.min.js');

var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');
// console.log(SwiperAnimate)
var mySwiper = new Swiper('.swiper-container', {
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})

// console.log(mySwiper)

// scroll的footer tab切换
$('.button').tap(function(){
	var app=$(this).attr('id');
	console.log(app);
	pageload(app);
	
})
//tab切换内容获取和循环赋值到ul中
function pageload(app){
	$.post('api/'+app,{},function(response){
		var html='';
		for(var i=0;i<response.length;i++){
			html+='<li>'+response[i].category+'</li>';
		};
		$('#scroller ul').html(html);
		myScroll=new IScroll('#wrapper',{mouseWheel:true})
		document.addEventListener('touchmove',function(e){e.preventDefault();},false)
	})
}
