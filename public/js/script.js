;
import util from './utility.js';



/*-----Attaching event listeners-----*/

window.onpopstate = util.checkState;
window.onbeforeunload = util.unload;



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
