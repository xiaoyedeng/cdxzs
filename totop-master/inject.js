// 向页面注入JS
var Log_data;
//修改为自己的答题接口地址,参数post提交qid:questionId ,aid:option
var APIURL = 'http://192.168.62.18/dt/auto/task';
console.oldLog = console.log;
console.log = function(title,data) {
    console.oldLog(title,data);
    if(title == 'new_questions'){
        Log_data = data;
        $('.qa-btn').remove();
        setTimeout(function(){
            task();
        },6000);
    }
}

function task(){
    $('.active').append("<button class='qa-btn' type='button'>答题</button>");
    $('.qa-btn').on('click',function(){
        console.log($(this).parent().index());
        var aid = $(this).parent().index();
        var qid = Log_data.questionId;
        var _this = this;
        if(Log_data){
            $.post(APIURL,{qid:qid,aid:aid},function(data){
                if(data.code == 0){
                    $(_this).text('已答');
                }else{
                    $(_this).text('失败');
                }
            },'json')
        }
    });
}

