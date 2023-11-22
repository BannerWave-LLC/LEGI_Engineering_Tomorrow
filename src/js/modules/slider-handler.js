import 'slick-carousel';


$('.js-slider-images').each(function (index, el) {
	const $slider = $(this);

	const $slides = $slider.find('.js-slider-slides');

	$slides.slick({
		infinite: true,
		fade: true,
		cssEase: 'linear',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: false,
		prevArrow: $slider.find('.js-slider-prev'),
		nextArrow: $slider.find('.js-slider-next'),
	});

})
