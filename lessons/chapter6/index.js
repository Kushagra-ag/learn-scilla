;
import template from '../data/template.js';
import { chapter6 } from '../data/data.js';
import { page1, page2, page3, page4, page5, page6, page7, page8 } from '../pages.js';

let chapter = [ page1, page2, page3, page4, page5, page6, page7, page8 ];

let data = Object.entries(chapter6);
let i=0;

while(i<8)
{
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "6";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	if(i==5 || i==6)
		chapter[i].querySelector('.content').innerHTML = data[i][1].body;
	else
		chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	if(i==5)
		chapter[i].dataset.mode = 'DN';

	chapter[i].querySelector('.small').innerHTML = `${i+1}/8`;

	i++;
}

export default chapter;