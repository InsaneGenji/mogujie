import { hover } from './hover.js';
import { getCookie, delCookie } from './cookie.js';
function pblic() {
    const abUs = document.querySelector('header section ul li:nth-of-type(4)');
    const aboutUs = document.querySelector('.aboutUs');
    const mdl = document.querySelectorAll('header section ul li .aboutUs .top div:nth-of-type(4) ul li');
    const acs = document.querySelectorAll('header section ul li .aboutUs .top div:nth-of-type(4) ul li img');
    const cg = document.querySelector('#search section .category');
    const category = document.querySelector('#search section .category article');
    const download = document.querySelector('#search section a:nth-of-type(4)');
    const appCode = document.querySelector('#search section a:nth-of-type(4) .appCode');
    const mobiledl = document.querySelectorAll('footer .top div:nth-of-type(4) ul li');
    const appCodes = document.querySelectorAll('footer .top div:nth-of-type(4) ul li img');
    const arrow = document.querySelector('#search section a:last-of-type span');
    const userImg = document.querySelector('#search section a:last-of-type img');
    const userName = document.querySelector('#search section a:last-of-type p');
    const userMenu = document.querySelector('#search .usermenu');
    const quit = document.querySelector('#search section .usermenu li:last-of-type');
    hover(abUs, aboutUs);
    hover(cg, category);
    hover(download, appCode);
    for (let i = 0; i < mdl.length; i++) {
        hover(mdl[i], acs[i]);
        hover(mobiledl[i], appCodes[i]);
    }


    // 登录   改变用户图标、名称
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
    }
};
export { pblic };