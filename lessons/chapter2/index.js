;
import template from '../data/template.js';
import { chapter2 } from '../data/data.js';


let page1 = template.cloneNode(true);

page1.dataset.chapter = "2";
page1.setAttribute('data-page', '1')

page1.querySelector('.content__title>div').innerHTML = chapter2.page1.title;

page1.querySelector('.content__head').innerHTML = chapter2.page1.head;

page1.querySelector('.body').innerHTML = chapter2.page1.body;

page1.querySelector('.small').innerHTML = "1/15";


let page2 = template.cloneNode(true);

page2.dataset.chapter = "2";
page2.dataset.page = "2";

page2.querySelector('.content__title>div').innerHTML = chapter2.page2.title;

page2.querySelector('.content__head').innerHTML = chapter2.page2.head;

page2.querySelector('.body').innerHTML = chapter2.page2.body;

page2.querySelector('.small').innerHTML = "2/15";


let page3 = template.cloneNode(true);

page3.dataset.chapter = "2";
page3.dataset.page = "3";

page3.querySelector('.content__title>div').innerHTML = chapter2.page3.title;

page3.querySelector('.content__head').innerHTML = chapter2.page3.head;

page3.querySelector('.body').innerHTML = chapter2.page3.body;

page3.querySelector('.small').innerHTML = "3/15";


let page4 = template.cloneNode(true);

page4.dataset.chapter = "2";
page4.dataset.page = "4";

page4.querySelector('.content__title>div').innerHTML = chapter2.page4.title;

page4.querySelector('.content__head').innerHTML = chapter2.page4.head;

page4.querySelector('.body').innerHTML = chapter2.page4.body;

page4.querySelector('.small').innerHTML = "4/15";


let page5 = template.cloneNode(true);

page5.dataset.chapter = "2";
page5.dataset.page = "5";

page5.querySelector('.content__title>div').innerHTML = chapter2.page5.title;

page5.querySelector('.content__head').innerHTML = chapter2.page5.head;

page5.querySelector('.body').innerHTML = chapter2.page5.body;

page5.querySelector('.small').innerHTML = "5/15";


let page6 = template.cloneNode(true);

page6.dataset.chapter = "2";
page6.dataset.page = "6";

page6.querySelector('.content__title>div').innerHTML = chapter2.page6.title;

page6.querySelector('.content__head').innerHTML = chapter2.page6.head;

page6.querySelector('.body').innerHTML = chapter2.page6.body;

page6.querySelector('.small').innerHTML = "6/15";


let page7 = template.cloneNode(true);

page7.dataset.chapter = "2";
page7.dataset.page = "7";

page7.querySelector('.content__title>div').innerHTML = chapter2.page7.title;

page7.querySelector('.content__head').innerHTML = chapter2.page7.head;

page7.querySelector('.body').innerHTML = chapter2.page7.body;

page7.querySelector('.small').innerHTML = "7/15";


let page8 = template.cloneNode(true);

page8.dataset.chapter = "2";
page8.dataset.page = "8";

page8.querySelector('.content__title>div').innerHTML = chapter2.page8.title;

page8.querySelector('.content__head').innerHTML = chapter2.page8.head;

page8.querySelector('.body').innerHTML = chapter2.page8.body;

page8.querySelector('.small').innerHTML = "8/15";


let page9 = template.cloneNode(true);

page9.dataset.chapter = "2";
page9.dataset.page = "9";

page9.querySelector('.content__title>div').innerHTML = chapter2.page9.title;

page9.querySelector('.content__head').innerHTML = chapter2.page9.head;

page9.querySelector('.body').innerHTML = chapter2.page9.body;

page9.querySelector('.small').innerHTML = "9/15";


let page10 = template.cloneNode(true);

page10.dataset.chapter = "2";
page10.dataset.page = "10";

page10.querySelector('.content__title>div').innerHTML = chapter2.page10.title;

page10.querySelector('.content__head').innerHTML = chapter2.page10.head;

page10.querySelector('.body').innerHTML = chapter2.page10.body;

page10.querySelector('.small').innerHTML = "10/15";


const chapter = [ page1, page2, page3, page4, page5, page6, page7, page8, page9, page10 ];

export default chapter;