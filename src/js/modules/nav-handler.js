import { $window, $body } from '../utils/globals.js'

const $navBtn = $('.js-nav-btn');
const $header = $('.js-header');

function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}


$navBtn.on('click', function(event) {
	event.preventDefault();

	$header.toggleClass('is-open');
	$body.toggleClass('nav-open');
});

$('.group\\/menu > a').on('click', function(event) {
	console.log('this');
	if($window.outerWidth() < 1024) {
		event.preventDefault();

		$(this).parent().addClass('menu-open');
	}	
});

$('.js-close-menu a').on('click', function(event) {
	event.preventDefault();
	
	$(this).closest('.group\\/menu').removeClass('menu-open');
});