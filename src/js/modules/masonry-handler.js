import { $window, $body } from '../utils/globals.js';
import AOS from 'aos';

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
    var $masonryContainer = $('.js-masonry');
    $masonryContainer.masonry(masonryOptions);

    $masonryContainer.on('layoutComplete', function (event, laidOutItems) {
        AOS.refresh();
    });

    var $tilesContainer = $('.js-masonry-tiles');
    $tilesContainer.masonry(tilesOptions);

    $tilesContainer.on('layoutComplete', function (event, laidOutItems) {
        AOS.refresh();
    });

    if ($window.width() < 768) {
        $tilesContainer.masonry('destroy');
        $tilesContainer.css('height', '');
    } else {
        $tilesContainer.masonry(tilesOptions);
    }

    if ($window.width() < 1024) {
        $masonryContainer.masonry('destroy');
        $masonryContainer.css('height', '');
    } else {
        $masonryContainer.masonry(masonryOptions);
    }
});
