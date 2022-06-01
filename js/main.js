'use strict';
// TODO: Navigation
$('.close').click(function () {
	$('.nav').addClass('un-active-navbar');
});

$('.check-burger').click(function () {
	$('.nav').removeClass('un-active-navbar');
});

// ! Time
function myClock() {
	setTimeout(function () {
		const d = new Date();
		const n = d.toLocaleTimeString();
		document.getElementById('time').innerHTML = n;
		myClock();
	}, 1000);
}
myClock();
