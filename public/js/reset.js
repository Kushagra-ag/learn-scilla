$(document).ready(function() {

	resetSetup();
});

function resetSetup() {
	
	let pass = document.querySelectorAll('.active--form .pass__l');

	let snake = document.querySelector('.snake');
	
	pass[0].addEventListener('focus', function(e) {
		snake.style.strokeDashoffset = '0';
		snake.style.strokeDasharray = '220 1386';
	});

	pass[1].addEventListener('focus', function(e) {
		snake.style.strokeDashoffset = '-336';
		snake.style.strokeDasharray = '220 1386';
	});

}
