//rem control
var Rem  = {max: 750, min: 320, px: 100, bodyMax: 640,bodyMaxPx: 70};
$(window).on('resize', function () {
    var w = $(this).width(),
        bodyW = $('body').width();
    if (w < Rem.min) {
        w = Rem.min;
    } else if (w > Rem.max) {
        w = Rem.max;
    }
    if(bodyW>=Rem.bodyMax){
        $('html').css('font-size',Rem.bodyMaxPx+ 'px');
    }else {
        $('html').css('font-size', Rem.px * w / Rem.max + 'px');
    }
}).trigger('resize');

// 全局变量
var Apis  = {
    success    : 1,         //返回成功标识
    timeCount  : 60        //倒计时
},
Regs  = {
    mobile      :   /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/,             //手机号
    integer     :   /^[0-9]*[1-9][0-9]*$/                                               //正整数
};
var myForm = '.myForm',
    sended = 'sended',
    fadeSpeed = 200;
var $tipShow = $('.tip-show'),
    $pop = $('#pop');

//json字符串处理
function parseData(d) {
    return typeof(d) == 'string' ? JSON.parse(d) : d;
}

//提示文字
function fadeTip(o) {
    var speed =2e3;
    o.tipBox.html(o.tipText).fadeIn(speed, function () {
        o.tipBox.fadeOut(speed, function () {

        });
    });
}

//验证码倒计时
function countTime($e,time) {
    $e.attr("disabled",true);
    var timer = setInterval(function () {
        time--;
        $e.html("" +time+ "s后重新发送");
        $e.addClass(sended);
        if (time < 0) {
            //倒计时完毕，可再次发送
            clearInterval(timer);
            timer = null;
            $e.html($e.data('html')).attr("disabled",false);  //恢复提示 可发送状态
            $e.removeClass(sended);
        }
    }, 1e3);
}

// 验证方法
+function () {
    // 控制手机号输入为正整数
    $(myForm).on("input","#phone",function (e) {
        var $e   = $(this),
            v = $e.val();
        if(!Regs.integer.test($.trim(v))){
            $e.val("");
            return false;
        }
    });
    //手机号验证
    $(myForm).on("click",'#subBtn',function (e) {
        e.preventDefault();
        var $e   = $(this),
            v1    = $('#phone').val(),
            v2    = $('#code').val();
        $.ajax({
            type      : 'post',
            url       : 'json/test.json',
            data      : { phone: v1,code: v2 },
            dataType  : 'json',
            beforeSend: function () {
                if($.trim(v1)==""){
                    fadeTip({tipBox:$tipShow ,tipText:"请输入手机号"});
                    return false;
                }else if(!Regs.mobile.test(v1)){
                    fadeTip({tipBox:$tipShow ,tipText:"请输入正确的手机号"});
                    return false;
                }
                if($.trim(v2)==""){
                    fadeTip({tipBox:$tipShow ,tipText:"请输入验证码"});
                    return false;
                }
            },
            success:function (data) {
                var d = parseData(data);
                if(d.ret==Apis.success){
                    $pop.fadeIn(fadeSpeed);
                }else{
                    console.log("失败了");
                }
            }
        })
    });
    //发送验证码处理
    $(myForm).on("click",'#getCode',function (e) {
        var $e   = $(this),
            v    = $('#phone').val();
        if($e.data('send')) {
            //send状态激活时才发送请求，正在倒计时状态不发送
            $.ajax({
                type      : 'get',
                url       : 'json/yzm.json',   //短信验证码接口
                data      : {phone: v},
                dataType : 'json',              //jsonp格式
                beforeSend:function () {
                    if (!Regs.mobile.test(v)){
                        fadeTip({tipBox:$tipShow,tipText:"请输入正确的手机号"});
                        return false;
                    }
                },
                success  :function (data) {
                    var d = parseData(data);
                    if(d.ret==Apis.success){
                        //发送成功，进入倒计时
                        countTime($e,Apis.timeCount);
                    }else{
                        console.log("失败了");
                    }
                }
            })
        }
    });

    // ok按钮
    $(".okBtn").on('click',function () {
       $pop.fadeOut(fadeSpeed);
    });

}();