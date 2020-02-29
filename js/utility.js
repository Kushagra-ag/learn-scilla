;
import captions from '../lessons/data/data.js';
import chapters, { total } from '../lessons/index.js';
import images from '../images/index.js';

var his;

function contentUpdate(c,p,time)
{
	c = parseInt(c);
	p = time ? parseInt(p) : 1;

	let image = document.querySelector('.chapter__image');
	let bar = document.querySelector('.progress');
	let caption = document.querySelector('.caption');
	let node = clone(chapters[c-1][p-1]);


	image.classList.add('slide-up');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = time ? images[c-1][p-1] : images[c-1][p-1].slice(1);
		caption.innerHTML = captions[c-1][p-1];
		
		bar.style.width = (p/(total[c-1]))*100+'%';

	},time);

	if(c==2 && p==10)
	{
		cardLandscape();
	}

	return node;

}

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

	
	let c = localStorage.getItem('c')||1;
	let p = localStorage.getItem('p')||1;
	history.pushState({
		h_chapter: 0,
		h_page: 0,
		t_chapter: c,
		t_page: p,
		id: 1,
	},null,`./lessons/chapter${c}`);

	
	history.pushState({
		h_chapter: 0,
		h_page: 0,
		t_chapter: c,
		t_page: p,
		id: 1,
	},null,`./chapter${c}`);

	his = window.history.state;


	setTimeout(function()
	{
		ch.style.display = "block";
		home.style.marginTop="-200vh";

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

	// history.pushState({
	// 	h_chapter: 0,
	// 	h_page: 0,
	// 	t_chapter: 1,
	// 	t_page: 1,
	// 	id: -1,
	// },null,`..`);

	// his = window.history.state;

	try
	{
		localStorage.setItem('c', his.t_chapter);
		localStorage.setItem('p', his.t_page);
	}
	catch {}
}

function pageSelect(ch,p,dir)
{
	if(dir=="up")
	{
		if(ch==1 && p==1)
			return {ch:1,p:1}
		else if(ch==1 && p==1)
			return {ch:1,p:1}
		else if(ch==2 && p==1)
			return {ch:1,p:4}
		else
			return {ch:ch,p:p-1}
	}
	else
	{
		if(ch==1 && p==4)

			return {ch:2,p:1}
		else
			return {ch:ch,p:p+1}
	}
}

function pageChange(e)
{
	//console.log(e.state)
	
	let elem = event.currentTarget;
	let id = parseInt(elem.dataset.id);
	let ch = parseInt(elem.dataset.chapter);
	let p = parseInt(elem.dataset.page);
	let dir = elem.dataset.dir;
	let prev,cur,next;

	console.log(id);
	console.log(p);

	let host = {
		chapter: ch,
		page: p,
	};

	// hch = ch;
	// hp = p;
	

	({ch, p} = pageSelect(ch, p, dir));

	console.log("next - "+p);

	if(p==16)
		return;

	let target = {
		chapter: ch,
		page: p,
	}

	let flag = orientSelect(ch,p,dir) || 0;

	if(dir == 'down')
		showPageNext(host,target,id,flag);
	else
		showPagePrev(host,target,id,flag);
}




function orientSelect(c,p,dir)
{
	window.scrollTo(0,0);

	let flag=0;
	if(dir=="down")
	{

		if(c==2)
		{
			if(p==9)
			{
				flag=1;
			}

			else if(p==14)
			{
				flag=-1
			}		
		}	
	}

	else
	{
		if(c==2)
		{
			if(p==8)
			{
				flag=-1;
			}

			else if(p==13)
			{
				flag=1
			}
		}
	}
	return flag;

}

function showPageNext(h,t,id,f)
{

	console.log(f);
	let bar = document.querySelector('.progress');
	//console.log(t);
	console.log("host id "+id);
	console.log("dest id "+(id+1)%3);
	let host = document.querySelector(`.y[data-id='${id}']`);
	let dest = document.querySelector(`.y[data-id='${(id+1)%3}']`);
	let other = document.querySelector(`.y[data-id='${(id+2)%3}']`);

	host.classList.remove('active--card');
	dest.classList.add('active--card');
	
	let node = contentUpdate(t.chapter,t.page,600);
	dest.querySelector('.content__container').replaceWith(node);

	let mode = dest.querySelector('.content__container').dataset.mode;

	if(f==1)
	{
		setTimeout(cardLandscape,1000,mode);
	}
	else if(f==-1)
	{
		setTimeout(cardPortrait,1000,mode);
	}

	theme(mode);



	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();


	node.style.display = "block";
	host.setAttribute('data-class','d__up');


	setTimeout(function(){

		dest.dataset.class = "d__current"
		other.dataset.class = "d__behind";
		
		host.querySelector('.content__container').style.display = "none";
	},600)



	id = (id+1)%3;
	history.pushState({
		h_chapter: h.chapter,
		h_page: h.page,
		t_chapter: t.chapter,
		t_page: t.page,
		id: id,
	},null,`./chapter${t.chapter}`);

	his = window.history.state;
	console.log(his);

	console.log(h);
	console.log(t);

	
	
}

function showPagePrev(h,t,id,f)
{
	let bar = document.querySelector('.progress');
	console.log(h);
	console.log(t);
	console.log(id);

	if(h.page==1 && h.chapter==1)
	{
		
		util.hideChapters();

		// location.hash = "template";
		history.pushState({
			h_chapter: 0,
			h_page: 0,
			t_chapter: 1,
			t_page: 1,
			id: -1,
		},null,`..`);

		his = window.history.state;

		return
	}


	console.log("host id "+id);
	console.log("dest id "+(id+2)%3);

	let host = document.querySelector(`.y[data-id='${id}']`);
	let dest = document.querySelector(`.y[data-id='${(id+2)%3}']`);
	let other = document.querySelector(`.y[data-id='${(id+1)%3}']`);

	host.classList.remove('active--card');
	dest.classList.add('active--card');
	

	
	let node = util.contentUpdate(t.chapter,t.page,600);
	
	dest.querySelector('.content__container').replaceWith(node);

	let mode = dest.querySelector('.content__container').dataset.mode;
	//console.log(mode,f);

	if(f==1)
	{
		setTimeout(cardLandscape,1000,mode);
	}
	else if(f==-1)
	{
		setTimeout(cardPortrait,1000,mode);
	}

	theme(mode);


	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();


	node.style.display = "block";


	host.dataset.class = "u__behind";

	dest.dataset.class = "u__current";


	setTimeout(function(){



		other.dataset.class = "u__up";


		host.querySelector('.content__container').style.display = "none";

	},600)


	id = (id+2)%3;
	history.pushState({
		h_chapter: h.chapter,
		h_page: h.page,
		t_chapter: t.chapter,
		t_page: t.page,
		id: id,
	},null,`./chapter${t.chapter}`);

	his = window.history.state;
	console.log(his);

	
	
}

function checkState(e)
{
	//console.log(e.state);
	//e.preventDefault();
	console.log(his);

	let ch, p;


	let host = {
		chapter: his.t_chapter,
		page: his.t_page
	};

	({ch, p} = pageSelect(his.t_chapter, his.t_page, "up"));

	let target = {
		chapter: ch,
		page: p
	}

	let id = his.id;

	let flag = orientSelect(ch, p, "up");
	
	showPagePrev(host,target,id,flag);
	
}

function unload()
{
	console.log('unloaded');

	if(his)
	{
		try
		{
			localStorage.setItem('c', his.t_chapter);
			localStorage.setItem('p', his.t_page);
			localStorage.setItem('v', 'y');
		}
		catch{}
	}
}

function cardLandscape(mode)
{
	let r = document.querySelector('.chapter__template__right');
	let l = document.querySelector('.chapter__template__left');
	let active = r.querySelector('.active--card');
	
	r.classList.add('card--full');
	l.style.zIndex = '5';
	l.style.opacity = "0";
	// theme(mode);
	

	setTimeout(function() {
		r.classList.add('col-md-12');
		r.classList.add('fullWidth');
		

		if(window.innerWidth >= 768)
		{
			r.querySelector('.card__bar').style.width = "30%";
		}

	},800);
}

function cardPortrait()
{
	let r = document.querySelector('.chapter__template__right');
	let l = document.querySelector('.chapter__template__left');
	let active = r.querySelector('.active--card');

	
	r.classList.remove('fullWidth');

	setTimeout(function() {
		r.classList.remove('card--full');
		l.removeAttribute('style');
		r.classList.remove('col-md-12');
		active.querySelector('.content__container').classList.remove('fullWidth--dark');
		active.querySelector('.page__control').classList.remove('page__control--dark');
	},800);

	r.querySelector('.card__bar').removeAttribute('style');
}

function theme(mode)
{
	let active = document.querySelector('.active--card');

	if(mode == 'D')
	{
		active.querySelector('.content__container').classList.add('fullWidth--dark');
		active.querySelector('.page__control').classList.add('page__control--dark');
	}
	else
	{
		active.querySelector('.content__container').classList.remove('fullWidth--dark');
		active.querySelector('.page__control').classList.remove('page__control--dark');
	}
}



function attach() 
{
	setTimeout(function() {
		[...document.getElementsByClassName('page__control__elem')].forEach((elem) => {
			elem.addEventListener('click', pageChange);	
		});
	}, 1000);
};

const util = {
	contentUpdate, 
	clone,
	showChapters,
	hideChapters,
	pageSelect,
	pageChange,
	showPageNext,
	showPagePrev,
	checkState,
	unload,
	cardLandscape,
	cardPortrait,
	attach
}

export default util;