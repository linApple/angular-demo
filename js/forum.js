/*首页 本周之星 切换*/
var Forum_Switch_Number = 1;
var FORUM_SWITCH_NUM;
var Forum_Switch_Timer;
var FORUM_SWITCH_TIME = 8000;
function forum_switch(){
	if(Forum_Switch_Number <= FORUM_SWITCH_NUM -1) {
		Forum_Switch_Number += 1;
	} else {
		Forum_Switch_Number = 1;
	}
	$('.switch-wrapper .switch-control-btn .current').removeClass('current');
	$('.switch-wrapper .switch-control-btn a[href="#switch_content_' + Forum_Switch_Number + '"]').addClass('current');
	$('.switch-wrapper .switch-content-box .current').removeClass('current');
	$('#switch_content_' + Forum_Switch_Number).addClass('current');
	Forum_Switch_Timer = setTimeout(forum_switch, FORUM_SWITCH_TIME);
}
function forum_switch_init(){
	FORUM_SWITCH_NUM = $('.switch-wrapper .switch-content-box .switch-content').length;
}
$(function(){
	forum_switch_init();
	Forum_Switch_Timer = setTimeout(forum_switch, FORUM_SWITCH_TIME);
	$('.switch-wrapper .switch-control-btn a').click(function(e){
		e.preventDefault();
		clearTimeout(Forum_Switch_Timer);
		$('.switch-wrapper .switch-control-btn .current').removeClass('current');
		$(this).addClass('current');
		$('.switch-wrapper .switch-content-box .current').removeClass('current');
		$($(this).attr('href')).addClass('current');
		Forum_Switch_Number = parseInt($(this).attr('href').match(/\d+/g)[0]);
		Forum_Switch_Timer = setTimeout(forum_switch, FORUM_SWITCH_TIME);
	});
});

/*发表 回复 附件相关*/
function attach_init(){
	$('#attachment_file_wrapper .attach').hide();
	$('#attachment_file_wrapper #attach1').show();
}
function resetFileInput(file){
	/*
	 *compatible to clear ie's file input
	*/
	file.after(file.clone().val(""));
	file.remove();
}
$(function(){
	attach_init();
	/*
	 *fix problems result from when click del in middle
	 *fix method:
	 *	when click del, put del item as last item in '#attachment_file_wrapper attachment-bd' and clear input data
	 *	when click add, show the last item and put the hidden last
	 *	by this way, no need flag variables
	 *
	 *附件数量限制通过html控制
	*/
	$('#attachment_file_wrapper .add-attach').click(function(e){
		e.preventDefault();
		$('#attachment_file_wrapper .attach:last').show();
		$('#attachment_file_wrapper .attach:hidden').appendTo('#attachment_file_wrapper .attachment-bd');
	});
	$('#attachment_file_wrapper .attach-del').click(function(e){
		e.preventDefault();
		$($(this).attr('href')).hide(function(){
			$(this).appendTo('#attachment_file_wrapper .attachment-bd');
			$(this).find('input').val('');
			resetFileInput($(this).find('input[type=file]'));
		});
	});
});

