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
