$(function(){

//sloganBox
$(".sloganBox .slideUl").slick({
	autoplay: false,
	autoplaySpeed: 5000,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	speed: 1000,
	arrows: false,
	appendDots: $('.sloganBox .cateBox'),
	dots: true,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		}	
	]
});


})