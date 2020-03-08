;
import util from './utility.js';

$(document).ready(function() {

	
	const totalChapters = 9;

	if(localStorage.getItem('v'))
	{
		[...document.getElementsByClassName('learn')].forEach((item) => {
			item.innerHTML = "Continue";
		});

		let c = parseInt(localStorage.getItem('c')) || 0;
		document.querySelector('.status').style.width = ((c/totalChapters)*100)+'%';
	}

	history.pushState(null,null,'./');
	console.log(window.history.state);


});



/*-----Attaching event listeners-----*/

window.onpopstate = util.checkState;
window.onbeforeunload = util.unload;

[...document.getElementsByClassName('learn')].forEach((elem) => {
	elem.addEventListener('click', util.showIndex);
});

[...document.getElementsByClassName('index__chapter')].forEach((elem) => {
	elem.addEventListener('click', util.showChapters);
});

document.querySelector('.chapter__image').addEventListener('load', function(e) {
	setTimeout(function() {
		let img = document.querySelector('.chapter__image');
		let caption

		img.classList.remove('slide-up');
		//img.classList.remove('slide-down');

		setTimeout(function() {
			document.querySelector('.caption').classList.remove('scale');
		},600);
	},500)
	
});
