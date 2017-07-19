// JavaScript Document
$(function(){
	//主体02
	$('.mail02_l li img').hover(function(){
		$(this).stop().fadeTo(0,0.85)
	},function(){	
		$('.mail02_l li img').stop().fadeTo(0,1)	
	})
	
	$('.mail02_l li>span').hover(function(){
		$(this).addClass('hfree')
	},function(){
		$('.mail02_l li>span').removeClass('hfree')
	})

	//主体03图片
	$('.backdrop').fadeTo(0,0.8)
	$('.mail03 ul li').hover(function(e) {
		$(this).siblings().stop().fadeTo(0,0.85)
		$(this).children('p,div').stop().animate({ bottom: 0 },300)	
	},function(){
		$('.mail03 ul li').stop().fadeTo(0,1)
		$('.mail03 ul li').children('p,div').stop().animate({ bottom:-30 },300)
	});


//banner轮播
	$('.mail01_l ul').append($('.mail01_l ul li:first').clone(true))
	var num = 0
	var loopNum = 0
	var timer = null
	var speed = 5000
	$('.mail01_l ol li').hover(function(e) {
		num = $(this).index()
		loopNum = $(this).index()
		$(this).addClass('current').siblings().removeClass()
		$('.mail01_l ul').stop().animate({ left:loopNum*-695 },500)
	});
	function timeFn(){
		num++
		if( num>3 ){ 
			num=0
		 }
		$('.mail01_l ol li').eq(num).addClass('current').siblings().removeClass()
		loopNum ++
		if( loopNum >4 ){ 
			loopNum=1
			$('.mail01_l ul').css( 'left','0' )
		}
		$('.mail01_l ul').stop().animate({ left:loopNum*-695 },500)
	}
	timer = setInterval( timeFn ,speed )
	$('.mail01_l').hover(function(){
		clearInterval(timer)
	},function(){
		clearInterval(timer)
		timer = setInterval( timeFn ,speed )
	})
})