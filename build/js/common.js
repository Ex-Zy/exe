$(document).ready(function() {

	$('.js-main-slider').slick({
		dots: true,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.js-slider').slick({
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
	});

	$('.js-slider-brands').slick({
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 5,
		slidesToScroll: 1,
	});

});