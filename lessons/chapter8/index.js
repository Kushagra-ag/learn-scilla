;
import template from '../data/template.js';
import { chapter8 } from '../data/data.js';
import { page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23 } from '../pages.js';

let chapter = [ page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23 ];

let data = Object.entries(chapter8);
let i=0;

while(i<23)
{
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "8";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	if(i==2)
		chapter[i].querySelector('.content').innerHTML = data[i][1].body;
	else
		chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	if(i==1)
		chapter[i].dataset.mode = 'DN81';
	else if(i==2)
		chapter[i].dataset.mode = 'DN82';

	chapter[i].querySelector('.small').innerHTML = `${i+1}/23`;

	i++;
}

export default chapter;