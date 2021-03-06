/**
 * Created by admin on 2017/7/10.
 */
//rem控制布局
var Rem  = {max: 750, min: 320, px: 100, bodyMax: 640,bodyMaxPx: 70};
$(window).on('resize', function () {
    var w = $(this).width(),
        bodyW = $('body').width();
    if (w < Rem.min) {
        w = Rem.min;
    } else if (w > Rem.max) {
        w = Rem.max;
    }
    if(bodyW==Rem.bodyMax){
        $('html').css('font-size',Rem.bodyMaxPx+ 'px');
    }else {
        $('html').css('font-size', Rem.px * w / Rem.max + 'px');
    }
}).trigger('resize');


function star() {
    //星星评分
    $('.star-score').each(function (i, e) {
        var $e = $(this).find('span');
        $e.css({"padding-left": parseFloat($e.html()) * 10 + "%"});
    });
}
$(document).ready(function(){
    +(function(){
        var speed = 200;
        $('.js-close').on('click',function(){
            $('.footer').fadeOut(speed);
        });

        function hidePop(){
            $('.pop').fadeOut(speed);
        }

        $('.wrap').on('click',function(){
            hidePop();
        });
        $('.js-nobtn').on('click',function(){
            hidePop();
        });

        $('.js-close2').on('click',function(){
            hidePop();
        });

        $('.js-parm').on('click',function(){
           $('.para-pop').fadeIn(speed);
        });

        $('.js-sel').on('click',function(){
            $('.buy-pop').fadeIn(speed);
        });
    })();
})
