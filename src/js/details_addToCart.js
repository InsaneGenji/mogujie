import { myDNS } from './myDNS.js';
import { getCookie } from './cookie.js';
function addToCart() {
    const sid = location.search.substring(1).split('=')[1];
    const num = document.querySelector('.number input');
    const cartbtn = document.querySelector('.cart');
    let sidarr = []; //存放sid 
    let numarr = []; //存放数量
    // 判断购物车是否有商品
    if (localStorage.getItem('sid') && localStorage.getItem('num')) {
        sidarr = localStorage.getItem('sid').split(',');
        numarr = localStorage.getItem('num').split(',');
    }
    cartbtn.onclick = function () {
        if (!getCookie('username')) {
            alert('信息已失效，请重新登录');
            location.href = `${myDNS}src/login&register.html`;
        } else {
            alert('商品添加成功');
        }
        // 判断是否第一次添加该商品
        if (sidarr.indexOf(sid) !== -1) {
            let index = sidarr.indexOf(sid);
            numarr[index] = parseInt(numarr[index]) + parseInt(num.value);
            localStorage.setItem('num', numarr.toString());
        } else {
            sidarr.push(sid);
            localStorage.setItem('sid', sidarr.toString());
            numarr.push(num.value);
            localStorage.setItem('num', numarr.toString());
        }
    }
};
export { addToCart };