// JavaScript Document
/*banner*/
$(function(){
	var num = 0
	var timer = null
	var speed = 4000
/*	小脚标*/
	$('.banner ol li').mouseenter(function(e) {
		$(this).addClass('current').siblings().removeClass()
		var index = $(this).index()
		$('.banner ul li').eq(index).fadeIn().siblings().stop().fadeOut(800)
		num = index
	});
/*	自动*/
	function timeFn(){
		num++
		if(num>2){num=0}
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass()
		$('.banner ul li').eq(num).fadeIn().siblings().stop().fadeOut(800)
	}
	timer = setInterval(timeFn,speed)
	$('.banner').hover(function(e) {
		clearInterval(timer)
		$('.banner span').fadeIn()
	},function(){
		clearInterval(timer)
		timer = setInterval(timeFn,speed)
		$('.banner span').fadeOut()
	})
/*按钮*/
	 function leftBtn(){
		num--
		if(num<0){num=2}
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass()
		$('.banner ul li').eq(num).fadeIn().siblings().stop().fadeOut(800)
	}
	$('.banner .right').click(timeFn)    //右按钮跟自动播方法一样
	$('.banner .left').click(leftBtn)
})

$(function(){
	$('.pic li').hover(function(e) {
		$(this).fadeTo(0,1).siblings().fadeTo(0,0.8)
	});
})