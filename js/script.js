;import { captions } from './captions.js';
//import { para } from './extra.js';

$(document).ready(function() {

	let z = 200;
	let containers = document.getElementsByClassName('content__container');
	let nav = (document.querySelector('.navbar')).getBoundingClientRect();
	let home = document.querySelector('.homepage');
	containers[1].removeAttribute('style');
	

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
	history.pushState({
		h_chapter: 0,
		h_page: 0,
		t_chapter: 1,
		t_page: 1
	},null,`chapter=1/page=1`);

	setTimeout(function()
	{
		ch.style.display = "block";
		home.style.marginTop="-200vh";
	},500);
}

/*-----Function for card swipe animations-----*/

function pageChange(e)
{
	console.log(e.state)

	
	
	let elem = event.currentTarget;
	let id = parseInt(elem.dataset.id);
	let chapter = parseInt(elem.dataset.chapter);
	let page = parseInt(elem.dataset.page);
	let dir = elem.dataset.dir;
	let prev,cur,next;

	//page++;

	console.log(id);
	console.log(page);

	if(id==1)
	{
		if(dir=="up")
		{
			
			cur = page;
			next = page-1;
		}
		else
		{
			next = page+1;
			cur = page;
			
		}

		if(next==0||next==4)
			return;

		let target = {
			chapter: chapter,
			page: next,
		}

		let host = {
			chapter: chapter,
			page: cur,
		}

		showPage(host,target,dir,id);

		
	}

	else
	{
		if(e.state)
		{

		}
	}
	

}

function showPage(h,t,dir,id)
{

	// console.log(h);
	// console.log(t);

	let host = document.querySelector(`.y[data-id='${id}']`);
	//let host = document.getElementById(id);
	console.log(host);
	let dest = document.querySelector(`.y[data-id='${(id+1)%3}']`);
	console.log(t);

	import(`../modules/chapter${t.chapter}/page${t.page}.js`).then(
		({d}) => {

		//append imported module on selected id
		//console.log(d);
		dest.appendChild(d);



		if(dir=="down")
		{

			host.style.position = "absolute";
			host.id = 'pageUp';										// importedNode == target
			d.style.display = "block";
		}

		if(dir=="up")
		{
			d.id = 'pageDown';
		}

		// dest.dataset.id = "2";
		// host.dataset.id = "1";

		bwd = document.querySelector(`.y[data-id='${(id+2)%3}']`);

		// bwd.dataset.class = "up";
		bwd.dataset.class = "behind";
		//host.dataset.class = "current";
	});






	//let target = document.querySelector(`.content__container[data-chapter='${t.chapter}'][data-page='${t.page}']`);
	let image = document.querySelector('.chapter__image');
	let caption = document.querySelector('.caption');

	history.pushState({
		h_chapter: h.chapter,
		h_page: h.page,
		t_chapter: t.chapter,
		t_page: t.page,
	},null,`../chapter=${t.chapter}/page=${t.page}`);

	image.classList.add('scale');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = `../images/img${t.page}.png`;
		caption.innerHTML = captions.key(t.page-1);
		image.classList.remove('scale');
		caption.classList.remove('scale');
	},1000);

	

	


	
}


function checkState(e)
{
	console.log(e.state);

	if(e.state)
	{

		let target = {
			chapter: e.state.t_chapter,
			page: e.state.t_page
		}

		let host = {
			chapter: e.state.h_chapter,
			page: e.state.h_page
		}

		let dir = "up";

		showPage(host,target,dir);
	}
}

/*-----Attaching event listeners-----*/

window.onpopstate = checkState;

[...document.getElementsByClassName('learn')].forEach((elem) => {
	elem.addEventListener('click', showChapters);
	elem.addEventListener('touchend', showChapters);
});

[...document.getElementsByClassName('page__control__elem')].forEach((elem) => {
	elem.addEventListener('click', pageChange);
	elem.addEventListener('touchend', pageChange);
});
