import { myDNS } from './myDNS.js';
import { $ajax } from './$ajax.js';
import { addEvent } from './addEvent.js';
// 瀑布流
function pbl() {
    const phpip = `${myDNS}php/`;
    let pbli = document.querySelectorAll('main nav li');
    $ajax({
        url: phpip + 'pbl_list.php',
        dataType: 'json'
    }).then(function (pbl_list) {
        getPbl(pbl_list);
        addEvent(window, 'scroll', function () {
            getMore(pbl_list);
        });
    });
    // 创建瀑布流
    function getPbl(pbl_list) {
        for (let value of pbl_list) {
            const cfigure = document.createElement('figure');
            const cspan = document.createElement('span');
            const cdiv = document.createElement('div');
            const ca = document.createElement('a');
            const csection = document.createElement('section');
            const csection2 = document.createElement('section');
            const cp = document.createElement('p');
            const cimg = document.createElement('img');
            const cfigcaption = document.createElement('figcaption');
            const live = document.querySelector('.live');
            live.onmouseover = function () {
                live.style.top = '-10px';
            };
            live.onmouseout = function () {
                live.style.top = '0';
            };
            cfigure.onmouseover = function () {
                cfigure.style.top = '-10px';
                ca.classList.add('show');
                cfigcaption.style.background = '#eee';
            };
            cfigure.onmouseout = function () {
                cfigure.style.top = '0';
                ca.classList.remove('show');
                cfigcaption.style.background = '#fff';
            };
            cimg.dataset.original = value.url;
            cimg.style.cssText = "opacity: 0;";
            for (let i = 0; i < value.text.split(';').length; i++) {
                if (value.text.split(';')[i] !== '') {
                    cfigcaption.classList.add('show');
                    cfigcaption.innerHTML += `<p>${value.text.split(';')[i]}</p>`;
                }
            };
            ca.href = `${myDNS}src/details.html?sid=${value.sid}`;
            cp.innerHTML = value.hover;
            cdiv.appendChild(cimg);
            cdiv.appendChild(ca);
            ca.appendChild(csection);
            ca.appendChild(csection2);
            ca.appendChild(cp);
            cfigure.appendChild(cdiv);
            cfigure.appendChild(cspan);
            cfigure.appendChild(cfigcaption);
            pbli[getminli()].appendChild(cfigure);
            // 懒加载
            lazyLoad(cimg);
            addEvent(window, 'scroll', function () {
                lazyLoad(cimg);
            })
        }
    };
    // 得到最小高度的li
    function getminli() {
        let minindex = 0;
        let minvalue = pbli[minindex].offsetHeight;
        for (let i = 0; i < pbli.length; i++) {
            if (pbli[i].offsetHeight < minvalue) {
                minvalue = pbli[i].offsetHeight;
                minindex = i;
            }
        }
        return minindex;
    };
    // 下拉加载更多
    function getMore(pbl_list) {
        let ch = document.documentElement.clientHeight;
        let st = document.documentElement.scrollTop;
        let minheight = pbli[getminli()].offsetHeight;
        if (minheight < ch + st) {
            getPbl(pbl_list);
        }
    };
    // 懒加载
    function lazyLoad(cimg) {
        if (cimg.getBoundingClientRect().top < document.documentElement.clientHeight) {// 判断图片是否在可视区内
            (function () {
                setTimeout(function () {
                    cimg.style.cssText = "transition: opacity 1.3s; opacity: 1;";
                    cimg.src = cimg.dataset.original;
                }, 100)
            })()
        }
    }
};
export { pbl };