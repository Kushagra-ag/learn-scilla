import captions from '../lessons/data/data.js';
import forms, { _info } from './formActions.js';
import chapters, { total } from '../lessons/index.js';
import images from '../images/index.js';

var his, p=1, c=1, id=1, w = window.innerWidth >= 768 ? true : false;

function contentUpdate(c, p, time) {

    let image = document.querySelector('.chapter__image');
    let bar = document.querySelector('.progress');
    let caption = document.querySelector('.caption');
    let node = clone(chapters[c - 1][p - 1]);

    image.classList.add('slide-up');
    caption.classList.add('scale');

    if (!time && node.dataset.orient == 'L')
        cardLandscape(node.dataset.mode);

    setTimeout(function() {
        image.src = images[c - 1][p - 1];
        caption.innerHTML = captions[c - 1][p - 1] || '';

        bar.style.width = (p / (total[c - 1])) * 100 + '%';

    }, time);

    return node;

}

function clone(node) {
    let cloned = node.cloneNode(true);

    return cloned;
}

/*-----Function for lifting homepage-----*/
function showIndex() {
    let home = document.querySelector('.homepage');
    let reg = document.forms.register;


    history.pushState({
        h_chapter: -1,
        h_page: -1,
        t_chapter: 0,
        t_page: 0,
        id: -1,
    }, null, `./`);

    his = window.history.state;
    console.log(window.history.state);

    setTimeout(function() {
        reg.style.display = "block";
        home.style.marginTop = "-200vh";

    }, 500);
}

function showChapters(e) {
    console.log("in show chapters func");
    let ch = document.querySelector('.chapter__template');
    let index = document.querySelector('.index');
    let containers = document.querySelectorAll('.content__container'),
        node;
    c = parseInt(e.currentTarget.dataset.chapter);
    p = 1;

    $.ajax({
            type: 'POST',
            url: '/progress/check',
            data: {
                chapter: c
            },
            dataType: 'json'
        })
        .done(res => {

            console.log('in done');
            document.onkeyup = pageChange;

            if (res.err) {
                console.log('shit');
                return _info(res.err, res.msg);
            } else {
                node = contentUpdate(c, 1, 0);

                containers[1].replaceWith(node);
                [...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
                    elem.dataset.id = node.parentNode.dataset.id;
                    elem.dataset.chapter = node.dataset.chapter;
                    elem.dataset.page = node.dataset.page;
                });

                attach();


                node.removeAttribute('style');


                history.pushState({
                    h_chapter: 0,
                    t_chapter: c,
                    id: 1,
                }, null, `../lessons/chapter${c}`);

                his = window.history.state;



                setTimeout(function() {
                    ch.style.display = "block";
                    index.style.marginTop = "-300vh";

                }, 500);
            }



        })
        .fail(err => {
            return _info(err.err, err.msg);
        })
}

function reset() {
    document.querySelector(`.y[data-id='0']`).dataset.class = 'd__up';
    document.querySelector(`.y[data-id='1']`).dataset.class = 'd__current';
    document.querySelector(`.y[data-id='2']`).dataset.class = 'd__behind';
    cardPortrait();
}

function hideChapters() {
    let ch = document.querySelector('.chapter__template');
    let index = document.querySelector('.index');
    document.onkeyup = null;

    reset();

    index.style.marginTop = "0";

    setTimeout(function() {
        ch.style.display = "none";

    }, 1000);

    try {
        if (his.t_chapter > parseInt(localStorage.getItem('c')))
            localStorage.setItem('c', his.t_chapter);
        localStorage.setItem('v', 'y');
    } catch {}
}

function hideIndex() {
    let home = document.querySelector('.homepage');
    let index = document.querySelector('.index');

    home.style.marginTop = "0";

    setTimeout(function() {
        index.style.display = "none";

    }, 1000);
}

function pageSelect(dir) {
    if(dir == "up") {
        if(c == 0 && p == 0)
            return {c: -1, p: -1}
        else if(c == 1 && p == 1)
            return {c: 0, p: 0}
        else if(c == 2 && p == 1)
            return {c: 1, p: 4}
        else if(c == 3 && p == 1)
            return {c: 2, p: 20}
        else if(c == 4 && p == 1)
            return {c: 3, p: 11}
        else if(c == 5 && p == 1)
            return {c: 4, p: 12}
        else if(c == 6 && p == 1)
            return {c: 5, p: 15}
        else if(c == 7 && p == 1)
            return {c: 6, p: 8}
        else if(c == 8 && p == 1)
            return {c: 7, p: 13}
        else if(c == 9 && p == 1)
            return {c: 8, p: 23}
        else
            return {c: c, p: p - 1}
    } else {
        if(c == 1 && p == 4)
            return {c: 2, p: 1}
        else if(c == 2 && p == 20)
            return {c: 3, p: 1}
        else if(c == 3 && p == 11)
            return {c: 4, p: 1}
        else if(c == 4 && p == 12)
            return {
                c: 5,
                p: 1
            }
        else if(c == 5 && p == 15)
            return {
                c: 6,
                p: 1
            }
        else if(c == 6 && p == 8)
            return {
                c: 7,
                p: 1
            }
        else if(c == 7 && p == 13)
            return {c: 8, p: 1}
        else if(c == 8 && p == 23)
            return {c: 9, p: 1}
        else if(c == 9 && p == 7)
            return {c: null, p: null}
        else
            return {c: c, p: p + 1}
    }
}

