//rem控制布局
var Rem  = {max: 750, min: 320, px: 100, bodyMax: 640,bodyMaxPx: 60};
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

//星星控制
function star() {
    $('.star-score').each(function (i, e) {
        var $e = $(this).find('span');
        $e.css({"padding-left": parseFloat($e.html()) * 10 + "%"});
    });
}

$(document).ready(function(){
    +(function(){
        var speed = 200;
        // 关闭弹窗
        function hidePop(){
            $('.pop').fadeOut(speed);
            $('html,body').removeClass('of');
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

        //关闭最底部显示下载APP
        $('.js-close').on('click',function(){
            $('.footer').fadeOut(speed);
            $('.handle .in').css('bottom',0);
        });

        //商品参数
        $('.js-parm').on('click',function(){
            $('html,body').addClass('of');
            $('.para-pop').fadeIn();
        });

        //选择
        $('.js-sel').on('click',function(){
            $('.buy-pop').fadeIn(speed);
        });
        $('.list-size li,.list-color li').on('click',function () {
           $(this).addClass('cur').siblings().removeClass('cur');
        });

        // 控制输入框
        var Regs  = {
            integer     :   /^[0-9]*[1-9][0-9]*$/,    //正整数
        };
        $(document).on("input",".js-num",function (e) {
            var $e   = $(this),
                v = $e.val();
            if(!Regs.integer.test($.trim(v))){
                $e.val("");
                return false;
            }
        });

        //购买数量
        var num = 0,
            maxNum = 1000;
        function redAdd(red,add){
            $(red).on('click',function(){
                num = $('.js-inp').val();
                num--;
                if(num <= 1){
                    num = 1;
                }
                $('.js-inp').val(num);
            });
            $(add).on('click',function(){
                num = $('.js-inp').val();
                num++;
                if(num > maxNum){
                    num = maxNum;
                }
                $('.js-inp').val(num);
            });
        }
        redAdd('.js-reduce','.js-add');

    })();
})
