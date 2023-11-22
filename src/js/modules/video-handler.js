import { $window, $body } from '../utils/globals.js'


function initVideos() {
	const players = Array.from(document.querySelectorAll(".js-media-video"))

	players.map(function (p) {
		const isAutoplay = Boolean($(p).closest('.js-media-wrapper').data('autoplay'));

		const player = new Plyr(p, {
			volume: 0,
			autoplay: isAutoplay,
			autopause: false,
			controls: isAutoplay ? [''] : ['play','progress', 'current-time', 'mute', 'volume', 'fullscreen'],
			clickToPlay: false,
			hideControls: isAutoplay,
			muted: true,
			loop: {
				active: isAutoplay,
			},
			vimeo: {
				background: true,
			}
		});

		if(isAutoplay === false) {
			$(player.elements.container).closest('.js-media').find('.plyr__poster, .js-media-play').on('click', function(event) {
				event.preventDefault();
				player.togglePlay();
			});

			player.on('ended', (event) => {
				player.stop();
			})
		}

		player.on('play', (event) => {
			$(player.elements.container).parent().addClass('is-played');
			$(player.elements.container).closest('.js-media').addClass('is-played');
		});

		player.on('pause', (event) => {
			$(player.elements.container).parent().removeClass('is-played');
			$(player.elements.container).closest('.js-media').removeClass('is-played');
		});

		let playercontainer = p.parentNode;

		if (!p.parentNode) {
			//FOR: Reinit after ajax
			playercontainer = p;
		}

		const config = {
			rootMargin: '0px -100px',
			threshold: 0
		}

		const callback = (entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					player.pause();
					player.decreaseVolume(100);
				} else {
					if(isAutoplay != false) {
						player.play();
						player.decreaseVolume(100);
					}
					player.decreaseVolume(100);
				}
			});
		}

		var observer = new IntersectionObserver(callback, config);

		// observer.observe(playercontainer);

		player.on('ready', () => {
			player.decreaseVolume(100);
			observer = new IntersectionObserver(callback, config);
			observer.observe(playercontainer);
		});
	})
}


$window.on('load', function(event) {
    initVideos();
});