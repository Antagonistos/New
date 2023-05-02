const swiper = new Swiper('.intro__swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper2 = new Swiper('.cards__swiper', {
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		800: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper3 = new Swiper('.news__swiper', {
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		800: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper4 = new Swiper('.tab-swiper', {
	loop: true,
	breakpoints: {
		340: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		600: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		800: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 7,
			spaceBetween: 20,
		},
	},
});
const swiper5 = new Swiper('.models-swiper', {
	loop: true,
	breakpoints: {
		340: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 4,
		},
		800: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 6,
		},
		1400: {
			slidesPerView: 5,
		},
	},
	navigation: {
		nextEl: '.btn-next-small',
		prevEl: '.btn-prev-small',
	},
});
const swiper6 = new Swiper('.console__items', {
	loop: true,
	breakpoints: {
		340: {
			slidesPerView: 1,
		},
		560: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		830: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1054: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper7 = new Swiper('.model-info__swiper', {
	loop: true,
	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper8 = new Swiper('.console__items', {
	loop: true,
	breakpoints: {
		340: {
			slidesPerView: 1,
		},
		560: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		830: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1054: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper9 = new Swiper('.comparison-swiper', {
	loop: true,
	breakpoints: {
		340: {
			slidesPerView: 1,
		},
		560: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		830: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1054: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper10 = new Swiper('.location-swiper', {
	loop: true,
	navigation: {
		nextEl: '.btn-prev',
		prevEl: '.btn-next',
	},
});
const swiper11 = new Swiper('.services-project-swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	autoplay: {
		delay: 3000,
	},
});

export { swiper, swiper2, swiper3, swiper4, swiper5, swiper6, swiper7, swiper8, swiper9, swiper10, swiper11 }