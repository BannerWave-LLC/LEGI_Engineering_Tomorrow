import { $window, $body } from '../utils/globals.js'

var masonryOptions = {
	columnWidth: 1,
	itemSelector: '.js-masonry-item',
	horizontalOrder: true,
	percentPosition: true,
};

var tilesOptions = {
	columnWidth: 1,
	itemSelector: '.js-masonry-tile',
	horizontalOrder: true,
	percentPosition: true,	
}

$window.on('load resize', function () {
	$('.js-masonry').masonry(masonryOptions);
	$('.js-masonry-tiles').masonry(tilesOptions);

	if($window.width() < 768) {
		$('.js-masonry-tiles').masonry('destroy');
		$('.js-masonry-tiles').css('height', '');
	} else {
		$('.js-masonry-tiles').masonry(tilesOptions);
	}

	if ($window.width() < 1023) {
		$('.js-masonry').masonry('destroy');
		$('.js-masonry').css('height', '');
	} else {
		$('.js-masonry').masonry(masonryOptions);
	}
})