import { $document, $window } from '../utils/globals.js'
import AOS from 'aos';

function initScrollAnimation() {
	$(`[data-aos="fade-up"]`).attr( {
		"data-aos-anchor-placement" : "top-bottom",
	});

	AOS.init({
		once: false,
		duration: 1200,
	});
}

$document.ready(function() {
	initScrollAnimation();
	AOS.refresh();
});

$window.on('load', function(event) {
	AOS.refresh();
});

//data-aos="fade-up" data-aos-duration="1000"