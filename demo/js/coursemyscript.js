//前台页面
$(function(){
//最新公告向下（向上）滑动
  $('.xfooter-page .slider a').hover(function(){
    $(this).addClass('current').siblings("a").removeClass('current');
    $(this).parents('.xfooter-page').find('.tab-list:eq('+$(this).index()+')').show().siblings('.tab-list').hide();
  });
  $(".help-t .list li").each(function(){
    $("li a").click(function(){
        $(this).addClass("arrt");
        $(this).parents("li").siblings().children("a").removeClass("arrt");
        $(this).siblings(".sldown-box").slideDown(1000,function(){
         });
    });
    $("li .sldown-btn").click(function(){
       $(this).parents(".sldown-box").siblings("a").removeClass("arrt");
        $(this).parents(".sldown-box").slideUp(1000,function(){
         });
    });
  });
  //课程中心课程分类效果
     $(".search-list .kcfl .on").click(function(){
        $(this).parents(".kcfl").siblings(".seondfl").show();
     });
     $("#tips-list .on").click(function(){
       $(this).parents("#tips-list").siblings(".seondfl").show();
    });
	//input获取焦点
      // $('#container').delegate("input[type=text]","focus",function() { 
      //      $(this).css("color","#333");
      // }); 
      $('input[type=text]').bind({ 
        focus:function(){ 
          if (this.value == this.defaultValue){ 
             this.value=""; 
             $(this).css("color","#333");
          } 
        },blur:function(){ 
          if (this.value == ""){ 
            this.value = this.defaultValue; 
            $(this).css("color","#999");
          } 
        } 
      }); 
    //首页热门课程
	  $(".tab-list li").hover(function(){
	       $(this).find(".work-fc").show();
	  },function(){
	        $(this).find(".work-fc").hide();
	  });
  $(".index-grid .xtab-tip span").mouseover(function(){
    $(this).addClass("current").siblings("span").removeClass("current");
    $(this).parents(".index-grid").children(".tab-list").hide();
    $(this).parents(".index-grid").children(".tab-list:eq("+$(this).index()+")").show();
  });

	//首页地区排名、教师之星、学子之星tab切换
	$(".tab-all .tab-tip span").mouseover(function(){
		$(this).addClass("current").siblings("span").removeClass("current");
		$(this).parents(".tab-all").children(".tab-box,.slider-star").hide();
		$(this).parents(".tab-all").children(".tab-box:eq("+$(this).index()+"),.slider-star:eq("+$(this).index()+")").show();
	});

   //侧导航
	 $("#gotop").hover(function(){
     $(this).children(".yy-icon").fadeIn();
    },function(){
     $(this).children(".yy-icon").fadeOut();
    });

    //登录注册切换
    $(".kccenter-signinde .login a").click(function(){
		$(this).addClass("currt").siblings("a").removeClass("currt");
		$(this).parents(".t-center").children('.inner:eq('+$(this).index()+')').show().siblings('.inner').hide();
	});
    //弹层关闭
    $("#popupConfirmWin .div-close").click(function(){
        $(this).parents(".kccenter-sign-up").hide();
        $("#_______overlayer").hide();
    });

    //tab切换
     $(".tab-list li").click(function(){
		  // $(this).addClass("current").siblings("li").removeClass("current");
		  $(this).parents(".xkc-right-all").children('.inner:eq('+$(this).index()+')').show().siblings('.inner').hide();
	    $(this).parents(".xkccenter-warp").children(".xkccenter-content").children('.inner:eq('+$(this).index()+')').show().siblings('.inner').hide();
	  });
//注册页面老师学生切换
  $('.role a').click(function(){
    var index = $(this).index();
    $(this).addClass('tab-current').siblings('a').removeClass('tab-current');
    $(".xregister-form").eq(index).show().addClass('active').siblings().removeClass('active').hide();
  });

  $("#x-login").click(function(){
    $('.mask').show();
    $("#plogin").show();
  });
  $("#plogin .div-close").click(function(){
     $('.mask').hide();
    $("#plogin").hide();
  });
 
//返回顶部
  var $body = $(document.body);
  var $bottomTools = $('#cbbfixed');
    $(window).scroll(function () {
      var scrollHeight = $(document).height();
      var scrollTop = $(window).scrollTop();
      var $footerHeight = $('#footer').outerHeight(true);
      var $windowHeight = $(window).innerHeight();
      scrollTop > 50 ? $("#cbbfixed").show().css("display","block") : $("#cbbfixed").hide();     
      $bottomTools.css("bottom", scrollHeight - scrollTop - $footerHeight > $windowHeight ? 10 : $windowHeight + scrollTop + $footerHeight + 10 - scrollHeight);
    });
	
});


  