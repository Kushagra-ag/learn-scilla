$(document).ready(function() {

	const totalChapters = 9;

	if(localStorage.getItem('v')) {
		
		[...document.getElementsByClassName('learn')].forEach((item) => {
			item.innerHTML = "Continue";
		});

		let c = parseInt(localStorage.getItem('c'))||0;
		document.querySelector('.status').style.width = ((c/totalChapters)*100)+'%';
	}

});

function showIndex() {
	
	let home = document.querySelector('.homepage');
	let form = document.querySelector('.sign');

	setTimeout(function(){window.location.href = "./auth/login"}, 1000);

	setTimeout(function(){home.style.marginTop="-200vh"}, 500);
}

// Adding event listeners
[...document.getElementsByClassName('card1')].forEach((elem) => {
	elem.addEventListener('click', showIndex);
});