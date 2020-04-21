;
$(document).ready(function() {

	
	const totalChapters = 9;

	if(localStorage.getItem('v'))
	{
		[...document.getElementsByClassName('learn')].forEach((item) => {
			item.innerHTML = "Continue";
		});

		let c = parseInt(localStorage.getItem('c'))||0;
		document.querySelector('.status').style.width = ((c/totalChapters)*100)+'%';
	}

	// history.pushState(null,'homepage','./');
	console.log(window.history.state);


});

function showIndex()
{
	let home = document.querySelector('.homepage');
	let form = document.querySelector('.sign');

	setTimeout(function(){window.location.href = "./auth/login"},1000);

	// history.pushState({
	// 	h_chapter: -1,
	// 	h_page: -1,
	// 	t_chapter: 0,
	// 	t_page: 0,
	// 	id: -1,
	// },null,`./`);

	// let his = window.history.state;
	// console.log(window.history.state);

	setTimeout(function()
	{
		//form.style.display = "flex";
		home.style.marginTop="-200vh";

	},500);
}


// Adding event listeners
[...document.getElementsByClassName('card')].forEach((elem) => {
	elem.addEventListener('click', showIndex);
});