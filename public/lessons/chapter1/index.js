import template from '../data/template.js';
import { chapter1 } from '../data/data.js';

let chapter = new Array(4);

let data = Object.entries(chapter1);
let i=0;

while(i<4) {
	
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "1";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	chapter[i].querySelector('.small').innerHTML = `${i+1}/4`;

	if(i==3)
		chapter[i].dataset.last = true;

	i++;
}

export default chapter;