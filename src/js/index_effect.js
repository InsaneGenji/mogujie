import { addEvent } from './addEvent.js';
import { hover } from './hover.js';
import { getCookie, delCookie } from './cookie.js';
function effect() {
    const download = document.querySelector('#top_search section a:nth-of-type(5)');
    const appCode = document.querySelector('.appCode');
    const topSearch = document.querySelector('#top_search');
    const search = document.querySelector('#search');
    const store = document.querySelector('main .center section');
    const aside = document.querySelector('aside');
    const section = document.querySelectorAll('aside section');
    const suspension = document.querySelector('#suspension');
    const closeBtn = document.querySelector('#suspension section div');
    const arrow = document.querySelector('#top_search section a:last-of-type span');
    const userImg = document.querySelector('#top_search section a:last-of-type img');
    const userName = document.querySelector('#top_search section a:last-of-type p');
    const userMenu = document.querySelector('#top_search .top_usermenu');
    const quit = document.querySelector('#top_search section .top_usermenu li:last-of-type');
    // 顶部悬浮栏登录   改变用户图标、名称
    if (getCookie('username')) {
        userImg.parentNode.removeAttribute("href");
        change(123, "miku", 14);
        userName.innerHTML = getCookie('username');
        arrow.classList.add('show');
        hover(userImg.parentNode, userMenu);
        quit.onclick = function () {
            delCookie('username');
            userImg.parentNode.href = "login&register.html";
            change(145, "login", 12);
            userName.innerHTML = '登录';
            userImg.parentNode.onmouseover = null;
            location.href = '';
        }
    };
    function change(right, src, fontsize) {
        userImg.parentNode.style.right = right + "px";
        userImg.src = "img/" + src + ".png";
        userName.style.fontSize = fontsize + "px";
    };



    hover(download, appCode);
    const scTH = search.offsetTop + search.offsetHeight;
    const stT = store.offsetTop;
    const stTH = store.offsetTop + store.offsetHeight;
    addEvent(window, 'scroll', function () {
        let ddST = document.documentElement.scrollTop;
        // 顶部悬浮搜索栏&楼梯显示
        if (ddST > scTH) {
            topSearch.style.top = '0';
            aside.classList.add('show');
        } else {
            topSearch.style.top = '-70px';
            aside.classList.remove('show');
        };
        // 楼梯
        if (ddST < scTH + stT - 211) {
            removeActive();
            section[0].classList.add('active');
        } else if (ddST > scTH + stT - 211 && ddST < scTH + stTH - 211) {
            removeActive();
            section[1].classList.add('active');
        } else {
            removeActive();
            section[2].classList.add('active');
        }
    });
    // 楼梯按钮
    section[0].onclick = function () {
        document.documentElement.scrollTop = scTH;
    };
    section[1].onclick = function () {
        document.documentElement.scrollTop = scTH + stT - 70;
    };
    section[2].onclick = function () {
        document.documentElement.scrollTop = scTH + stTH - 70;
    };
    section[3].onclick = function () {
        document.documentElement.scrollTop = 0;
    };
    // 底部悬浮广告栏关闭按钮
    closeBtn.onclick = function () {
        suspension.classList.add('hide');
    };
    // 去除楼梯激活样式
    function removeActive() {
        for (let i = 0; i < section.length; i++) {
            section[i].classList.remove('active');
        }
    }
};
export { effect };