function pageChange(e) {
    
    let dir;

    if(e.keyCode === 40) {
        dir = 'down'
    } else if(e.keyCode === 38){
        dir = 'up'
    } else if(!e.keyCode) {
        let elem = event.currentTarget;
        dir = elem.dataset.dir;
    }

    
    console.log(c,p)

    let host = {
        chapter: c,
        page: p,
    };

    ({c, p} = pageSelect(dir));

    forms(c, p);

    if(p == null && c == null)
        return;

    let target = {
        chapter: c,
        page: p,
    }

    let flag = orientSelect(dir) || 0;

    if(dir === 'down')
        showPageNext(host, target, flag);
    else
        showPagePrev(host, target, flag);
}

function orientSelect(dir) {
    window.scrollTo(0, 0);

    let flag = 0;
    if(dir == "down") {
        if (c == 2) {
            if (p == 12)
                flag = 1;
            else if (p == 18)
                flag = -1
        } else if (c == 3) {
            if (p == 1)
                flag = 1;
        } else if (c == 9) {
            if (p == 1)
                flag = -1;
        }
    } else {
        if (c == 2) {
            if (p == 11)
                flag = -1;
            else if (p == 17)
                flag = 1;
            else if (p == 20)
                flag = -1;
        } else if (c == 8) {
            if (p == 23)
                flag = 1;
        }
    }
    return flag;
}

function showPageNext(h, t, f) {

    let bar = document.querySelector('.progress');
    let host = document.querySelector(`.y[data-id='${id}']`);
    let dest = document.querySelector(`.y[data-id='${(id+1)%3}']`);
    let other = document.querySelector(`.y[data-id='${(id+2)%3}']`);

    host.classList.remove('active--card');
    other.classList.remove('active--card');
    dest.classList.add('active--card');

    let node = contentUpdate(t.chapter, t.page, 600);
    dest.querySelector('.content__container').replaceWith(node);

    let mode = dest.querySelector('.content__container').dataset.mode;
    let orient = dest.querySelector('.content__container').dataset.orient;
    let last = dest.querySelector('.content__container').dataset.last;

    if(f == 1) {
        dest.firstElementChild.firstElementChild.style.opacity = '0';
        setTimeout(cardLandscape, 600, mode);
    } else if(f == -1) {
        setTimeout(cardPortrait, 600);
    }

    theme(mode, orient);

    [...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
        elem.dataset.id = node.parentNode.dataset.id;
        elem.dataset.chapter = node.dataset.chapter;
        elem.dataset.page = node.dataset.page;
    })

    attach();

    if(last) {
        dest.querySelector('.page__control__down').style.zIndex = '-1';
        document.onkeyup = null;
    } else {
        document.onkeyup = pageChange;
    }


    node.style.display = "block";
    host.setAttribute('data-class', 'd__up');


    setTimeout(function() {

        dest.dataset.class = "d__current"
        other.dataset.class = "d__behind";

        host.querySelector('.content__container').style.display = "none";
    }, 600)

    id = (id + 1)%3;
    history.replaceState({
        h_chapter: h.chapter,
        h_page: h.page,
        t_chapter: t.chapter,
        t_page: t.page,
        id: id,
    }, null, `./chapter${t.chapter}`);

    his = window.history.state;
}

function showPagePrev(h, t, f) {
    
    let bar = document.querySelector('.progress');
    if(t.page == 0 && t.chapter == 0) {

        hideChapters();
        history.replaceState({
            h_chapter: 1,
            h_page: 1,
            t_chapter: 0,
            t_page: 0,
            id: -1,
        }, null, `./`);

        his = window.history.state;
        return
    }

    let host = document.querySelector(`.y[data-id='${id}']`);
    let dest = document.querySelector(`.y[data-id='${(id+2)%3}']`);
    let other = document.querySelector(`.y[data-id='${(id+1)%3}']`);

    host.classList.remove('active--card');
    other.classList.remove('active--card');
    dest.classList.add('active--card');

    let node = contentUpdate(t.chapter, t.page, 600);

    dest.querySelector('.content__container').replaceWith(node);

    let mode = dest.querySelector('.content__container').dataset.mode;
    let orient = dest.querySelector('.content__container').dataset.orient;
    let last = dest.querySelector('.content__container').dataset.last;

    if(f == 1) {
        dest.firstElementChild.firstElementChild.style.opacity = '0';
        setTimeout(cardLandscape, 600, mode);
    } else if(f == -1) {
        setTimeout(cardPortrait, 600, mode);
    }
    theme(mode, orient);

    [...node.getElementsByClassName('page__control__elem')].forEach((elem) => {
        elem.dataset.id = node.parentNode.dataset.id;
        elem.dataset.chapter = node.dataset.chapter;
        elem.dataset.page = node.dataset.page;
    })

    attach();

    if(last) {
        dest.querySelector('.page__control__down').style.zIndex = '-1';
        document.onkeyup = null;
    } else {
        document.onkeyup = pageChange;
    }

    node.style.display = "block";
    host.dataset.class = "u__behind";
    dest.dataset.class = "u__current";

    setTimeout(function() {
        other.dataset.class = "u__up";
        host.querySelector('.content__container').style.display = "none";

    }, 600)

    id = (id + 2)%3;
    history.replaceState({
        h_chapter: h.chapter,
        t_chapter: t.chapter,
        id: id,
    }, null, `./chapter${t.chapter}`);

    his = window.history.state;
}

