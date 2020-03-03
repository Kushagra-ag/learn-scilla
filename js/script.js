;
import util from './utility.js';

$(document).ready(function() {


	let containers = document.getElementsByClassName('content__container'),node;
	

	if(localStorage.getItem('v'))
	{
		[...document.getElementsByClassName('learn')].forEach((item) => {
			item.innerHTML = "Continue";
		});

		let c = parseInt(localStorage.getItem('c')) || 1;
		//let p = localStorage.getItem('p') || 1;

		node = util.contentUpdate(c,1,0);

		
	}
	else
	{
		node = util.contentUpdate(1,1,0);
	}
	
	
	
	containers[1].replaceWith(node);
	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	});

	util.attach();
	

	containers[1].removeAttribute('style');



});



/*-----Attaching event listeners-----*/

window.onpopstate = util.checkState;
window.onbeforeunload = util.unload;

[...document.getElementsByClassName('learn')].forEach((elem) => {
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
