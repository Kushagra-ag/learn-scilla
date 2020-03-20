;
const redirect = () => new Promise((resolve) => {
	console.log(window.history.state);
	if(window.history.state)
	{
		let his = window.history.state;
		//history.replaceState(his,null,'./');
	}

	resolve();
});

const callback = () =>
{
	window.location.href = '../../';
};

redirect().then(callback);