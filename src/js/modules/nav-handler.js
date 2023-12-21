import { $window, $body } from '../utils/globals.js'

const $navBtn = $('.js-nav-btn');
const $header = $('.js-header');

function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}


$navBtn.on('click', function(event) {
	event.preventDefault();

	$header.toggleClass('is-open');
	
	$('.js-header nav').css('height', `${$('.js-header nav').outerHeight(true)}px`);

	$body.toggleClass('nav-open');
});

$('.group\\/menu > a').on('click', function(event) {
	if($window.outerWidth() < 1024) {
		event.preventDefault();

		$(this).parent().addClass('menu-open');

		$header.addClass('submenu-open');

		let elementsHeight = 0;

		$(this).next().find('> *').each(function() {
			elementsHeight += $(this).outerHeight(true);
		});

		const headerHeight = elementsHeight + (parseFloat($(this).next().css('padding-top')) + parseFloat($(this).next().css('padding-bottom')));

		$('.js-header nav').css('height', `${headerHeight}px`);
	}	
});

$('.js-close-menu a').on('click', function(event) {
	event.preventDefault();
	
	$(this).closest('.group\\/menu').removeClass('menu-open');
	$header.removeClass('submenu-open');

	$('.js-header nav').css('height', ``);
	$('.js-header nav').css('height', `${$('.js-header nav').outerHeight(true)}px`);
});
