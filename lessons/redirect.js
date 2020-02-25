;
const redirect = () => new Promise((resolve) => {
	console.log(window.history.state);
	if(window.history.state)
	{
		console.log("aaaaaaa");
		let his = window.history.state;

		history.replaceState(his,null,'./');
	}

	resolve();
});

const callback = () =>
{
	window.location.href = '../../';
};

redirect().then(callback);