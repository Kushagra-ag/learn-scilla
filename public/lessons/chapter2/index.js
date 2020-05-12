import template from '../data/template.js';
import { chapter2 } from '../data/data.js';

let chapter = new Array(20);

let data = Object.entries(chapter2);
let i=0;

while(i<20) {
	
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "2";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	if(i==14)
		chapter[i].classList.add('msg');
	if(i==12 || i==14)
		chapter[i].dataset.mode = 'D';

	if(i>11 && i<18)
		chapter[i].dataset.orient = 'L';

	chapter[i].querySelector('.small').innerHTML = `${i+1}/20`;

	if(i==7 || i==9 || i==17 || i==19)
		chapter[i].dataset.last = true;

	i++;
}

export default chapter;