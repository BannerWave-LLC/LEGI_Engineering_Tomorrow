import { $document } from '../utils/globals.js'
import Isotope from 'isotope-layout';

var $grid = $('.js-isotope-grid').isotope({
	itemSelector: '.js-isotope-card',
	layoutMode: 'fitRows'
});

$('.js-isotope-btn').on('click', function(event) {
	const $this = $(this);
	var filterValue = $this.data('filter');

	$grid.isotope({ filter: filterValue });

	$this.addClass('is-checked');
	$this.parent().siblings('li').find('.js-isotope-btn').removeClass('is-checked');
});

