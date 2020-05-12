import template from '../data/template.js';
import { chapter7 } from '../data/data.js';

let chapter = new Array(13);
//console.log(chapter[0]);

let data = Object.entries(chapter7);
let i=0;

while(i<13) {
	
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "7";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	if(i==7 || i==8)
		chapter[i].querySelector('.content').innerHTML = data[i][1].body;
	else
		chapter[i].querySelector('.body').innerHTML = data[i][1].body;
	if(i==7)
		chapter[i].dataset.mode = 'DN';

	chapter[i].dataset.orient = 'L';

	chapter[i].querySelector('.small').innerHTML = `${i+1}/13`;

	if(i==12)
		chapter[i].dataset.last = true;

	i++;
}




export default chapter;