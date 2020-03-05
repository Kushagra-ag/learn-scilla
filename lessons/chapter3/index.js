;
import template from '../data/template.js';
import { chapter3 } from '../data/data.js';
import { page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11 } from '../pages.js';

let chapter = [ page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11 ];

let data = Object.entries(chapter3);
let i=0;

while(i<11)
{
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "3";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	if(i==1 || i==3 || i==4)
		chapter[i].querySelector('.content').innerHTML = data[i][1].body;
	else
		chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	if(i==1 || i==3)
		chapter[i].dataset.mode = 'DN';

	// if(i==3)
	// 	chapter[i].style.alignContent = 'unset';

	chapter[i].querySelector('.small').innerHTML = `${i+1}/11`;

	if(i==10)
		chapter[i].dataset.last = true;

	i++;
}


export default chapter;