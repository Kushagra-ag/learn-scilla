;
import { captions } from './captions.js';
import chapter1 from '../modules/chapter1/index.js';
import chapter2 from '../modules/chapter2/index.js';

let chapters = [chapter1, chapter2];

$(document).ready(function() {

	//let z = 200;
	let containers = document.getElementsByClassName('content__container');
	//let nav = (document.querySelector('.navbar')).getBoundingClientRect();
	//let home = document.querySelector('.homepage');
	containers[1].removeAttribute('style');
	

	[...document.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.addEventListener('click', pageChange);
		elem.addEventListener('touchend', pageChange);
	});

	// [...containers].forEach((item)=>{
	// 	item.style.zIndex = z--;
	// });
});

function clone(node)
{
	let cloned = node.cloneNode(true);

	return cloned;
}

/*-----Function for lifting homepage-----*/

function showChapters()
{
	
	let ch = document.querySelector('.chapter__template');
	let home = document.querySelector('.homepage');

	// location.hash = "template";
	// history.pushState({
	// 	h_chapter: 0,
	// 	h_page: 0,
	// 	t_chapter: 1,
	// 	t_page: 1
	// },null,`chapter=1/page=1`);

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
	let chapter = parseInt(elem.dataset.chapter) || 1;
	let page = parseInt(elem.dataset.page) || 1;
	let dir = elem.dataset.dir;
	let prev,cur,next;

	//page++;

	console.log(id);
	console.log(page);

	
	
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

	console.log("next - "+next);

	if(next==7)
		return;

	let target = {
		chapter: chapter,
		page: next,
	}

	let host = {
		chapter: chapter,
		page: cur,
	}

	if(dir=="down")
		showPageNext(host,target,id);
	else
		showPagePrev(host,target,id);

}

function showPageNext(h,t,id)
{

	// console.log(h);
	console.log(t);
	console.log("host id "+id);
	console.log("dest id "+(id+1)%3);
	let host = document.querySelector(`.y[data-id='${id}']`);
	
	console.log(host);
	let dest = document.querySelector(`.y[data-id='${(id+1)%3}']`);
	console.log(dest);



	console.log(chapters[t.chapter-1][`page${t.page}`]);

	let node = clone(chapters[t.chapter-1][`page${t.page}`]);
	dest.querySelector('.content__container').replaceWith(node);




	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();

	console.log(dest.childNodes);
	console.log(dest.firstElementChild);





	node.style.display = "block";
	host.setAttribute('data-class','d__up');



	let other = document.querySelector(`.y[data-id='${(id+2)%3}']`);


	setTimeout(function(){

		dest.dataset.class = "d__current"
		other.dataset.class = "d__behind";
		other.id = "";
		host.querySelector('.content__container').style.display = "none";
	},1000)







	//let target = document.querySelector(`.content__container[data-chapter='${t.chapter}'][data-page='${t.page}']`);
	let image = document.querySelector('.chapter__image');
	let caption = document.querySelector('.caption');

	// history.pushState({
	// 	h_chapter: h.chapter,
	// 	h_page: h.page,
	// 	t_chapter: t.chapter,
	// 	t_page: t.page,
	// },null,`../chapter=${t.chapter}/page=${t.page}`);

	image.classList.add('scale');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = `../images/img${t.page}.png`;
		caption.innerHTML = captions.key(t.page-1);
		image.classList.remove('scale');
		caption.classList.remove('scale');
	},1000);

	

	


	
}

function showPagePrev(h,t,id)
{

	console.log(h);
	console.log(t);

	if(h.page===1 && h.chapter===1)
	{
		
		let home = document.querySelector('.homepage');

		// location.hash = "template";
		// history.pushState({
		// 	h_chapter: 0,
		// 	h_page: 0,
		// 	t_chapter: 1,
		// 	t_page: 1
		// },null,`chapter=1/page=1`);

		setTimeout(function()
		{
			//ch.style.display = "block";
			home.style.marginTop=0;
		},100);

		return
	}


	console.log("host id "+id);
	console.log("dest id "+(id+2)%3);
	let host = document.querySelector(`.y[data-id='${id}']`);
	//let host = document.getElementById(id);
	console.log(host);
	let dest = document.querySelector(`.y[data-id='${(id+2)%3}']`);
	console.log(dest);
	console.log(t);
	let address = chapters[t.chapter-1][t.page-1];
	console.log(address);
	

	
	let node = clone(chapters[t.chapter-1][`page${t.page}`]);
	
	dest.querySelector('.content__container').replaceWith(node);


	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();

	console.log(dest.childNodes);
	console.log(dest.firstElementChild);


	node.style.display = "block";


	host.dataset.class = "u__behind";

	dest.dataset.class = "u__current";




	let other = document.querySelector(`.y[data-id='${(id+1)%3}']`);
	console.log(other);


	setTimeout(function(){



		other.dataset.class = "u__up";


		host.querySelector('.content__container').style.display = "none";

	},1000)







	//let target = document.querySelector(`.content__container[data-chapter='${t.chapter}'][data-page='${t.page}']`);
	let image = document.querySelector('.chapter__image');
	let caption = document.querySelector('.caption');

	// history.pushState({
	// 	h_chapter: h.chapter,
	// 	h_page: h.page,
	// 	t_chapter: t.chapter,
	// 	t_page: t.page,
	// },null,`../chapter=${t.chapter}/page=${t.page}`);

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


let attach = () => {
	[...document.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.addEventListener('click', pageChange);
		elem.addEventListener('touchend', pageChange);
	});
};
