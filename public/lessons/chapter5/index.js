import template from '../data/template.js';
import { chapter5 } from '../data/data.js';

let chapter = new Array(15);


let data = Object.entries(chapter5);
let i=0;

while(i<15) {
	
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "5";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	if(i==2 || i==10)
		chapter[i].querySelector('.content').innerHTML = data[i][1].body;
	else
		chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	if(i==2)
		chapter[i].dataset.mode = 'DN';
	
	chapter[i].dataset.orient = 'L';

	chapter[i].querySelector('.small').innerHTML = `${i+1}/15`;

	if(i==14)
		chapter[i].dataset.last = true;

	i++;
}


export default chapter;