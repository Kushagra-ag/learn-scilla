;
import { captions } from './captions.js';
import abc from '../modules/chapter1/chapter1.js';
//import { para } from './extra.js';

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
	let chapter = parseInt(elem.dataset.chapter);
	let page = parseInt(elem.dataset.page);
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

	if(next==0||next==7)
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
	// console.log(t);
	console.log("host id "+id);
	console.log("dest id "+(id+1)%3);
	let host = document.querySelector(`.y[data-id='${id}']`);
	//let host = document.getElementById(id);
	console.log(host);
	let dest = document.querySelector(`.y[data-id='${(id+1)%3}']`);
	console.log(dest);
	let address = `../modules/chapter${t.chapter}/chapter${t.chapter}.js`;
	console.log(address);
	//let d = await import(address);
	console.log(t);
		//append imported module on selected id
		console.log(abc.page1);
		// console.log(dest.firstElementChild);
		let node = clone(abc.page1);
		dest.querySelector('.content__container').replaceWith(node);
		

		//dest.appendChild(d);

		[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
			elem.dataset.id = node.parentNode.dataset.id;
			elem.dataset.chapter = node.dataset.chapter;
			elem.dataset.page = node.dataset.page;
		})

		attach();

		console.log(dest.childNodes);
		console.log(dest.firstElementChild);

		
		

			//host.style.position = "absolute";
			node.style.display = "block";
			host.setAttribute('data-class','d__up');
			// host.style.top = "0";

			//host.querySelector('div').style.opacity = "1";
			//host.dataset.class = "up";								
			




		// dest.dataset.id = "2";
		// host.dataset.id = "1";
		//let elem1=d;
		

		let other = document.querySelector(`.y[data-id='${(id+2)%3}']`);
		console.log(other);
		//other.querySelector('.content__container').style.display = "none";

		
		//host.dataset.class = "current";

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

	// console.log(h);
	// console.log(t);
	console.log("host id "+id);
	console.log("dest id "+(id+2)%3);
	let host = document.querySelector(`.y[data-id='${id}']`);
	//let host = document.getElementById(id);
	console.log(host);
	let dest = document.querySelector(`.y[data-id='${(id+2)%3}']`);
	console.log(dest);
	console.log(t);
	let address = `../modules/chapter${t.chapter}/page${t.page}.js`;
	console.log(address);
	import(`../modules/chapter${t.chapter}/page${t.page}.js`).then(
		({d}) => {

		//append imported module on selected id
		console.log(d);
		
		// console.log(dest.firstElementChild);
		let node = clone(d);
		dest.querySelector('.content__container').replaceWith(node);
		console.log(node);

		//dest.appendChild(d);

		[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
			elem.dataset.id = node.parentNode.dataset.id;
			elem.dataset.chapter = node.dataset.chapter;
			elem.dataset.page = node.dataset.page;
		})

		attach();

		console.log(dest.childNodes);
		console.log(dest.firstElementChild);

		

		
		node.style.display = "block";
		dest.dataset.class = "margin_0";
		host.dataset.class = "u__behind";
		

		// dest.dataset.id = "2";
		// host.dataset.id = "1";
		//let elem1=d;
		

		let other = document.querySelector(`.y[data-id='${(id+1)%3}']`);
		console.log(other);
		//other.querySelector('.content__container').style.display = "none";

		
		//host.dataset.class = "current";

		setTimeout(function(){
			
			
			// host.dataset.class = "u__behind";
			dest.dataset.class = "u__current";
			other.dataset.class = "u__up";
			// other.id = "";
			host.querySelector('.content__container').style.display = "none";
		},1000)
	});






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
