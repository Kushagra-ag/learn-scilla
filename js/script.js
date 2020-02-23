;
import captions from '../modules/data/data.js';
import chapters from '../modules/index.js';
import images from '../images/index.js';

var his;

$(document).ready(function() {

	//let z = 200;
	let containers = document.getElementsByClassName('content__container');
	
	let node = clone(chapters[0].page1);
	
	containers[1].replaceWith(node);
	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();
	

	containers[1].removeAttribute('style');

	

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
	history.replaceState({
		h_chapter: 0,
		h_page: 0,
		t_chapter: 1,
		t_page: 1,
		id: -1,
	},null,`./chapter1`);


	setTimeout(function()
	{
		ch.style.display = "block";
		home.style.marginTop="-200vh";

		// console.log([...document.getElementsByClassName('content__container')])
		// let c = [...document.getElementsByClassName('content__container')][1];
		// let h = c.getBoundingClientRect();
		// c.parentNode.parentNode.parentNode.style.minHeight = h.height+'px';
		// //c.parentNode.parentNode.style.height = h.height+'px';
		// console.log(c.parentNode.parentNode);

	},500);
}

function hideChapters()
{
	let ch = document.querySelector('.chapter__template');
	let home = document.querySelector('.homepage');

	home.style.marginTop="0";

	setTimeout(function()
	{
		ch.style.display = "none";
		
	},1000);
}

/*-----Function for card swipe animations-----*/

function pageSelect(ch,p,dir)
{
	if(dir==="up")
	{
		if(ch===1 && p===1)
			return {ch:1,p:1}
		else if(ch===2 && p===1)
			return {ch:1,p:4}
		else
			return {ch:ch,p:p-1}
	}
	else
	{
		if(ch===1 && p===4)
			return {ch:2,p:1}
		else
			return {ch:ch,p:p+1}
	}
}

function pageChange(e)
{
	console.log(e.state)

	
	
	let elem = event.currentTarget;
	let id = parseInt(elem.dataset.id);
	let ch = parseInt(elem.dataset.chapter) || 1;
	let p = parseInt(elem.dataset.page) || 1;
	let dir = elem.dataset.dir;
	let prev,cur,next;

	//page++;

	console.log(id);
	console.log(p);

	let host = {
		chapter: ch,
		page: p,
	};
	

	// if(dir=="up")
	// {

	// 	cur = page;
	// 	next = page-1;
	// }
	// else if(dir =="down")
	// {

	// 	next = page+1;
	// 	cur = page;

	// }

	({ch, p} = pageSelect(ch, p, dir));

	console.log("next - "+p);

	if(p==4)
		return;

	let target = {
		chapter: ch,
		page: p,
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
	
	let dest = document.querySelector(`.y[data-id='${(id+1)%3}']`);
	

	let node = clone(chapters[t.chapter-1][`page${t.page}`]);
	dest.querySelector('.content__container').replaceWith(node);




	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();


	node.style.display = "block";
	host.setAttribute('data-class','d__up');



	let other = document.querySelector(`.y[data-id='${(id+2)%3}']`);


	setTimeout(function(){

		dest.dataset.class = "d__current"
		other.dataset.class = "d__behind";
		other.id = "";
		host.querySelector('.content__container').style.display = "none";
	},1000)


	let image = document.querySelector('.chapter__image');
	let caption = document.querySelector('.caption');

	id = (id+1)%3;
	history.pushState({
		h_chapter: h.chapter,
		h_page: h.page,
		t_chapter: t.chapter,
		t_page: t.page,
		id: id,
	},null,`./chapter${t.chapter}`);

	his = window .history.state;
	console.log(his);

	console.log(h);
	console.log(t);

	image.classList.add('scale');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = images[t.chapter-1][t.page-1];
		caption.innerHTML = captions.key(t.page-1);
		image.classList.remove('scale');
		caption.classList.remove('scale');
	},1000);

	

	


	
}

function showPagePrev(h,t,id)
{

	console.log(h);
	console.log(t);
	console.log(id);

	if(h.page===1 && h.chapter===1)
	{
		
		hideChapters();

		// location.hash = "template";
		history.pushState({
			h_chapter: 0,
			h_page: 0,
			t_chapter: 1,
			t_page: 1,
			id: -1,
		},null,`./`);

		his = window .history.state;

		return
	}


	console.log("host id "+id);
	console.log("dest id "+(id+2)%3);

	let host = document.querySelector(`.y[data-id='${id}']`);
	//let host = document.getElementById(id);
	console.log(host);
	let dest = document.querySelector(`.y[data-id='${(id+2)%3}']`);
	
	let address = chapters[t.chapter-1][t.page-1];
	//console.log(address);
	

	
	let node = clone(chapters[t.chapter-1][`page${t.page}`]);
	
	dest.querySelector('.content__container').replaceWith(node);


	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();


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

	id = (id+2)%3;
	history.pushState({
		h_chapter: h.chapter,
		h_page: h.page,
		t_chapter: t.chapter,
		t_page: t.page,
		id: id,
	},null,`./chapter${t.chapter}`);

	his = window .history.state;
	console.log(his);

	image.classList.add('scale');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = images[t.chapter-1][t.page-1];
		caption.innerHTML = captions.key(t.page-1);
		image.classList.remove('scale');
		caption.classList.remove('scale');
	},1000);

	
}




function checkState(e)
{
	console.log(e.state);
	console.log(his);

	let ch, p, id;
	

	if(his.id != -1)
	{
		if(e.state)
		{

			let host = {
				chapter: his.t_chapter,
				page: his.t_page
			};

			({ch, p} = pageSelect(his.t_chapter, his.t_page, "up"));

			let target = {
				chapter: ch,
				page: p
			}

			id = his.id;

			
		}
	}

	showPagePrev(host,target,id);
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
