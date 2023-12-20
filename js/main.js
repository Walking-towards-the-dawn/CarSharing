document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelector('.slides');
	const pagination = document.querySelector('.pagination');
	let currentIndex = 0;

	// Створіть крапки для pagination
	for (let i = 0; i < slides.children.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dot.addEventListener('click', () => goToSlide(i));
		pagination.appendChild(dot);
	}

	// Виділити поточну крапку
	function updatePagination() {
		const dots = pagination.children;
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.toggle('active', i === currentIndex);
		}
	}

	// Перейти до вказаного індексу слайда
	function goToSlide(index) {
		currentIndex = index;
		const translateValue = -index * 100 + '%';
		slides.style.transform = 'translateY(' + translateValue + ')';
		updatePagination();
	}

	// Автоматична зміна слайдів кожні 3 секунди
	setInterval(() => {
		currentIndex = (currentIndex + 1) % slides.children.length;
		goToSlide(currentIndex);
	}, 4000);

	updatePagination();
});

// Слайдер відгуків
document.addEventListener('DOMContentLoaded', function () {
	let swiper = new Swiper('.swiper-container', {
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
