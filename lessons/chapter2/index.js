;
import template from '../data/template.js';
import { chapter2 } from '../data/data.js';
import { page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20 } from '../pages.js';

let chapter = [ page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20 ];

let data = Object.entries(chapter2);
let i=0;

while(i<20)
{
	chapter[i] = template.cloneNode(true);

	chapter[i].dataset.chapter = "2";
	chapter[i].dataset.page = (i+1);

	chapter[i].querySelector('.content__title>div').innerHTML = data[i][1].title;

	chapter[i].querySelector('.content__head').innerHTML = data[i][1].head;

	chapter[i].querySelector('.body').innerHTML = data[i][1].body;

	if(i==12 || i==14)
		chapter[i].dataset.mode = 'D';

	chapter[i].querySelector('.small').innerHTML = `${i+1}/20`;

	i++;
}

export default chapter;