/* ------------ Main Slider ------------ */
let slideIndex = 0;
let slides, dots, slideInterval;

function startShow() {
	slides = document.getElementsByClassName('slide');
	dots = document.getElementsByClassName('dot');
	slideInterval = setInterval(showSlides, 2000); // Change slide every 2 seconds
}

function showSlides() {
	let i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'inline-block';
	dots[slideIndex - 1].className += ' active';
}

// Swipe detection for mobile devices
let touchstartX = 0;
let touchendX = 0;

document.addEventListener(
	'touchstart',
	function (e) {
		touchstartX = e.changedTouches[0].screenX;
	},
	false
);

document.addEventListener(
	'touchend',
	function (e) {
		touchendX = e.changedTouches[0].screenX;
		handleSwipe();
	},
	false
);

function handleSwipe() {
	if (touchendX < touchstartX) {
		slideIndex++;
	}
	if (touchendX > touchstartX) {
		slideIndex--;
	}
	showSlides();
}

// Pagination click event
let pagination = document.getElementsByClassName('pagination')[0];
pagination.addEventListener('click', function (e) {
	if (e.target.classList.contains('dot')) {
		clearInterval(slideInterval);
		slideIndex = Array.from(pagination.children).indexOf(e.target);
		showSlides();
		slideInterval = setInterval(showSlides, 2000); // Restart the slide show
	}
});

window.onload = startShow;
/* ------------ Main Slider ------------ */

/* ------------ Reviews Slider ------------ */
document.addEventListener('DOMContentLoaded', function () {
	let swiper = new Swiper('.swiper-container', {
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			900: {
				slidesPerView: 3,
			},
			800: {
				slidesPerView: 2,
			},
			650: {
				slidesPerView: 2,
			},
			450: {
				slidesPerView: 1,
			},
		},
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
/* ------------ Reviews Slider ------------ */

/* ------------ Page navigation ------------ */
document.addEventListener('DOMContentLoaded', event => {
	document.querySelectorAll('.menu__list-link').forEach(item => {
		item.addEventListener('click', event => {
			event.preventDefault();
			let id = event.target.getAttribute('href').substring(1);
			window.scrollTo({
				top: document.getElementById(id).offsetTop,
				behavior: 'smooth',
			});
		});
	});
});

/* ------------ Page navigation ------------ */

/* ------------ Burger Menu ------------ */
const menuList = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('menu__list--active');
});

window.addEventListener('scroll', () => {
	menuList.classList.remove('menu__list--active');
});

document.addEventListener('click', event => {
	if (!event.target.closest('.menu__list') && !event.target.closest('.menu__btn')) {
		menuList.classList.remove('menu__list--active');
	}
});
/* ------------ Burger Menu ------------ */
