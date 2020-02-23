;import template from '../content__template.js';


console.log(template);

var d = template;

d.dataset.chapter = "1";
d.dataset.page = "2";

d.querySelector('.content__title>div').innerHTML = "aaaaaaaaaaaaaa";

d.querySelector('.content__head').innerHTML = "bbbbbbbbbbb2";

d.querySelector('.small').innerHTML = "2/15";

export default d;

// let body = template.querySelector('.content__head>div:nth-child(2)');

// body.innerHTML = "ccccccc";


// console.log(template);

// export var d = template;