function checkState(e) {

    let host;

    let target = {
        chapter: 0,
        page: 0
    }

    showPagePrev(host, target, -1, 0);
}

function cardLandscape(mode) {
    let r = document.querySelector('.chapter__template__right');
    let l = document.querySelector('.chapter__template__left');
    let active = r.querySelector('.active--card');

    r.classList.add('card--full');
    l.style.zIndex = '5';
    l.style.opacity = '0';
    setTimeout(function() {
        r.classList.add('col-md-12');
        r.classList.add('fullWidth');
        active.querySelector('.content__row').removeAttribute('style');

        if(!mode) {
            active.querySelector('.content').style.maxWidth = '75%';
            active.querySelector('.content').style.width = '75%';
        }

        if(w) {
            r.querySelector('.card__bar').style.width = "30%";
        }

    }, 600);
}

function cardPortrait() {
    let r = document.querySelector('.chapter__template__right');
    let l = document.querySelector('.chapter__template__left');
    let active = r.querySelector('.active--card');

    r.classList.remove('fullWidth', 'd-flex', 'justify-content-center');

    setTimeout(function() {
        r.classList.remove('card--full');
        l.removeAttribute('style');
        r.classList.remove('col-md-12');
        active.querySelector('.content__container').classList.remove('fullWidth--dark');
        active.querySelector('.page__control').classList.remove('page__control--dark')
        active.querySelector('.page__control').classList.remove('page__control--dark--null');
        active.querySelector('.content').removeAttribute('style');
    }, 600);

    r.querySelector('.card__bar').removeAttribute('style');
}

function theme(mode, o) {
    let active = document.querySelector('.active--card');
    if(mode && mode.search("D") != -1) {
        active.querySelector('.content__container').classList.add('fullWidth--dark');
        active.querySelector('.page__control').classList.add('page__control--dark');
        active.querySelector('.content').removeAttribute('style');
        active.querySelector('.content').style.alignSelf = 'stretch';

        if (mode == 'DN') {
            active.querySelector('.content__container').classList.add('fullWidth--dark--null');
        } else if (mode == 'DN81') {
            active.querySelector('.content__container').classList.add('fullWidth--dark--DN81');
        } else if (mode == 'DN82') {
            active.querySelector('.content__container').classList.add('fullWidth--dark--DN82');
        }

    } else {
        active.querySelector('.content__container').classList.remove('fullWidth--dark');
        active.querySelector('.page__control').classList.remove('page__control--dark');
        active.querySelector('.content__container').classList.remove('fullWidth--dark--null');
        if(o == 'L' && w) {
            active.querySelector('.content').style.maxWidth = '75%';
            active.querySelector('.content').style.width = '75%';
        }
    }
}

function attach() {
    setTimeout(function() {
        [...document.getElementsByClassName('page__control__elem')].forEach((elem) => {
            elem.addEventListener('click', pageChange);
            if(elem.classList.contains('next'))
                elem.addEventListener('click', updateProgress);
        });
    }, 600);
};

function updateProgress() {
    let elem = event.currentTarget;
    let c = parseInt(elem.dataset.chapter), max=1;

    let data = {
        chapter: c
    };

    $.ajax({
            type: 'POST',
            url: '/progress/update',
            data: data,
            dataType: 'json'
        })
        .done(res => {
            console.log(res);
            if(!res.noAction) {
                _info(res.err || res.success, res.msg)
                let amt = parseInt(document.querySelector('.walletAmt').innerHTML);
                document.querySelector('.walletAmt').innerHTML = `${amt + 100} ZILs`;
            }
        })
        .fail(err => {
            return _info(err.err, err.msg);
        })

        document.querySelectorAll('.index__chapter').forEach(elem => {
            if(elem.classList.contains('active')) {
                
                max = elem.dataset.chapter;
                elem.classList.remove('active');
            }
        });
        max = max>c+1 ? max : c+1;
        document.querySelector(`.index__chapter[data-chapter='${max}']`).classList.add('active');
}

const util = {
    contentUpdate,
    showIndex,
    showChapters,
    checkState,
    attach
}

export default util;