import { myDNS } from './myDNS.js';
import { $ajax } from './$ajax.js';
function render() {
    const sid = location.search.substring(1).split('=')[1];
    const phpip = `${myDNS}php/`;
    const smallpic = document.querySelector('.smallpic');
    const piclist = document.querySelector('.pic_list nav ul');
    let piclisthtml = '';
    const rbtn = document.querySelector('.pic_list button:last-of-type');
    const bpic = document.querySelector('.bpic');
    const title = document.querySelector('h2');
    const price = document.querySelector('.price span');
    const color = document.querySelector('.color ul');
    let colorhtml = '';
    const size = document.querySelector('.size ul');
    let sizehtml = '';
    // 将sid传给后端，后端返回对应的数据
    $ajax({
        url: phpip + 'details.php',
        data: {
            id: sid
        },
        dataType: 'json'
    }).then(function (echo) {
        // 渲染数据
        const urls = echo.urllist.split(';');
        smallpic.src = urls[0];//小图
        bpic.src = urls[0];//放大镜的图片
        title.innerHTML = echo.title;//标题
        price.innerHTML = echo.price;//价格
        //小图列表
        for (let value of urls) {
            piclisthtml += `
                <li><img src="${value}"/></li>
            `;
        }
        piclist.innerHTML = piclisthtml;
        //颜色
        for (let value of echo.color.split(';')) {
            colorhtml += `
                <li><img src="${value}"/></li>
            `;
        };
        color.innerHTML = colorhtml;
        let i = 0;
        const pics = document.querySelectorAll('.color ul li img');
        for (let value of echo.colortitle.split(';')) {
            pics[i++].title = `${value}`;
        };
        //尺码
        for (let value of echo.size.split(';')) {
            sizehtml += `
                <li>${value}</li>
            `;
        };
        size.innerHTML = sizehtml;



        // 小图列表居中
        const pic_list = document.querySelectorAll('.pic_list nav ul li');
        if (pic_list.length > 5) {
            rbtn.classList.add('show');
        } else {
            piclist.style.left = `${(340 - piclist.offsetWidth) / 2}px`;
        };
    })
};
export { render };