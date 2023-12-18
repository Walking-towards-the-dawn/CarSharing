document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelector('.slides');
	const pagination = document.querySelector('.pagination');
	let currentIndex = 0;

	// Create dots for pagination
	for (let i = 0; i < slides.children.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dot.addEventListener('click', () => goToSlide(i));
		pagination.appendChild(dot);
	}

	// Highlight the current dot
	function updatePagination() {
		const dots = pagination.children;
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.toggle('active', i === currentIndex);
		}
	}

	// Go to the specified slide index
	function goToSlide(index) {
		currentIndex = index;
		const translateValue = -index * 100 + '%';
		slides.style.transform = 'translateY(' + translateValue + ')';
		updatePagination();
	}

	// Automatic slide change every 3 seconds
	setInterval(() => {
		currentIndex = (currentIndex + 1) % slides.children.length;
		goToSlide(currentIndex);
	}, 6000);

	// Initial setup
	updatePagination();
});

document.addEventListener('DOMContentLoaded', function () {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
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
