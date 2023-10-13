$(function(){

//스크롤 이벤트
$(window).scroll(function(){
	let scrVal = $(window).scrollTop();
	if(scrVal > 100){
		$(".header").addClass("on");
	}else{
		$(".header").removeClass("on");
	}
});

//Header Navi depth
$(".header nav .gnb > li > a").on("mouseenter",function(){
	let gnb_idx = $(this).parents("li").index();
	$(this).siblings(".depth2").stop().slideDown(400);
	$(this).parents("li").siblings().find(".depth2").stop().slideUp(400);
});

$(".header nav .gnb li").on("mouseleave",function(){
	$(this).find(".depth2").stop().slideUp(400);
});

//서브페이지 LNB
$(".lnb h2.mb").on("click",function(){
	$(this).toggleClass("on");
	$(this).siblings("ul").stop().slideToggle(400);
});

//quickBar
$(".quickBar").addClass("on");

//TOP버튼
$(".quickTop").on("click",function(){
	$("html, body").animate({
		scrollTop:0
	},500);
})

})