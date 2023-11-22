import { $document } from '../utils/globals.js'
import 'magnific-popup';

$('.js-popup-modal').magnificPopup({
	type: 'inline',
	preloader: false,
	modal: true,
	fixedContentPos: true,
	callbacks: {
		afterOpen: function() {
			$('.mfp-wrap').addClass('popup--open');

			$('.js-popup-modal').css('pointer-events', 'none');
		},
	}
});


$document.on('click', '.js-popup-close', function (e) {
	e.preventDefault();
	
	$('.mfp-bg').removeClass('mfp-ready');
	$('.mfp-wrap.mfp-ready').removeClass('mfp-ready');
		
	setTimeout(function() {
		$.magnificPopup.close();
	}, 650);

	setTimeout(function() {
		$('.js-popup-modal').css('pointer-events', '');
	}, 700);
});

$document.mouseup(function(e) {
	var container = $(".js-popup-inner, .js-popup-modal");

	if (!container.is(e.target) && container.has(e.target).length === 0) 
	{	
		$('.mfp-bg.mfp-ready').removeClass('mfp-ready');
		$('.mfp-wrap.mfp-ready').removeClass('mfp-ready');

		setTimeout(function() {
			$.magnificPopup.close();
		}, 650);

		setTimeout(function() {
			$('.js-popup-modal').css('pointer-events', '');
		}, 700);
	}
});