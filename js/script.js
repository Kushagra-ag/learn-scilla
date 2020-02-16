;import { captions } from './captions.js';

$(document).ready(function() {

	let z = 200;
	let containers = document.getElementsByClassName('content__container');
	let nav = (document.querySelector('.navbar')).getBoundingClientRect();
	let home = document.querySelector('.homepage');
	containers[0].removeAttribute('style');
	let ab = document.querySelector('.abcd');
	console.log(ab);
	

	[...containers].forEach((item)=>{
		item.style.zIndex = z--;
	});
});

/*-----Function for lifting homepage-----*/

function showChapters()
{
	let ch = document.querySelector('.chapter__template');
	let home = document.querySelector('.homepage');

	// location.hash = "template";
	// history.pushState(null,null,null);
	setTimeout(function()
	{
		ch.style.display = "block";
		home.style.marginTop="-200vh";
	},500);
}

/*-----Function for card swipe animations-----*/

function pageChange()
{
	let elem = event.currentTarget;
	let chapter = elem.dataset.chapter;
	let page = elem.dataset.page;
	let dir = elem.dataset.dir;

	let host = document.querySelector(`.content__container[data-chapter='${chapter}'][data-page='${page}']`);
	
	if(dir=="up")
	{
		page--;
	}
	else
	{
		page++;
	}
	
	if(page==0||page==3)
		return;

	let target = document.querySelector(`.content__container[data-chapter='${chapter}'][data-page='${page}']`);
	let image = document.querySelector('.chapter__image');
	let caption = document.querySelector('.caption');

	image.classList.add('scale');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = `./images/img${page}.png`;
		caption.innerHTML = captions.key(page-1);
		image.classList.remove('scale');
		caption.classList.remove('scale');
	},1000);

	if(dir=="down")
	{
		
		host.style.position = "absolute";
		host.id = 'pageUp';
		target.style.display = "block";
	}

	if(dir=="up")
	{
		target.id = 'pageDown';
	}
	

}

/*-----Attaching event listeners-----*/

[...document.getElementsByClassName('learn')].forEach((elem) => {
	elem.addEventListener('click', showChapters);
	elem.addEventListener('touchend', showChapters);
});

[...document.getElementsByClassName('page__control__elem')].forEach((elem) => {
	elem.addEventListener('click', pageChange);
	elem.addEventListener('touchend', pageChange);
});
