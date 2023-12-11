import { $window, $body } from '../utils/globals.js'

$('a[href*="#"]:not([href="#"]):not([class^="js-"])').each(function(event) {
	var $this = $(this);

	if (this.hash.length == 0) {
		return;
	}

	$(this).on('click', function(e) {
		var url = $(this).attr('href');
		url = cleanURL(url, this.hash);

		if (checkRedirect(url)) {
			e.preventDefault();
		};

		scrollByDataID( this.hash );
	});
});


$window.on('load', function(event) {
    scrollOnLoad();
});

function scrollByDataID( data ) {
	if (! data) {
		return false;
	};

	data = data.replace(/^#/, '');

	if ($( '*[data-id="' + data + '"]' ).length > 0 ) {
		$('body, html').animate({
		   scrollTop: $('*[data-id="' + data + '"]').offset().top - $('.js-header')?.outerHeight(true)
	   }, 600);
	};
}

function scrollOnLoad() {
	var winLocHash = window.location.hash;

	if ( winLocHash.length > 0 ) {
		setTimeout(function() {
			scrollByDataID( winLocHash );
		}, 500);
	}
}

function cleanURL( url, hash ) {
	if ( ! url ) {
		return false;
	};

	if (hash) {
		url = url.replace(hash,'');
	};

	return url;
}

function checkRedirect(href) {
	if (! href) {
		return;
	}

	var currentUrl  = window.location.href;
	var currentHash = window.location.hash;

	currentUrl = cleanURL( currentUrl, currentHash );

	href = href.replace(/(^\w+:|^)\/\//, '');
	currentUrl = currentUrl.replace(/(^\w+:|^)\/\//, '');

	if (href === currentUrl) {
		return true;
	}

	return false;
}