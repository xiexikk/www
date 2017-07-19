// JavaScript Document
$(function(){
	/*分类导航*/
	$('.classify').hover(function(){
		$(this).find('ul').stop().slideToggle(500)
	})
	
	//导航
	var myT = $('.nav_wrap').offset().top;
	$(window).scroll(function(e) {
		var sTop = $(window).scrollTop()
		if( sTop > myT ){
		$('.nav_wrap').css({'position':'fixed',top:0})
		}else{
		$('.nav_wrap').css({'position':'static'})
		}
	});
	
	/*小火箭返回顶部*/
	$(window).scroll(function(e) {
		var win_h = $(window).height()/3
		var win_s = $(window).scrollTop()
		if( win_h<win_s ){
			$('.rocket').fadeIn(500)
		}else{
			$('.rocket').fadeOut(500)
		}
	});
	$('.rocket').click(function(e) {
		$('html,body').animate({ scrollTop:0 },500)
	});
	
	/*在线客服*/
	var bl = true
	$('.serivce .btn').click(function(e) {
		if( bl==true ){
			$(this).children('img').attr('src','imges/serivce-open.jpg')
			$(this).parent().animate({ right:0 },500)
			bl = !true
		}else{
			$(this).children('img').attr('src','imges/serivce-close.jpg')
			$(this).parent().animate({ right:-130 },500)
			bl = true	
		}
	});
	
	/*搜索框*/
	$('.search .mearchant').focus(function(e) {
		var values = $(this).val()
		if(values=='请输入你要找的商家名称'){
			$(this).val('')
		}
		}).blur(function(){
			var values = $(this).val()
			if(values==''){
				$(this).val('请输入你要找的商家名称')
			}
		})
	$('.search .button').click(function(e) {
		var myval = $('.search .mearchant').val()
		if(myval ==''|| myval=='请输入你要找的商家名称'){
			alert('您好！请输入您要搜索的内容，谢谢!')
		}else{
			//alert('您当前搜索的内容是：'+myval)
		}
	});
})