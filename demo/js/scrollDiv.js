function initScrollDiv(){
	var $window_h=$(window).height(); //可视窗口高度
	var $pwd_Top=$window_h-200;
	$(".pwd-tips").css({top:+$pwd_Top+"px",right:"0"});
	$(".pwd-tips .close").click(function(){
		$(".pwd-tips").hide();
	})
	
	var div = document.getElementById("scroll-div");
	var y = parseInt($pwd_Top);
	setInterval(function(){
		var cy = parseInt(div.style.top);
		var dy = document.body.scrollTop || document.documentElement.scrollTop;
		div.style.top = (cy + (dy -(cy-y))*0.1) + "px";
	},10);
}