;
import template from '../data/template.js';
import { chapter1 } from '../data/data.js';


let page1 = template.cloneNode(true);

page1.dataset.chapter = "1";
page1.setAttribute('data-page', '1')

page1.querySelector('.content__title>div').innerHTML = chapter1.page1.title;

page1.querySelector('.content__head').innerHTML = chapter1.page1.head;

page1.querySelector('.body').innerHTML = chapter1.page1.body;

page1.querySelector('.small').innerHTML = "1/15";


let page2 = template.cloneNode(true);

page2.dataset.chapter = "1";
page2.dataset.page = "2";

page2.querySelector('.content__title>div').innerHTML = chapter1.page2.title;

page2.querySelector('.content__head').innerHTML = chapter1.page2.head;

page2.querySelector('.body').innerHTML = chapter1.page2.body;

page2.querySelector('.small').innerHTML = "2/15";


let page3 = template.cloneNode(true);

page3.dataset.chapter = "1";
page3.dataset.page = "3";

page3.querySelector('.content__title>div').innerHTML = chapter1.page3.title;

page3.querySelector('.content__head').innerHTML = chapter1.page3.head;

page3.querySelector('.body').innerHTML = chapter1.page3.body;

page3.querySelector('.small').innerHTML = "3/15";


let page4 = template.cloneNode(true);

page4.dataset.chapter = "1";
page4.dataset.page = "4";

page4.querySelector('.content__title>div').innerHTML = chapter1.page4.title;

page4.querySelector('.content__head').innerHTML = chapter1.page4.head;

page4.querySelector('.body').innerHTML = chapter1.page4.body;

page4.querySelector('.small').innerHTML = "4/15";

const chapter = {
	page1: page1,
	page2: page2,
	page3: page3,
	page4: page4,
}

export default chapter;