/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '25px',
			},
			screens: {
				sm: '1405px',
			},
		},
		screens: {
			sm: '320px',
			smd: '375px',
			md: '768px',
			lg: '1024px',
			'container' : '1405px',
			xl: '1231px',
			'2xl': '1440px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#fff',
			'black': '#000',
			'purple' : '#7D4AB8',
			'purple-85' : 'rgba(125, 74, 184, 0.85)',
			'purple-10' : 'rgba(177, 148, 211, 0.10)',
			'black-2': '#090D59',
			'blue' : '#00C7CC',
			'gray-40': 'rgba(217, 217, 217, 0.40)',
			'red': '#F52E05',
			'yellow': '#FFB500',
			'gray-2' : '#BBB',
			'gray-3' : '#E7E7E7',
			'gray-3-50' : 'rgba(231, 231, 231, .5)',
			'gray-4-50' : 'rgba(176, 176, 176, .5)',
			'gray-5' : '#B3B3B3',
			'gray-6' : '#B0B0B0',
		},
		fontFamily: {
			sans: ['Commissioner', 'sans-serif'],
			'mono': ['JetBrains Mono', 'sans-serif']
		},
		fontSize: {
			"9xl": "5.44rem",
			"8xl": "4.44rem",
			"6xl": "3rem",
			"5xl": "2.63rem",
			"4xl": "2.25rem",
			"3xl": "1.81rem",
			"2xl": "1.5rem",
			"xl": "1.25rem",
			"lg": "1.06rem",
			"md" : '0.88rem',
			"sm": "0.75rem",
			"normal": "16px",
			'inherit' : 'inherit',
		},
		extend: {
			lineHeight: {
				'inherit' : 'inherit',
				'md' : '1.17',
				'lg' : '1.3',
				'normal': '1.25',
			},
			blur: {
				sm: '5px',
			},
			maxWidth: {
				'1/4': '25%',
				'1/3': '33.33%',
				'1/2': '50%',
				'2/3': '66.66%',
				'3/4': '75%',
				'full': '100%',
				'container': '1405px',
				'container-md' : '1291px',
			},
			padding: {
				'2.25': '0.55rem',//9px
				'3.25' : '0.85rem',
				'3.75': '0.9375rem',//15px
				'7.5': '1.875rem', //30px
				'14.5': '3.625rem',//58px
				'16.5' : '4.2rem', //67.2px
				'16.75' : '4.4rem',
				'18': '4.375rem', //70px
				'24.5': '6.25rem', //100px
				'full': '100%', //100%
			},
			borderRadius: {
				'0' : '0',
				'2/4' : '50%',
				'3/4' : '75%',
				'150' : '150%',
				'lg' : '10px',
				'sm' : '4px',
			},
			spacing: {
				'3.75': '0.9375rem',
				'4.5': '1.0625rem',
				'5.5': '1.375rem',
				'6.5' : '1.56rem',
				'7.5': '1.875rem',//30px
				'14.5': '3.625rem',//58px
				'16.5' : '4.2rem', //67.2px
				'16.75' : '4.4rem',
			},
			zIndex: {
				'behind': '-1',
				'1': '1',
			},
			flex: {
				'full' : '0 0 100%',
				'size-1' : '0 0 35.6%',
				'size-2' : '0 0 59.3%',
				'size-3' : '0 0 35.33%',
				'size-4' : '0 0 55.7%',
				'1/4': '0 0 25%',
				'1/3': '0 0 33.33%',
				'2/3': '0 0 66.66%',
				'1/2': '0 0 50%',
				'3/4': '0 0 75%',
			},
			height: {
				
			},
			transitionProperty: {
				'height' : 'height',
				'width' : 'width',
				'border-radius' : 'border-radius',
				'link-arrow': 'top, right, opacity, left',
				'submenu': 'top, opacity',
				'tile': 'bottom, opacity, box-shadow, border, height, margin, padding, transform',
				'shadow': 'box-shadow, drop-shadow'
			},
			boxShadow: {
				'xs': '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
				's': '0px 4px 4px rgba(0, 0, 0, 0.25)',
				'md': '0px 5px 30px 0px rgba(0, 0, 0, 0.25)',
				'lg': '0px 10px 30px rgba(0, 0, 0, 0.25)',
				'2xl': '0px 20px 30px 0px rgba(0, 0, 0, 0.25);'
			},
			dropShadow: {
				'lg': '0px 10px 30px rgba(0, 0, 0, 0.25)',
			},
			backgroundImage: {
        'page-pattern': "url('../assets/images/temp/bg-dot.png')",
        'shadow-gradient': "linear-gradient(122deg, rgba(13, 13, 89, 0.00) 34.69%, #0D0D59 64.88%)",
        'purple-gradient': "linear-gradient(93deg, #643B93 53.43%, rgba(164, 120, 215, 0.00) 88.69%)",
        'submenu-gradient': "linear-gradient(203deg, rgba(125, 74, 184, 0.10) 29.77%, #7D4AB8 67.41%, #0D0D59 97.82%)",
        'checklist-icon': 'url(../assets/images/temp/ico-check.svg)',
        'tile-gradient': 'linear-gradient(188deg, rgba(164, 120, 215, 0.00) 27.69%, rgba(17, 8, 64, 0.90) 85.61%)',
        'banner-gradient': 'linear-gradient(113deg, rgba(125, 74, 184, 0.10) 43.11%, #7D4AB8 65.51%, #0D0D59 97.99%)',
        'banner-gradient-purple': 'linear-gradient(112deg, rgba(125, 74, 184, 0.00) 27.29%, #7D4AB8 61.13%);',
        'article-gradient': 'linear-gradient(292deg, #7D4AB8 15.12%, #0D0D59 88.13%);',
        'filter-gradient': 'linear-gradient(90deg, #D9D9D9 3.65%, rgba(217, 217, 217, 0.00) 19.79%, rgba(217, 217, 217, 0.00) 75.52%, #D9D9D9 97.4%);',
      },
      letterSpacing: {
      	wide: '0.02em',
      	wider: '0.03em',
      },
		},
	},
	plugins: [
		function ({ addUtilities }) {
      const clipUtilities = {
        '.clip-polygon-xs': {
          'clip-path': 'polygon(25% 0%, 75% 0%, 100% 51%, 75% 100%, 25% 100%, 0 51%)',
        },
        '.clip-polygon-lg' : {
        	'clip-path': 'polygon(100% 24.6%, 100% 75.4%, 50% 100%, 0 75.4%, 0 24.6%, 50% 0)'
        }
      };

      addUtilities(clipUtilities, ['responsive', 'hover']);
    },
  ],
}