;
import captions from '../lessons/data/data.js';
import chapters, { total } from '../lessons/index.js';
import images from '../images/index.js';

var his;

function contentUpdate(c,p,time)
{

	let image = document.querySelector('.chapter__image');
	let bar = document.querySelector('.progress');
	let caption = document.querySelector('.caption');
	let node = clone(chapters[c-1][p-1]);

	image.classList.add('slide-up');
	caption.classList.add('scale');

	setTimeout(function(){
		image.src = time ? images[c-1][p-1] : images[c-1][p-1].slice(1);
		caption.innerHTML = captions[c-1][p-1]||'';
		
		bar.style.width = (p/(total[c-1]))*100+'%';

	},time);

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
		else if(ch==3 && p==1)
			return {ch:2,p:20}
		else if(ch==4 && p==1)
			return {ch:3,p:11}
		else if(ch==5 && p==1)
			return {ch:4,p:12}
		else if(ch==6 && p==1)
			return {ch:5,p:15}
		else if(ch==7 && p==1)
			return {ch:6,p:8}
		else if(ch==8 && p==1)
			return {ch:7,p:13}
		else if(ch==9 && p==1)
			return {ch:8,p:23}
		else
			return {ch:ch,p:p-1}
	}
	else
	{
		if(ch==1 && p==4)
			return {ch:2,p:1}
		else if(ch==2 && p==20)
			return {ch:3,p:1}
		else if(ch==3 && p==11)
			return {ch:4,p:1}
		else if(ch==4 && p==12)
			return {ch:5,p:1}
		else if(ch==5 && p==15)
			return {ch:6,p:1}
		else if(ch==6 && p==8)
			return {ch:7,p:1}
		else if(ch==7 && p==13)
			return {ch:8,p:1}
		else if(ch==8 && p==23)
			return {ch:9,p:1}
		else if(ch==9 && p==7)
			return {ch:null,p:null}
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

	console.log(id);
	console.log(p);

	let host = {
		chapter: ch,
		page: p,
	};
	

	({ch, p} = pageSelect(ch, p, dir));

	console.log("next - "+p);

	if(!(p && ch))
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
			if(p==12)
				flag=1;
			else if(p==18)
				flag=-1
		}
		else if(c==3)
		{
			if(p==2)
				flag=1;
		}
		else if(c>=4 && c<=8)
		{
			if(p==1)
				flag=-1;
			else if(p==2)
				flag=1;
		}
		else if(c==9)
		{
			if(p==1)
				flag=-1;
		}	
	}

	else
	{
		if(c==2)
		{
			if(p==11)
				flag=-1;
			else if(p==17)
				flag=1
		}
		else if(c==3)
		{
			if(p==1)
				flag=-1;
			else if(p==11)
				flag=1;
		}
		else if(c==4)
		{
			if(p==1)
				flag=-1;
			else if(p==12)
				flag=1;
		}
		else if(c==5)
		{
			if(p==1)
				flag=-1;
			else if(p==15)
				flag=1;
		}
		else if(c==6)
		{
			if(p==1)
				flag=-1;
			else if(p==8)
				flag=1;
		}
		else if(c==7)
		{
			if(p==1)
				flag=-1;
			else if(p==13)
				flag=1;
		}
		else if(c==8)
		{
			if(p==1)
				flag=-1;
			else if(p==23)
				flag=1;
		}
	}
	return flag;

}

function showPageNext(h,t,id,f)
{

	console.log(f);
	let bar = document.querySelector('.progress');
	console.log(t);
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
	let last = dest.querySelector('.content__container').dataset.last;

	if(f==1)
	{
		dest.firstElementChild.firstElementChild.style.opacity = '0';
		setTimeout(cardLandscape,600,mode);
	}
	else if(f==-1)
	{
		setTimeout(cardPortrait,600);
	}


	theme(mode);



	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();

	if(last)
	{
		dest.querySelector('.page__control__down').style.opacity = '0';
	}


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
		
		hideChapters();

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
	
	let node = contentUpdate(t.chapter,t.page,600);
	
	dest.querySelector('.content__container').replaceWith(node);

	let mode = dest.querySelector('.content__container').dataset.mode;
	let last = dest.querySelector('.content__container').dataset.last;

	if(f==1)
	{
		dest.firstElementChild.firstElementChild.style.opacity = '0';
		setTimeout(cardLandscape,600,mode);
	}
	else if(f==-1)
	{
		setTimeout(cardPortrait,600,mode);
	}
	theme(mode);

	[...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
		elem.dataset.id = node.parentNode.dataset.id;
		elem.dataset.chapter = node.dataset.chapter;
		elem.dataset.page = node.dataset.page;
	})

	attach();

	if(last)
	{
		dest.querySelector('.page__control__down').style.opacity = '0';
	}

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
	if(his)
	{
		try
		{
			localStorage.setItem('c', his.t_chapter);
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
	l.style.opacity = '0';
	
	setTimeout(function() {
		r.classList.add('col-md-12');
		r.classList.add('fullWidth');
		active.querySelector('.content__row').removeAttribute('style');
		
		if(window.innerWidth >= 768)
		{
			r.querySelector('.card__bar').style.width = "30%";
		}

	},600);
}

function cardPortrait()
{
	let r = document.querySelector('.chapter__template__right');
	let l = document.querySelector('.chapter__template__left');
	let active = r.querySelector('.active--card');

	r.classList.remove('fullWidth','d-flex','justify-content-center');

	setTimeout(function() {
		r.classList.remove('card--full');
		l.removeAttribute('style');
		r.classList.remove('col-md-12');
		active.querySelector('.content__container').classList.remove('fullWidth--dark');
		active.querySelector('.page__control').classList.remove('page__control--dark')
		active.querySelector('.page__control').classList.remove('page__control--dark--null');
	},600);

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
	else if(mode == 'DN')
	{
		active.querySelector('.content__container').classList.add('fullWidth--dark');
		active.querySelector('.page__control').classList.add('page__control--dark');
		active.querySelector('.content__container').classList.add('fullWidth--dark--null');
	}
	else if(mode == 'DN81')
	{
		active.querySelector('.content__container').classList.add('fullWidth--dark');
		active.querySelector('.page__control').classList.add('page__control--dark');
		active.querySelector('.content__container').classList.add('fullWidth--dark--DN81');
	}
	else if(mode == 'DN82')
	{
		active.querySelector('.content__container').classList.add('fullWidth--dark');
		active.querySelector('.page__control').classList.add('page__control--dark');
		active.querySelector('.content__container').classList.add('fullWidth--dark--DN82');
	}
	else
	{
		active.querySelector('.content__container').classList.remove('fullWidth--dark');
		active.querySelector('.page__control').classList.remove('page__control--dark');
		active.querySelector('.content__container').classList.remove('fullWidth--dark--null');
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
	showChapters,
	checkState,
	unload,
	attach
}

export default util;