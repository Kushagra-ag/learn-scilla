;import template from '../content__template.js';


console.log(template);

var e = template;


e.dataset.chapter = "1";
e.dataset.page = "3";

e.querySelector('.content__title>div').innerHTML = "aaaaaaaaaaaaaa";

e.querySelector('.content__head').innerHTML = "bbbbbbbbbbb3";

e.querySelector('.small').innerHTML = "3/15";

export default e;

// let body = template.querySelector('.content__head>div:nth-child(2)');

// body.innerHTML = "ccccccc";


// console.log(template);

// export var d = template;
