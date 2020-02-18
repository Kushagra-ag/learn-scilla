;import { captions } from './captions.js';

$(document).ready(function() {

	const queryString = window.location.search;
	if(queryString)
	{
		console.log("aaaaaa");
		const urlParams = new URLSearchParams(queryString);

		let chapter = urlParams.get('chapter');
		var page = urlParams.get('page');

		history.pushState({
			h_chapter: 0,
			h_page: 0,
			t_chapter: chapter,
			t_page: page,
		},null,"./");

		let ch = document.querySelector('.chapter__template');
		let home = document.querySelector('.homepage');

		ch.style.display = "block";
		home.style.marginTop="-200vh";

		//iniHistory();
	}
	

	let z = 200;
	let containers = document.getElementsByClassName('content__container');

	[...containers].forEach((item)=>{
		item.style.zIndex = z--;
	});

	console.log(page);
	let ind = (page-1) || 0;
	containers[ind].style.display = "block";




	// history.replaceState({

	// })
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

	iniHistory();

}

function iniHistory()
{

	history.replaceState({
		h_chapter: 0,
		h_page: 0,
		t_chapter: 1,
		t_page: 1,
	},null,`./index.html?chapter=1&page=1`);
}

/*-----Function for card swipe animations-----*/

function pageChange()
{
	let elem = event.currentTarget;
	let chapter = elem.dataset.chapter;
	let page = elem.dataset.page;
	let dir = elem.dataset.dir;

	//let host = document.querySelector(`.content__container[data-chapter='${chapter}'][data-page='${page}']`);
	
	let host = {
		chapter: chapter,
		page: page,
	}

	if(dir=="up")
	{
		page--;
	}
	else
	{
		page++;
	}
	
	if(page==3)
		return;


	let target = {
		chapter: chapter,
		page: page,
	}

	


	showPage(host,target,dir);
	

}

function showPage(h,t,dir)
{
	let target = document.querySelector(`.content__container[data-chapter='${t.chapter}'][data-page='${t.page}']`);
	let host = document.querySelector(`.content__container[data-chapter='${h.chapter}'][data-page='${h.page}']`);
	let image = document.querySelector('.chapter__image');
	let caption = document.querySelector('.caption');

	

	

	if(dir=="up")
	{
		if(h.page==1)
		{
			//console.log("jkhjg");
			
			let home = document.querySelector('.homepage').removeAttribute('style');
			setTimeout(function(){let ch = document.querySelector('.chapter__template').removeAttribute('style');},1000);
			history.replaceState({
				h_chapter: 0,
				h_page: 0,
				t_chapter: 1,
				t_page: 1,
			},null,"./");

			return;
		}

		target.id = 'pageDown';
		target.style.display = "block";
		
		

		setTimeout(function(){
			target.style.position = "relative";
			host.style.position = "absolute";
			host.style.display = "none";
		},1000);
	}

	else if(dir=="down")
	{
		
		target.style.display = "block";
		host.style.position = "absolute";
		host.id = 'pageUp';

		setTimeout(function(){
			host.style.display = "none";
		},1000);
		
	}

	

	image.classList.add('scale');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = `./images/img${t.page}.png`;
		caption.innerHTML = captions.key(t.page-1);
		image.classList.remove('scale');
		caption.classList.remove('scale');
	},1000);


	history.pushState({
		h_chapter: h.chapter,
		h_page: h.page,
		t_chapter: t.chapter,
		t_page: t.page,
	},null,`./index.html?chapter=${t.chapter}&page=${t.page}`);
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

window.onpopstate = checkState;

/*-----Attaching event listeners-----*/

[...document.getElementsByClassName('learn')].forEach((elem) => {
	elem.addEventListener('click', showChapters);
	elem.addEventListener('touchend', showChapters);
});

[...document.getElementsByClassName('page__control__elem')].forEach((elem) => {
	elem.addEventListener('click', pageChange);
	elem.addEventListener('touchend', pageChange);
});

// window.onbeforeunload = function()
// {
// 	console.log("kdkdjfkdfjkjfdkjfkdjf");

// 	const queryString = window.location.search;
// 	const urlParams = new URLSearchParams(queryString);

// 	let chapter = urlParams.get('chapter');
// 	let page = urlParams.get('page');

// 	location.href = window.location.protocol + '//' + window.location.host;

// 	//console.log(e.state);
// }

window.onbeforeunload = function() { 
	window.setTimeout(function () { 

		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		let chapter = urlParams.get('chapter');
		let page = urlParams.get('page');

		location.href = window.location.origin + window.location.pathname + `?chapter=${chapter}&page=${page}`;
		//console.log(location);
		
	}, 0); 

    window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
}



