
document.querySelectorAll('.js-toggle-mobile').forEach(element => {
	element.addEventListener('click', function () {
		this.classList.toggle('active');
		document.querySelector('.menuBox').classList.toggle('active');
		document.getElementById('headerCntr').classList.toggle('active');
	});

	const header = document.getElementById('headerCntr');
	let position = window.scrollY;

	window.addEventListener('scroll', () => {
		let scroll = window.scrollY;

		if (scroll > 100) {
			if (scroll > position) {
				header.classList.add('sticky');
			} else {
				header.classList.remove('sticky');
			}
		}
		position = scroll;
	});

	document.querySelectorAll('.menuBox li a').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault(); // Prevent default anchor behavior if needed

			let parent = this.parentElement;
			let submenu = this.nextElementSibling;
			let siblings = [...parent.parentElement.children].filter(el => el !== parent);

			// Close other open menus
			siblings.forEach(sib => {
				let sibMenu = sib.querySelector('ul');
				if (sibMenu) {
					sibMenu.style.maxHeight = null;
					sib.classList.remove('active');
				}
			});

			// Toggle submenu
			if (submenu) {
				if (submenu.style.maxHeight) {
					submenu.style.maxHeight = null;
				} else {
					submenu.style.maxHeight = submenu.scrollHeight + "px";
				}
				parent.classList.toggle('active');
			}
		});
	});


	new Swiper(".js-project-slider", {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			clickable: true,
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1025: {
				slidesPerView: 3,
				spaceBetween: 60
			},

		}
	});
});
