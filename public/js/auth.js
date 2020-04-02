let formToggle;
let login = document.querySelector('.forms__login');
let reg = document.querySelector('.forms__register');
let loginButton = document.querySelector('.form__control__login');
let regButton = document.querySelector('.form__control__reg');

$(document).ready(function() {

	
	
	loginButton.addEventListener('click', function() {
		reg.style.display = "none";
		login.style.display = "block";
		regButton.classList.remove('active--head');
		loginButton.classList.add('active--head');
	});

	regButton.addEventListener('click', function() {
		login.style.display = "none";
		reg.style.display = "block";
		regButton.classList.add('active--head');
		loginButton.classList.remove('active--head');
	});


});


	


export default formToggle;