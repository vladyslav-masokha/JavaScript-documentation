// Navigation
const navEl = document.getElementsByTagName('nav');

document.getElementById('close-menu').onclick = () => {
	navEl[0].classList.add('un-active-navbar');
	navEl[0].style.display = 'none';
};
document.getElementById('check-burger').onclick = () => {
	navEl[0].classList.remove('un-active-navbar');
	navEl[0].style.display = 'flex';
};

// ! Scroll - TODO: not working
// const anchors = document.querySelectorAll('a[href="#"');

// for (let anchor of anchors) {
// 	anchor.addEventListener('click', e => {
// 		e.preventDefault();
// 		const blockID = anchor.getAttribute('href');
// 		document.querySelector('' + blockID).scrollIntoView({
// 			behavior: 'smooth',
// 			block: 'start',
// 		});
// 	});
// }

// document.querySelectorAll('a[href="#"').forEach(link => {
// 	link.addEventListener('click', function (e) {
// 		e.preventDefault();

// 		let href = this.getAttribute('href');

// 		const scrollTarget = document.getElementById(href);

// 		const topOfSet = document.querySelector('.header').offsetHeight;
// 		const elementPosition = scrollTarget.getBoundingClientRect().top;
// 		const offsetPosition = elementPosition - topOfSet;

// 		window.scrollBy({
// 			top: offsetPosition,
// 			behavior: 'smooth',
// 		});
// 	});
// });
