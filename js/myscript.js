//头部图片轮播
var t = n = 0, count;                    //t用于获取setInterval,n用于获取当前图片的索引值,count用于获取轮播图片的数目

$(function(){
	
	count=$("#slide_list img").length;             //获取轮播图片的数目
	$("#slide_list img:not(:first-child)").hide();                //将除第一张图片以外的其它图片隐藏
	$("#slide li").click(function(index){               //当单击某一number的时候
		var i=$(this).index();                    //获取其索引
		n=i;     
        if(i>=count) return;
		$("#slide_list img").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);          //将当前图片隐藏且单击图片显示
		$(this).addClass("on");                       
		$(this).siblings().removeClass("on");
	})
	t=setInterval("showAuto()",4000);
	$("#slide").hover(function(){                        //hover(enter,leave)
		clearInterval(t);						   
	},function(){
		t=setInterval("showAuto()",4000);
	});
	
});

function showAuto(){
    n = n >= (count-1) ? 0 : ++n;
    $("#slide li").eq(n).trigger("click");
}