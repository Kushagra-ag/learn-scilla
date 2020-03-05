;
import template from '../data/template.js';
import { chapter9 } from '../data/data.js';
import { page1, page2, page3, page4, page5, page6, page7 } from '../pages.js';

let chapter = [ page1, page2, page3, page4, page5, page6, page7 ];

let data = Object.entries(chapter9);
let i=0;

while(i<7)
{
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "9";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	chapter[i].querySelector('.small').innerHTML = `${i+1}/7`;

	i++;
}

export default chapter;