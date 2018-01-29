var searchDom = (function () {
    var init = function (iframeBody) {
            alert(5);

          //  delCode();
            //添加按钮
          //  $(".options").append("<button class='qa-btn' type='button'>答题</button>");

         //   baiduDom(iframeFliter(iframeBody, 0));
         //   sougouDom(iframeFliter(iframeBody, 1));
         //   bingDom(iframeFliter(iframeBody, 2));
        },
        dt = function(){

        },
        //百度
        baiduDom = function (baiduIframe) {
            //dom操作
            $(baiduIframe).find('.f13').remove();
            $(baiduIframe).find('.head_wrapper').remove();
            $(baiduIframe).find('.s_tab').remove();
            $(baiduIframe).find('img').remove();
            $(baiduIframe).find('em').css({'font-weight': 'bold','font-size':'20px'});
            $(baiduIframe).find('.c-img6').remove();
        },
        //搜狗
        sougouDom = function (sougouframe) {
            //dom操作
            $(sougouframe).find('img').remove();
            $(sougouframe).find('.header').remove();
            $(sougouframe).find('.img-box').remove();
            $(sougouframe).find('.fb').remove();
            $(sougouframe).find('em').css({'font-weight': 'bold ','font-size':'20px'});
            $(sougouframe).find('.str_div').remove();

        },
        //bing
        bingDom = function (bingframe) {
            //dom操作
            $(bingframe).find('img').remove();
            $(bingframe).find('em').css({'font-weight': 'bold '});
        },
        iframeFliter = function (iframeBody, i) {
            var Div = $(iframeBody).children('div')[i];
            console.log(Div);
            return $(Div).children('iframe')[0].contentWindow.document;
        },
        delCode = function(){
            $('.guanggao').remove();
        },
        btnFn = function(){

            $(".qa-btn").on("click",function(e){
                $.post('http://192.168.62.18/dt/auto/dt',{},function(){

                },'json');

            });

        };
    return {
        init: init
    }

})();
//var iframeBody = $(".searchFrame").children('iframe')[0].contentWindow.document.body;
//操作ifram,测试用
//searchDom.init(null);
