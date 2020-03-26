let formToggle;
let login = document.querySelector('.forms__login');
let reg = document.querySelector('.forms__register');
let loginButton = document.querySelector('.form__control__login');
let regButton = document.querySelector('.form__control__reg');

$(document).ready(function() {

	
	
	formToggle();


});

formToggle = () => {
	loginButton.addEventListener('click', function() {
		reg.style.display = "none";
		login.style.display = "block";
		regButton.classList.remove('active--form');
		loginButton.classList.add('active--form');
	});

	regButton.addEventListener('click', function() {
		login.style.display = "none";
		reg.style.display = "block";
		regButton.classList.add('active--form');
		loginButton.classList.remove('active--form');
	});
}

export default formToggle;