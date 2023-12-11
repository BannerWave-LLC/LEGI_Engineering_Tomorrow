import { $window, $body } from '../utils/globals.js'
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


$('.js-slider-videos').each(function(index, el) {
	if ($(this).length && !$(this).hasClass('slick-initialized')) {
		$(this).slick({
			mobileFirst: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			initialSlide: 1,
			dots: true,
			arrows: false,
			variableWidth: false,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 1023,
					settings: 'unslick'
				}
			],
		})
	}
});

$window.on('resize', function(event) {
	$('.js-slider-videos').each(function(index, el) {
		if ($(this).length && !$(this).hasClass('slick-initialized')) {
			$(this).slick({
				mobileFirst: true,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				initialSlide: 1,
				dots: true,
				arrows: false,
				variableWidth: false,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 1023,
						settings: 'unslick'
					}
				],
			})
		}
	});
});