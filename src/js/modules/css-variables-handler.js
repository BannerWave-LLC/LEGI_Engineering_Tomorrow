import { $window, $body } from '../utils/globals.js'
var $html = $('html');

var dvh = window.innerHeight * 0.01;
var currentDvh = window.innerHeight * 0.01;
var dvw = $body.innerWidth();

document.documentElement.style.setProperty('--dvh', `${dvh}px`);
document.documentElement.style.setProperty('--current-dvh', `${currentDvh}px`);
document.documentElement.style.setProperty('--dvw', `${dvw}px`);

$window.on('resize', function(event) {
	currentDvh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--current-dvh', `${currentDvh}px`);

	if($body.innerWidth() != dvw) {
		var dvh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--dvh', `${dvh}px`);
		dvw = $body.innerWidth();
		document.documentElement.style.setProperty('--dvw', `${dvw}px`);

		$body.removeClass('nav-open');
		$('.js-header').removeClass('is-open');
		$('.js-header nav').css('height', ``);
		$('.menu-open').removeClass('menu-open');
	}
});


//Header position
document.documentElement.style.setProperty('--header-current-position', $('.js-header').outerHeight() + $('.js-header').position().top + 'px');
	
$window.on('resize', function(event) {
	document.documentElement.style.setProperty('--header-current-position', $('.js-header').outerHeight() + $('.js-header').position().top + 'px');
});

//Calc header- height
$html.css('--header-current-height', Math.ceil($('.js-header').outerHeight(true)) + 'px');

$window.on('resize', function(event) {
	$html.css('--header-current-height', Math.ceil($('.js-header').outerHeight(true)) + 'px');
});

//Masonry tiles text height

// $('.js-masonry-tiles > *').each(function(index, el) {
// 	var textHeight = $(el).find('h5').next().height();

// 	$(el).css('--text-height', textHeight + 'px');
// });

$window.on('load resize', function(event) {
	$('.js-masonry-tiles > *').each(function(index, el) {
		var textHeight = $(el).find('h5 + div > div').outerHeight();

		$(el).css('--text-height', textHeight + 'px');
	}); 
});
