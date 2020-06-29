import { myDNS } from './myDNS.js';
import { $ajax } from './$ajax.js';
import { getCookie } from './cookie.js';
import { effect } from './cart_effect.js';
function render() {
    const phpip = `${myDNS}php/`;
    const nav = document.querySelector('nav');
    // 判断是否登录，如果没有登录，则跳回主页
    if (!getCookie('username')) {
        alert('信息已失效，请重新登录');
        location.href = `${myDNS}src/index.html`;
    };



    // 封装函数实现商品列表的拼接
    $ajax({
        url: phpip + 'cart.php',
        dataType: 'json'
    }).then(function (echo) {
        // 获取对应的cookie转换成数组
        if (localStorage.getItem('sid') && localStorage.getItem('num')) {
            let sidarr = localStorage.getItem('sid').split(',');
            let numarr = localStorage.getItem('num').split(',');
            for (let j = 0; j < sidarr.length; j++) {
                for (let i = 0; i < echo.length; i++) {
                    if (echo[i].sid === sidarr[j]) {
                        let strhtml = '';
                        strhtml += `
                            <li>
                                <input class="select" type="checkbox">
                                <div class="information">
                                    <a href="${myDNS}src/details.html?sid=${echo[i].sid}" class="pic">
                                        <img src="${echo[i].urllist.split(';')[0]}"
                                            alt="">
                                    </a>
                                    <a href="${myDNS}src/details.html?sid=${echo[i].sid}" class="title">
                                        <h2>${echo[i].title}</h2>
                                    </a>
                                    <div class="cs">
                                        <div class="color">
                                            颜色：
                                            <span>${echo[i].colortitle.split(';')[0]}</span>
                                        </div>
                                        <div class="size">
                                            尺码：
                                            <span>${echo[i].size.split(';')[0]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="price">
                                    ${echo[i].price}
                                </div>
                                <div class="number">
                                    <button class="subtract">-</button>
                                    <input type="text" value="${numarr[j]}" autocomplete="off" alt="${echo[i].sid}">
                                    <button class="add">+</button>
                                </div>
                                <div class="total_price">
                                    ${(echo[i].price * numarr[j]).toFixed(2)}
                                </div>
                                <div class="delect">
                                    删除
                                </div>
                            </li>
                        `;
                        nav.innerHTML += strhtml;
                    }
                }
            }
        };
        effect();
    });
};
export { render };