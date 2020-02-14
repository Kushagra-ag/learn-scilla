;
window.onload = function()
{
	let z = 200;
	let containers = document.getElementsByClassName('content__container');
	let nav = (document.querySelector('.navbar')).getBoundingClientRect();
	let home = document.querySelector('.homepage');
	containers[0].removeAttribute('style');

	

	[...containers].forEach((item)=>{
		item.style.zIndex = z--;
	});

	// home.style.height = window.innerHeight - nav.height + "px";
	// console.log(window.innerHeight);
}

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

function pageChange()
{
	let elem = event.currentTarget;
	let chapter = elem.dataset.chapter;
	let page = elem.dataset.page;
	let dir = elem.dataset.dir;
	
	// console.log(event.target);
	// console.log(elem);

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

	image.classList.add('img__scale');

	setTimeout(function(){
		image.src = `./images/img${page}.png`;
		image.classList.remove('img__scale');
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
